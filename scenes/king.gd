extends CharacterBody2D

@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

var player: Node2D = null
var playerInRange: bool = false
var shouldSummon: bool = false
var isSummoning: bool = false
var isAttacking: bool = false
var health: int = 300
var canTakeDamage: bool = true
var inDamageRange: bool = false

var patrol_points = [Vector2(3330, 664), Vector2(3330, 900), Vector2(3500, 900), Vector2(3500, 900)]
var current_patrol_index = 0

@export var projectile_scene: PackedScene = preload("res://enemies/Projectile.tscn")
@onready var shoot_timer = $ShootTimer

func _physics_process(_delta: float) -> void:
	process_damage()
	handle_patrol()

	if isSummoning:
		animated_sprite.play("Summoning")
	elif isAttacking:
		animated_sprite.play("Attacking")
	else:
		animated_sprite.play("default")

func handle_patrol():
	if playerInRange:
		var target = patrol_points[current_patrol_index]
		var dir = (target - global_position).normalized()
		position += dir * 60 * get_process_delta_time()  

		if global_position.distance_to(target) < 10:
			current_patrol_index = (current_patrol_index + 1) % patrol_points.size()

func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player = body
		playerInRange = true
		if not shouldSummon:
			shouldSummon = true
			$SummonTimer.start()
			$shootTimer.start()

func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		playerInRange = false

func _on_enemy_hitbox_body_shape_entered(_body_rid: RID, body: Node2D, _body_shape_index: int, _local_shape_index: int) -> void:
	if body and body.name == "Judge":
		inDamageRange = true

func _on_enemy_hitbox_body_shape_exited(_body_rid: RID, body: Node2D, _body_shape_index: int, _local_shape_index: int) -> void:
	if body and body.name == "Judge":
		inDamageRange = false

func _on_summon_timer_timeout() -> void:
	if shouldSummon:
		shouldSummon = false
		isSummoning = true
		await get_tree().create_timer(3.0).timeout
		
		var left_spawn = position + Vector2(-64, 0)
		var right_spawn = position + Vector2(64, 0)

		var knight_scene = preload("res://enemies/corrupted_knight.tscn")
		var left_knight = knight_scene.instantiate()
		var right_knight = knight_scene.instantiate()

		left_knight.global_position = left_spawn
		right_knight.global_position = right_spawn

		get_tree().current_scene.add_child(left_knight)
		get_tree().current_scene.add_child(right_knight)

		isSummoning = false
		$SummonTimer.start()

func process_damage():
	if inDamageRange and Global.isPlayerAttacking:
		if canTakeDamage:
			health -= 25
			canTakeDamage = false
			$takeDamageCD.start()
			print("King health = ", health)

			var knockback_direction = (position - player.position).normalized()
			var knockback_distance = 20.0
			var knockback_target = position + knockback_direction * knockback_distance

			var tween = get_tree().create_tween()
			tween.tween_property(self, "position", knockback_target, 0.1).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
			
			var damageTween := get_tree().create_tween()
			damageTween.tween_property(animated_sprite, "modulate", Color(1, 0.2, 0.2), 0.1) 
			damageTween.tween_property(animated_sprite, "modulate", Color(1,1,1), 0.1) 

			if health <= 0:
				await get_tree().create_timer(1).timeout
				queue_free()

func _on_damage_cd_timeout() -> void:
	canTakeDamage = true

func _on_shoot_timer_timeout() -> void:
	if player and playerInRange:
		isAttacking = true
		animated_sprite.play("Attacking")
		
		await get_tree().create_timer(1).timeout 
		
		var projectile = projectile_scene.instantiate()
		projectile.global_position = global_position
		projectile.direction = (player.global_position - global_position).normalized()
		get_tree().current_scene.add_child(projectile)
		
		await get_tree().create_timer(0.2).timeout
		isAttacking = false

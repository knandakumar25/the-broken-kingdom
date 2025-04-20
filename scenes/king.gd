extends CharacterBody2D

@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

var player: Node2D = null
var playerInRange: bool = false
var isSummoning: bool = false
var health: int = 100
var canTakeDamage: bool = true

func _physics_process(_delta: float) -> void:
	process_damage()

	if isSummoning:
		animated_sprite.play("Summoning")
	elif playerInRange:
		animated_sprite.play("Attacking")
	else:
		animated_sprite.play("default") # "default" is idle animation

func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player = body
		playerInRange = true
		isSummoning = true
		$SummonTimer.start()

func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		playerInRange = false
		isSummoning = false

func _on_enemy_hitbox_body_shape_entered(_body_rid: RID, body: Node2D, _body_shape_index: int, _local_shape_index: int) -> void:
	if body.name == "Judge":
		playerInRange = true

func _on_enemy_hitbox_body_shape_exited(_body_rid: RID, body: Node2D, _body_shape_index: int, _local_shape_index: int) -> void:
	if body.name == "Judge":
		playerInRange = false

func _on_summon_timer_timeout() -> void:
	isSummoning = false
	# You can spawn enemies or effects here if needed

func process_damage():
	if playerInRange and Global.isPlayerAttacking:
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

			if health <= 0:
				$"../Judge".show_score_popup(+10, Color.ORANGE)
				await get_tree().create_timer(1).timeout
				queue_free()

func _on_damage_cd_timeout() -> void:
	canTakeDamage = true

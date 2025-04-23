extends CharacterBody2D

# Used ChatGPT to generate a knockback effect

@onready var meter: Control = $"../../CanvasLayer/Meter"
@onready var anim_sprite: AnimatedSprite2D = $KnightSprite

var speed = 140
var chasingPlayer = false
var player = null

var health = 100
var playerInAttackRange = false

var canTakeDamage = true


func _physics_process(delta: float) -> void:
	
	processDamage()
	if health <= 0:
		anim_sprite.play("Purified")
	elif chasingPlayer:
		position += (player.position - position) / speed
		anim_sprite.play("Move")
		
		if(player.position.x - position.x) < 0:
			anim_sprite.flip_h = true
		else:
			anim_sprite.flip_h = false
	else:
		anim_sprite.play("Move")
		

func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player = body
		chasingPlayer = true
	


func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player = null
		chasingPlayer = false


func _on_enemy_hitbox_body_shape_entered(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body.name == "Judge":
		playerInAttackRange = true


func _on_enemy_hitbox_body_shape_exited(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body != null:
		if body.name == "Judge":
			playerInAttackRange = false
		
func processDamage():
	if playerInAttackRange && Global.isPlayerAttacking:
		if canTakeDamage:
			health -= 25
			$takeDamageCD.start()
			#position.y -= 20
			canTakeDamage = false
			print("enemy health = ", health )
			
			var knockback_direction = (position - player.position).normalized()
			var knockback_distance = 30.0
			var knockback_target = position + knockback_direction * knockback_distance
			
			var tween = get_tree().create_tween()
			tween.tween_property(self, "position", knockback_target, 0.15).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
			
			if ( health <= 0 ):
				$"../../Judge".show_score_popup(+5, Color.ORANGE)
				meter.add_points(5)
				await get_tree().create_timer(1).timeout
				self.queue_free()
	#if Global.isFocusKill:
	#	print("Enemy purified")
	#	meter.add_points(-10)
	#	self.queue_free()
	#	Global.isFocusKill = false

func _on_take_damage_cd_timeout() -> void:
	canTakeDamage = true

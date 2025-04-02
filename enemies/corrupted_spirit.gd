extends CharacterBody2D

@onready var meter: Control = $"../CanvasLayer/Meter"

var speed = 50
var chasingPlayer = false
var player = null

var health = 50
var playerInAttackRange = false

var canTakeDamage = true


func _physics_process(delta: float) -> void:
	
	processDamage()
	
	if chasingPlayer:
		position += (player.position - position) / speed
		$AnimatedSprite2D.play("Move")
		
		if(player.position.x - position.x) < 0:
			$AnimatedSprite2D.flip_h = true
		else:
			$AnimatedSprite2D.flip_h = false
	else:
		$AnimatedSprite2D.play("Idle")
		

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
			position.y -= 40
			canTakeDamage = false
			print("enemy health = ", health )
			if ( health <= 0 ):
				meter.add_points(10)
				self.queue_free()
	if Global.isFocusKill:
		print("Enemy purified")
		meter.add_points(-10)
		self.queue_free()
		Global.isFocusKill = false

func _on_damage_taken_cd_timeout() -> void:
	canTakeDamage = true

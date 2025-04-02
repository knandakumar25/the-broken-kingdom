extends CharacterBody2D

const SPEED = 225.0
var nearby_ruin: Area2D = null

var enemyInAttackRange = false
var enemyInPurifyRange = false
var enemyAttackCD = true
var health = 99
var playerAlive = true

var attacking = false
var focusing = false

func _physics_process(delta: float) -> void:
	
	enemyAttack() 
	playerAttack()
	playerFocus()
	
	if health <= 0:
		playerAlive = false
		health = 0
		print("Player Killed")
		self.queue_free()
		## Add End Screen
	
	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	
	# Normalize to prevent faster diagonal movement
	if input_vector != Vector2.ZERO:
		input_vector = input_vector.normalized()
	
	velocity = input_vector * SPEED
	move_and_slide()

func _process(delta: float) -> void:
	if nearby_ruin and Input.is_action_just_pressed("interact"):
		nearby_ruin.interact()

func _on_area_entered(area: Area2D) -> void:
	if area is Ruin:
		nearby_ruin = area

func _on_area_exited(area: Area2D) -> void:
	if area == nearby_ruin:
		nearby_ruin = null

func _on_player_hitbox_body_entered(body: Node2D) -> void:
	if body.name == "CorruptedSpirit":
		enemyInAttackRange = true

func _on_player_hitbox_body_exited(body: Node2D) -> void:
	if body.name == "CorruptedSpirit":
		enemyInAttackRange = false
		
func _on_purify_range_body_shape_entered(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body.name == "CorruptedSpirit":
		enemyInPurifyRange = true


func _on_purify_range_body_shape_exited(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body != null:
		if body.name == "CorruptedSpirit" :
			enemyInPurifyRange = false

func enemyAttack():
	if enemyInAttackRange && enemyAttackCD:
		health -= 33
		enemyAttackCD = false
		$enemyAttackTimer.start()
		print(health)
		
		if focusing:
			interruptFocus()
	
func _on_attack_cd_timeout() -> void:
	enemyAttackCD = true
	
func playerAttack():
	## var dir = current_dir
	if Input.is_action_just_pressed("attack"):
		Global.isPlayerAttacking = true
		print("swungScythe")
		attacking = true
		## if dir == "right":
		$playerAttackTimer.start()

func _on_player_attack_timer_timeout() -> void:
	$playerAttackTimer.stop()
	Global.isPlayerAttacking = false
	attacking = false
	
func playerFocus():
	if Input.is_action_pressed("purify") && enemyInPurifyRange:
		if !focusing:
			focusing = true
			$purifyTimer.start()
		elif Input.is_action_just_released("purify"):
			interruptFocus()

func _on_purify_timer_timeout() -> void:
	if enemyInPurifyRange:
		print("Enemy Purified")
		enemyInPurifyRange = false
		Global.isFocusKill = true
		focusing = false

func interruptFocus():
	print("Focus Interrupted!")
	focusing = false
	$purifyTimer.stop()

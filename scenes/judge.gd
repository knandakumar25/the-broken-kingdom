extends CharacterBody2D

# Used ChatGPT to make the score appears above the judge either for destroying or purifying enemies

const SPEED = 500.0
var nearby_ruin: Area2D = null

@onready var world = get_parent()
@onready var meter: Control = $"../CanvasLayer/Meter"
@onready var anim_sprite: AnimatedSprite2D = $AnimatedSprite2D
@onready var score_label: Label = $ScoreLabel

var enemyInAttackRange = false
var enemyInPurifyRange = false
var enemyAttackCD = true
var maxHealth = 6
var currentHealth: int = maxHealth
var playerAlive = true
var targetPurifyEnemy: Node2D = null

var attacking = false
var focusing = false
var current_direction: String = "down"


func _physics_process(delta: float) -> void:
	enemyAttack() 
	playerAttack()
	playerFocus()

	if currentHealth <= 0:
		playerAlive = false
		currentHealth = 0
		print("Player Killed")
		self.queue_free()
		## Add End Screen

	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")

	if input_vector != Vector2.ZERO:
		input_vector = input_vector.normalized()
		velocity = input_vector * SPEED
		move_and_slide()

		# Animation direction logic
		if abs(input_vector.x) > abs(input_vector.y):
			if input_vector.x > 0:
				current_direction = "right"
			else:
				current_direction = "left"
		else:
			if input_vector.y > 0:
				current_direction = "front"
			else:
				current_direction = "back"

		anim_sprite.play("walk_" + current_direction)
	else:
		velocity = Vector2.ZERO
		anim_sprite.play("default")  # Make sure you have these too

func _process(delta: float) -> void:
	Global.isFocusKill = false
	if nearby_ruin and Input.is_action_just_pressed("interact"):
		nearby_ruin.interact()

func _on_area_entered(area: Area2D) -> void:
	if area is Ruin:
		nearby_ruin = area

func _on_area_exited(area: Area2D) -> void:
	if area == nearby_ruin:
		nearby_ruin = null

func _on_player_hitbox_body_entered(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit"):
		enemyInAttackRange = true

func _on_player_hitbox_body_exited(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit"):
		enemyInAttackRange = false
		
func _on_purify_range_body_shape_entered(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body.name.contains("CorruptedSpirit"):
		enemyInPurifyRange = true
		targetPurifyEnemy = body

func _on_purify_range_body_shape_exited(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body != null && body.name.contains("CorruptedSpirit"):
		enemyInPurifyRange = false
		if targetPurifyEnemy == body:
			targetPurifyEnemy = null

func enemyAttack():
	if enemyInAttackRange && enemyAttackCD:
		currentHealth -= 1
		enemyAttackCD = false
		$enemyAttackTimer.start()
		print(currentHealth)
		
		world.heartsContainer.updateHearts(currentHealth)
		
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
		print("Purifying...")
		if !focusing:
			focusing = true
			$purifyTimer.start()
		elif Input.is_action_just_released("purify"):
			interruptFocus()

func _on_purify_timer_timeout() -> void:
	if enemyInPurifyRange && targetPurifyEnemy != null && targetPurifyEnemy.is_inside_tree():
		print("Enemy Purified")
		targetPurifyEnemy.queue_free()
		show_score_popup(10, Color.SKY_BLUE)
		meter.add_points(-10)
		focusing = false
		targetPurifyEnemy = null
		enemyInPurifyRange = false
		$purifyTimer.stop()

func interruptFocus():
	print("Focus Interrupted!")
	focusing = false
	$purifyTimer.stop()
	
func currentCamera():
	if Global.currentScene == "world":
		$Camera2D.enabled = true
		$SpiritWorldCamera.enabled = false
	elif Global.currentScene == "spirit_world":
		$Camera2D.enabled = false
		$SpiritWorldCamera.enabled = true
		
func show_score_popup(value: int, color: Color) -> void:
	if (value > 0):
		score_label.text = "+" + str(value)
	else:
		score_label.text = str(value)
	score_label.modulate = color
	score_label.show()
	
	# Animate the label (move up and fade out)
	var tween := get_tree().create_tween()
	tween.tween_property(score_label, "position", score_label.position + Vector2(0, -40), 1.0)
	tween.tween_property(score_label, "modulate:a", 0.0, 1.0)
	tween.connect("finished", func():
		score_label.hide()
		score_label.modulate.a = 1.0
		score_label.position.y += 40 # reset to original position
	)

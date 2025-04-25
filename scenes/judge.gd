extends CharacterBody2D

# Used ChatGPT to make the score appears above the judge either for destroying or purifying enemies

const SPEED = 330.0
var nearby_ruin: Area2D = null

@onready var world: = get_parent()
@onready var meter: Control = $"../CanvasLayer/Meter"
@onready var anim_sprite: AnimatedSprite2D = $AnimatedSprite2D
@onready var score_label: Label = $ScoreLabel

var enemyInAttackRange = false
var playerInHurtRange = false
var enemyInPurifyRange = false
var enemyAttackCD = true
var maxHealth = 6
var currentHealth: int = maxHealth
var playerAlive = true
var targetPurifyEnemy: Node2D = null
var ruinDestroyed = false

var attacking = false
var focusing = false
var current_direction: String = "down"

var enemyType


func _physics_process(delta: float) -> void:
	enemyAttack() 
	playerAttack()
	playerFocus()

	if currentHealth <= 0:
		playerAlive = false
		currentHealth = 0
		print("Player Killed")
		
		Global.playerSavedPos = Global.startingTile
		Global.playerSavedHealth = maxHealth
		
		Global.worldRespawnPos = Vector2(3103, 849)
		if enemyType == "king" || (enemyType == "knight" and world.name == "CastleInside"):
			Global.defeatedByKing = true;
		
		get_tree().reload_current_scene()
		## Add End Screen
		
	if ruinDestroyed:
		return

	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	input_vector.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
		
	if focusing && ( input_vector != Vector2.ZERO ):
		input_vector = input_vector.normalized()
		velocity = input_vector * SPEED
		move_and_slide()
		return
		
	if input_vector != Vector2.ZERO && !focusing:
		input_vector = input_vector.normalized()
		velocity = input_vector * SPEED
		move_and_slide()

		if !attacking:
			# Only change animation if not attacking
			if abs(input_vector.x) > abs(input_vector.y):
				current_direction = "right" if input_vector.x > 0 else "left"
			else:
				current_direction = "front" if input_vector.y > 0 else "back"
			anim_sprite.play("walk_" + current_direction)
	elif focusing:
		velocity = Vector2.ZERO
		if !attacking:
			anim_sprite.play("purify")
	else:
		velocity = Vector2.ZERO
		if !attacking:
			anim_sprite.play("default")
 

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

func _on_attack_range_body_entered(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight"):
		
		if body.name.contains("CorruptedKnight"):
			enemyType = "knight"
		else:
			enemyType = "spirit"
			
		enemyInAttackRange = true


func _on_attack_range_body_exited(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight"):
		enemyInAttackRange = false
		enemyType = null


func _on_player_hitbox_body_entered(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight") || body.name == "King":
		
		if body.name.contains("CorruptedKnight"):
			enemyType = "knight"
		elif body.name == "King":
			enemyType = "king"
		else:
			enemyType = "spirit"
			
		playerInHurtRange = true

func _on_player_hitbox_body_exited(body: Node2D) -> void:
	if body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight") || body.name == "King":
		playerInHurtRange = false
		
func _on_purify_range_body_shape_entered(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight"):
		
		enemyInPurifyRange = true
		targetPurifyEnemy = body

func _on_purify_range_body_shape_exited(body_rid: RID, body: Node2D, body_shape_index: int, local_shape_index: int) -> void:
	if body != null && ( body.name.contains("CorruptedSpirit") || body.name.contains("CorruptedKnight") ):
		enemyInPurifyRange = false
		if targetPurifyEnemy == body:
			targetPurifyEnemy = null

func enemyAttack():
	if playerInHurtRange && enemyAttackCD:
		
		if enemyType == "spirit":
			currentHealth -= 1
		elif enemyType == "knight":
			currentHealth -= 2
		elif enemyType == "king":
			currentHealth -= 3
			
		enemyAttackCD = false
		$enemyAttackTimer.start()
		print(currentHealth)
		
		world.heartsContainer.updateHearts(currentHealth)
		
		var damageTween := get_tree().create_tween()
		damageTween.tween_property(anim_sprite, "modulate", Color(1, 0.2, 0.2), 0.1) 
		damageTween.tween_property(anim_sprite, "modulate", Color(1,1,1), 0.1) 

		
		if focusing:
			interruptFocus()
	
func _on_attack_cd_timeout() -> void:
	enemyAttackCD = true
	
func playerAttack():

	if Input.is_action_just_pressed("attack"):
		$playerAttackTimer.start()
		Global.isPlayerAttacking = true
		print("swungScythe")
		attacking = true
		
		match current_direction:
			"right":
				anim_sprite.flip_h = true
			"left":
				anim_sprite.flip_h = false
			"front":
				anim_sprite.flip_h = false
			"back":
				anim_sprite.flip_h = false 
				
		anim_sprite.play("attack")
		

func _on_player_attack_timer_timeout() -> void:
	$playerAttackTimer.stop()
	Global.isPlayerAttacking = false
	attacking = false
	anim_sprite.flip_h = false 
	anim_sprite.play("default")
	
func playerFocus():
	if Input.is_action_pressed("purify") && enemyInPurifyRange:
		print("Purifying...")
		anim_sprite.play("purify")
		if !focusing:
			focusing = true
			$purifyTimer.start()
		elif Input.is_action_just_released("purify"):
			interruptFocus()

func _on_purify_timer_timeout() -> void:
	if enemyInPurifyRange && targetPurifyEnemy != null && targetPurifyEnemy.is_inside_tree():
		
		if targetPurifyEnemy.name.contains("CorruptedSpirit"):
			show_score_popup(+2, Color.SKY_BLUE)
			meter.add_points(-2)
		if targetPurifyEnemy.name.contains("CorruptedKnight"):
			show_score_popup(+5, Color.SKY_BLUE)
			meter.add_points(-5)
		
		targetPurifyEnemy.purified = true
		targetPurifyEnemy.playPurifiedAnimation()

		print("Enemy Purified")
		
		focusing = false
		targetPurifyEnemy = null
		enemyInPurifyRange = false
		$purifyTimer.stop()

func interruptFocus():
	
	#var interruptFocusTween := get_tree().create_tween()
	#interruptFocusTween.tween_property(anim_sprite, "modulate", Color(0.3, 0.3, 1), 0.1) 
	#interruptFocusTween.tween_property(anim_sprite, "modulate", Color(1, 1, 1), 0.1)     
	
	print("Focus Interrupted!")
	focusing = false
	anim_sprite.play("default")
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

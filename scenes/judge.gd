extends CharacterBody2D

const SPEED = 225.0
var nearby_ruin: Area2D = null

func _physics_process(delta: float) -> void:
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

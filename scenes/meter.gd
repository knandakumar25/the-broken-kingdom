extends Control

# Used ChatGPT to generate key functions and mechanics and making the fill bar glow

@export var min_value: int = -100
@export var max_value: int = 100

@onready var background = $Background
@onready var fill_bar = $FillBar

func _ready() -> void:
	update_meter()
	

#func _input(event: InputEvent) -> void:
	#if event.is_action_pressed("ui_right"):
		#add_points(5)   # Example: bad action, towards Sun
	#elif event.is_action_pressed("ui_left"):
		#add_points(-5)  # Example: good action, towards Moon

func _process(delta: float) -> void:
	
	var score = Global.score
	# Optional flavor text based on morality position
	if score > 0:
		$Label2.text = "You have progressed along the path of destruction."
	elif score < 0:
		$Label2.text = "You have progressed along the path of restoration."
	else:
		$Label2.text = ""

func add_points(points: int) -> void:
	
	Global.score += points
	# Clamp to min and max morality range
	# current_value = clamp(current_value + points, min_value, max_value)
	update_meter()
	glow_fill_bar(Color.ORANGE)
	
func getScore() -> int:
	var score = Global.score
	return score

func update_meter() -> void:
	var score = Global.score
	var half_width = background.size.x / 2
	var ratio = float(score) / max(abs(min_value), max_value)
	var fill_width = abs(ratio) * half_width

	# Update fill bar width
	fill_bar.size.x = fill_width

	# Shift fill bar left if negative, right if positive
	if score < 0:
		fill_bar.position.x = background.position.x + half_width - fill_width
	else:
		fill_bar.position.x = background.position.x + half_width
	
	# Debug / UI update
	$Label.text = "Current value: " + str(score)

func glow_fill_bar(glow_color: Color) -> void:
	# Remove any previous tweens
	for child in get_children():
		if child.get_class() == "Tween":
			child.kill()
			remove_child(child)
			child.queue_free()

	# Create a new Tween node
	var tween = get_tree().create_tween()

	# Set modulate to normal first
	fill_bar.modulate = Color(1, 1, 1, 1)
	
	# Animate to glow color and back
	tween.tween_property(fill_bar, "modulate", glow_color, 0.15).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
	tween.tween_interval(1.5)
	tween.tween_property(fill_bar, "modulate", Color(1, 1, 1, 1), 0.15).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)

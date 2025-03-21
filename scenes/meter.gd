extends Control

@export var min_value: int = -100
@export var max_value: int = 100
var current_value: int = 0

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
	# Optional flavor text based on morality position
	if current_value > 0:
		$Label2.text = "You have progressed along the path of destruction."
	elif current_value < 0:
		$Label2.text = "You have progressed along the path of restoration."
	else:
		$Label2.text = ""

func add_points(points: int) -> void:
	# Clamp to min and max morality range
	current_value = clamp(current_value + points, min_value, max_value)
	update_meter()

func update_meter() -> void:
	var half_width = background.size.x / 2
	var ratio = float(current_value) / max(abs(min_value), max_value)
	var fill_width = abs(ratio) * half_width

	# Update fill bar width
	fill_bar.size.x = fill_width

	# Shift fill bar left if negative, right if positive
	if current_value < 0:
		fill_bar.position.x = background.position.x + half_width - fill_width
	else:
		fill_bar.position.x = background.position.x + half_width
	
	# Debug / UI update
	$Label.text = "Current value: " + str(current_value)

extends Control

@export var min_value: int = -100
@export var max_value: int = 100

@onready var background = $Background
@onready var fill_bar = $FillBar

func _ready() -> void:
	update_meter()

func _process(_delta: float) -> void:
	update_meter()

func add_points(points: int) -> void:
	Global.score = clamp(Global.score + points, min_value, max_value)
	update_meter()

	if Global.score > 0:
		glow_fill_bar(Color.CORAL)
	elif Global.score < 0:
		glow_fill_bar(Color.DODGER_BLUE)

func getScore() -> int:
	return Global.score

func update_meter() -> void:
	if (Global.score >= -100 and Global.score <= 100):
		var score = clamp(Global.score, min_value, max_value)
		var half_width = background.size.x / 2
		var ratio = float(score) / max(abs(min_value), max_value)
		var fill_width = abs(ratio) * half_width

		var tween = get_tree().create_tween()
		tween.tween_property(fill_bar, "size:x", fill_width, 0.3).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
	

		var target_x = background.position.x + half_width
		if score < 0:
			target_x -= fill_width
		tween.tween_property(fill_bar, "position:x", target_x, 0.3).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

		if score > 0:
			fill_bar.modulate = Color(1.0, 0.65, 0.2, 1.0)  
		elif score < 0:
			fill_bar.modulate = Color(0.5, 0.75, 1.0, 1.0) 
		else:
			fill_bar.modulate = Color(1, 1, 1, 1.0)         

func glow_fill_bar(glow_color: Color) -> void:
	var tween = get_tree().create_tween()
	tween.tween_property(fill_bar, "modulate", glow_color, 0.15).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
	tween.tween_interval(0.5)
	tween.tween_property(fill_bar, "modulate", fill_bar.modulate, 0.15).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)

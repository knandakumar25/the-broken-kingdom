extends Control

@export var max_morality: int = 100
var morality_points: int = 0  # Positive = Moon, Negative = Sun

@onready var white_bar = $WhiteBar
@onready var yellow_bar = $YellowBar
@onready var background = $Background
@onready var moon_icon = $MoonIcon
@onready var sun_icon = $SunIcon
@onready var morality_label = $MoralityLabel

func _ready():
	set_morality(0)      # Neutral
	update_meter()
	set_morality(50)     # Lean Moon
	update_meter()
	set_morality(-30)    # Lean Sun
	update_meter()
	set_morality(100)    # Full Moon
	update_meter()
	set_morality(-100)   # Full Sun
	update_meter()

func set_morality(points: int):
	morality_points = clamp(points, -max_morality, max_morality)
	update_meter()

func update_meter():
	var total_width = background.size.x
	var moon_target = 0.0
	var sun_target = 0.0

	# Calculate target sizes
	if morality_points == 0:
		moon_target = total_width / 2
		sun_target = total_width / 2
	elif morality_points > 0:
		var moon_width = (morality_points / max_morality) * total_width
		moon_target = (total_width / 2) + moon_width
		sun_target = total_width - moon_target
	elif morality_points < 0:
		var sun_width = (abs(morality_points) / max_morality) * total_width
		sun_target = (total_width / 2) + sun_width
		moon_target = total_width - sun_target

	# Start SceneTreeTween for smooth animation
	var tween = create_tween()
	tween.tween_property(white_bar, "size:x", moon_target, 0.5).set_trans(Tween.TRANS_SINE)
	tween.tween_property(yellow_bar, "size:x", sun_target, 0.5).set_trans(Tween.TRANS_SINE)

	# Immediately update positions (positions don’t animate in this case)
	white_bar.position.x = 0
	yellow_bar.position.x = moon_target

	# Update floating morality label
	morality_label.text = "Morality: %d" % morality_points
	morality_label.position.x = (total_width / 2) - (morality_label.size.x / 2)
	morality_label.position.y = -30  # Above the bar

	# Icon brightness
	if morality_points > 0:
		moon_icon.modulate = Color(1, 1, 1)      # Bright moon
		sun_icon.modulate = Color(0.5, 0.5, 0.5) # Dim sun
	elif morality_points < 0:
		sun_icon.modulate = Color(1, 1, 1)
		moon_icon.modulate = Color(0.5, 0.5, 0.5)
	else:
		sun_icon.modulate = Color(1, 1, 1)
		moon_icon.modulate = Color(1, 1, 1)

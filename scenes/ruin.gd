extends Area2D
class_name Ruin
@export var destroyed_texture: Texture  # Set in Inspector
@export var rebuilt_texture: Texture  # Set in Inspector
@export var about: String
@export var rebuilt_text: String
@export var destroyed_text: String

@onready var label: Label = $Label
@onready var rebuild_button: Button = $ButtonRebuild
@onready var destroy_button: Button = $ButtonDestroy
@onready var meter: Control = $"../CanvasLayer/Meter"
@onready var ruin_image: Sprite2D = $Sprite2D
@onready var label2: Label = $"../CanvasLayer/Scholar2/Label"
@onready var scholar_2: Area2D = $"../CanvasLayer/Scholar2"

var player_in_range = false
var rebuilt = false  # Track if the ruin has been rebuilt

func _ready() -> void:
	rebuild_button.hide()
	destroy_button.hide()
	#ruin_image.texture = destroyed_texture  # Set the initial destroyed state
	rebuild_button.connect("pressed", _on_rebuild_pressed)
	destroy_button.connect("pressed", _on_destroy_pressed)

func _process(delta: float) -> void:
	if player_in_range and Input.is_action_just_pressed("interact") and !rebuilt:
		label.text = about
		rebuild_button.show()
		destroy_button.show()

func _on_rebuild_pressed() -> void:
	scholar_2.show()
	meter.add_points(-10)  # Moon path
	ruin_image.texture = rebuilt_texture  # Change the image
	rebuilt = true
	cleanup_ui()
	label2.text = rebuilt_text
	await get_tree().create_timer(5).timeout
	label2.text = ""
	scholar_2.hide()

func cleanup_ui() -> void:
	label.hide()
	rebuild_button.hide()
	destroy_button.hide()

func _on_destroy_pressed() -> void:
	scholar_2.show()
	meter.add_points(10)  # Sun path
	label2.text = destroyed_text
	await get_tree().create_timer(5).timeout
	label2.text = ""
	scholar_2.hide()
	queue_free()  # Remove ruin after destroying

func _on_body_entered(body: Node2D) -> void:
	if body.name == "Judge" and !rebuilt:
		player_in_range = true
		label.show()
		label.text = "[E] to interact"

func _on_body_exited(body: Node2D) -> void:
	if body.name == "Judge" and !rebuilt:
		player_in_range = false
		label.hide()
		rebuild_button.hide()
		destroy_button.hide()

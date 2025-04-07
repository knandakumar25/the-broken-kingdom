# Used ChatGPT to create the code for a Ruin
extends Area2D
class_name Ruin
@export var destroyed_texture: Texture  # Set in Inspector
@export var rebuilt_texture: Texture  # Set in Inspector
@export var about: String

@onready var label: Label = $Label
@onready var rebuild_button: Button = $ButtonRebuild
@onready var destroy_button: Button = $ButtonDestroy
@onready var meter: Control = $"../CanvasLayer/Meter"
@onready var ruin_image: Sprite2D = $Sprite2D
@onready var scholar: CharacterBody2D = $"../Scholar"

var player_in_range = false
var rebuilt = false  # Track if the ruin has been rebuilt
var interacted = false

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
	var scene_name = get_scene_file_path().get_file().get_basename()
	scene_name = capitalize_first_letter(scene_name)
	if player_in_range and rebuilt:
		label.show()
		label.text = "Press [L-SHIFT] to enter: " + scene_name
	if player_in_range and Input.is_action_just_pressed("enter_building") and rebuilt:
		if (scene_name == "Castle"):
			get_tree().change_scene_to_file("res://scenes/castle_inside.tscn")
		elif (scene_name == "Academy"):
			get_tree().change_scene_to_file("res://scenes/academy_inside.tscn")

func capitalize_first_letter(text: String) -> String:
	if text.length() == 0:
		return text
	return text[0].to_upper() + text.substr(1, text.length() - 1)

func _on_rebuild_pressed() -> void:
	meter.add_points(-10)  # Moon path
	ruin_image.texture = rebuilt_texture  # Change the image
	scholar.position = self.position + Vector2(160, 0)
	rebuilt = true
	cleanup_ui()
	label.position = label.position + Vector2(50, -100)

func cleanup_ui() -> void:
	label.hide()
	rebuild_button.hide()
	destroy_button.hide()

func _on_destroy_pressed() -> void:
	meter.add_points(10)  # Sun path
	scholar.position = self.position + Vector2(160, 0)
	ruin_image.texture = null
	cleanup_ui()  # Remove ruin after destroying

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

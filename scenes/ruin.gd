# Used ChatGPT to create the code for a Ruin
extends Area2D
class_name Ruin
@export var destroyed_texture: Texture  # Set in Inspector
@export var rebuilt_texture: Texture  # Set in Inspector
@export var about: String

@onready var label: Label = $Label
@onready var rebuild_button: Button = $ButtonRebuild
@onready var destroy_button: Button = $ButtonDestroy
@onready var meter: Control = $"../../CanvasLayer/Meter"
@onready var ruin_image: Sprite2D = $Sprite2D
@onready var scholar: CharacterBody2D = $"../../Scholar"

var player_in_range = false
var rebuilt = false  # Track if the ruin has been rebuilt
var interacted = false
var player_ref: CharacterBody2D = null
var scholar_in_range = false


func _ready() -> void:
	rebuild_button.hide()
	destroy_button.hide()
	#ruin_image.texture = destroyed_texture  # Set the initial destroyed state
	rebuild_button.connect("pressed", _on_rebuild_pressed)
	destroy_button.connect("pressed", _on_destroy_pressed)

func _process(delta: float) -> void:
	if player_in_range and Input.is_action_just_pressed("interact") and !rebuilt and is_instance_valid(rebuild_button) and is_instance_valid(destroy_button):
		label.text = about
		rebuild_button.show()
		destroy_button.show()

	var scene_name = get_scene_file_path().get_file().get_basename()
	scene_name = capitalize_first_letter(scene_name)

	if player_in_range and rebuilt:
		label.show()
		label.text = "Press [E] to enter: " + scene_name

	if player_in_range and Input.is_action_just_pressed("interact") and rebuilt:
		if player_ref and not Global.transitionScene:
			Global.playerSavedPos = player_ref.global_position
			Global.transitionScene = true  # Prevent multiple transitions
			scene_name = capitalize_first_letter(get_scene_file_path().get_file().get_basename())

			if scene_name == "Castle":
				Global.currentScene = "castle_inside"
				await get_tree().change_scene_to_file("res://scenes/castle_inside.tscn")
				Global.finishSceneChange()
			elif scene_name == "Academy":
				Global.currentScene = "academy_inside"
				await get_tree().change_scene_to_file("res://scenes/academy_inside.tscn")
				Global.finishSceneChange()


func capitalize_first_letter(text: String) -> String:
	if text.length() == 0:
		return text
	return text[0].to_upper() + text.substr(1, text.length() - 1)

func _on_rebuild_pressed() -> void:
	meter.add_points(-10)  # Moon path
	ruin_image.texture = rebuilt_texture  # Change the image
	scholar.position = self.position + Vector2(-300, 120)
	rebuilt = true
	cleanup_ui()
	label.position = label.position + Vector2(50, -100)
	var scene_name = get_scene_file_path().get_file().get_basename()
	scene_name = capitalize_first_letter(scene_name)
	print(1)
	if (scene_name == "Church"):
		Global.church = rebuilt_texture
	if (scene_name == "Castle"):
		print(2)
		Global.castle = rebuilt_texture
	if (scene_name == "Prison"):
		Global.prison = rebuilt_texture
	if (scene_name == "Theatre"):
		Global.theatre = rebuilt_texture
	if (scene_name == "Library"):
		Global.library = rebuilt_texture
	if (scene_name == "Cookhouse"):
		Global.cookhouse = rebuilt_texture
	if (scene_name == "Farm"):
		Global.farm = rebuilt_texture
	if (scene_name == "Academy"):
		Global.academy = rebuilt_texture
	

func cleanup_ui() -> void:
	label.hide()
	rebuild_button.queue_free()
	destroy_button.queue_free()

func _on_destroy_pressed() -> void:
	meter.add_points(10)  # Sun path
	scholar.position = self.position + Vector2(-300, 120)
	ruin_image.texture = null
	cleanup_ui()  # Remove ruin after destroying

func _on_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		
	if body.name == "Judge" and !rebuilt and is_instance_valid(rebuild_button) and is_instance_valid(destroy_button):
		player_in_range = true
		player_ref = body
		label.show()
		label.text = "[E] to interact"

func _on_body_exited(body: Node2D) -> void:
	if body.name == "Judge" and !rebuilt and is_instance_valid(rebuild_button) and is_instance_valid(destroy_button):
		player_in_range = false
		label.hide()
		rebuild_button.hide()
		destroy_button.hide()
		
	if body.name == "Judge":
		player_in_range = false


func _on_area_2d_body_entered(body: Node2D) -> void:
	print("c")
	if body.name == "Judge":
		print("d")
		scholar_in_range = true


func _on_area_2d_body_exited(body: Node2D) -> void:
	print("e")
	if body.name == "Judge":
		print("f")
		scholar_in_range = false

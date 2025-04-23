extends Area2D

@export var about: String

@onready var label: Label = $CastleLabel
@onready var player: CharacterBody2D = $"../../Judge"
@onready var ruin_image: Sprite2D = $Sprite2D
@onready var scholar: CharacterBody2D = $"../../Scholar"

var player_in_range = false
var player_ref: CharacterBody2D = null

func _ready() -> void:
	pass

func _process(delta: float) -> void:
	var scene_name = get_scene_file_path().get_file().get_basename()
	scene_name = capitalize_first_letter(scene_name)

	if player_in_range and scene_name == "Castle":
		if Global.score == 0 or Global.score == -1:
			label.show()
			label.text = "Press [Z] to enter: " + scene_name

			if Input.is_action_just_pressed("interact"):
				if player_ref and not Global.transitionScene:
					Global.playerSavedPos = player_ref.global_position
					Global.transitionScene = true
					Global.currentScene = "castle_inside"
					await get_tree().change_scene_to_file("res://scenes/castle_inside.tscn")
					Global.finishSceneChange()
		else:
			label.show()
			label.text = "You must complete a path before entering"

func capitalize_first_letter(text: String) -> String:
	if text.length() == 0:
		return text
	return text[0].to_upper() + text.substr(1, text.length() - 1)

func _on_interaction_radius_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		player_ref = body
		


func _on_interaction_radius_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false

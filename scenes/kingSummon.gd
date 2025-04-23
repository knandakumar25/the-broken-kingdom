extends CharacterBody2D

const speed = 0
var current_state = SIDE_LEFT

var is_chatting = false
var is_roaming = false

var start_pos
var player
var player_in_range = false

@export var king_scene: PackedScene = preload("res://enemies/king.tscn")

enum {
	IDLE
}

func _ready():
	randomize()
	start_pos = position

func _process(delta):
	if Input.is_action_just_pressed("interact") and player_in_range and not is_chatting:
		$DialogueUI.start()
		is_roaming = false
		is_chatting = true

func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true

func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false

func _on_dialogue_ui_dialogue_finished() -> void:
	is_chatting = false


	await get_tree().create_timer(1.0).timeout

	var king = king_scene.instantiate()
	king.global_position = position + Vector2(0, -100) 
	get_tree().current_scene.add_child(king)

	queue_free()  

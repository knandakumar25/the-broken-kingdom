extends CharacterBody2D

const speed = 0
var current_state = SIDE_LEFT

var is_chatting = false
var is_roaming = false;

var start_pos
var player
var player_in_range = false

enum {
	IDLE
}

func _ready():
	randomize()
	start_pos = position


func _process(delta):

	if Input.is_action_just_pressed("interact"):
		print("chatting with NPC")
		$DialogueUI.start()
		is_roaming = false
		is_chatting = true



func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.has_method("Judge"):
		player = body
		player_in_range = true



func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.has_method("Judge"):
		player_in_range = false


func _on_dialogue_ui_dialogue_finished() -> void:
	is_chatting = false

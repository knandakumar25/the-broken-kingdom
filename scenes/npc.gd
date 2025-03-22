extends Area2D

@export var dialogues = ["Dialogue 1", "Dialogue 2", "Dialogue 3"]
var current_dialogue = 0
var player_in_range = false
var dialogue_started = false
@onready var label: Label = $"../Label"

func _process(delta: float) -> void:
	if player_in_range and not dialogue_started and Input.is_action_just_pressed("interact"):
		label.text = "[Tab] to continue"
		dialogue_started = true
		show_dialogue()
	elif dialogue_started and Input.is_action_just_pressed("advance_dialogue"):
		show_dialogue()

func show_dialogue() -> void:
	if current_dialogue < dialogues.size():
		get_node("../DialogueBox").show_text(dialogues[current_dialogue])
		current_dialogue += 1
	else:
		label.hide()
		get_node("../DialogueBox").show_choice()

func _on_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		label.show()
		label.text = "[E] to interact"

func _on_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		label.text = ""
		label.hide()

extends Node2D

@onready var label: Label = $Area2D/ExitLabel
@onready var player: CharacterBody2D = $Judge
var player_in_range = false

# Save the state when entering the building
var savedPlayerPos: Vector2
var savedPlayerHealth: int

func _ready():
	player.global_position = Global.playerSavedPos
	print(player.global_position)

# When entering the building, save the world state
func _on_area_2d_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		label.show()
		label.text = "Press [E] to exit"

		# Save the player's position and health state
		savedPlayerPos = Global.playerSavedPos
		savedPlayerHealth = player.currentHealth

func _process(delta: float) -> void:
	if player_in_range and Input.is_action_just_pressed("exit_building"):
		exit_building()

func exit_building():
	# Save the current player position before transitioning
	Global.playerSavedPos = savedPlayerPos
	player.currentHealth = savedPlayerHealth
	Global.transitionScene = true
	Global.currentScene = "world"
	get_tree().change_scene_to_file("res://scenes/world.tscn")

func _on_area_2d_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		label.hide()

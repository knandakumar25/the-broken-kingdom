extends Node2D

@onready var player := $Judge

func _ready():
	player.global_position = Global.playerSavedPos
	
func _process(delta):
	pass

func _on_fountain_exit_portal_body_entered(body: Node2D) -> void:
	if body.name == "Judge" && !Global.transitionScene:
		Global.playerSavedPos = body.global_position
		Global.transitionScene = true
		changeScene()

func _on_fountain_exit_portal_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		print("in portal")
		Global.transitionScene = false

func changeScene():
	if Global.transitionScene:
		if Global.currentScene == "spirit_world":
			Global.currentScene = "world" 
			await get_tree().change_scene_to_file("res://scenes/world.tscn")
			Global.finishSceneChange()
		elif Global.currentScene == "world":
			Global.currentScene = "spirit_world" 
			await get_tree().change_scene_to_file("res://scenes/spirit_world.tscn")
			Global.finishSceneChange()

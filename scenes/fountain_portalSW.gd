extends StaticBody2D

var player_in_range = false

func _process(delta: float) -> void:
	if player_in_range and Input.is_action_just_pressed("interact"):
		print("EXITportalInteracted")
		Global.transitionScene = true
		Global.currentScene = "spirit_world"
		changeScene()

func _on_fountain_portal_area_body_entered(body: Node2D) -> void:

	if body.name == "Judge":
		player_in_range = true
		Global.playerSavedPos = body.global_position
		

func changeScene():
	if Global.transitionScene:
		if Global.currentScene == "spirit_world":
			Global.currentScene = "world"  
			# await $TeleportEffect.get_node("AnimationPlayer").animation_finished
			await get_tree().change_scene_to_file("res://scenes/world.tscn")
			Global.finishSceneChange()  # Ensure the state is reset
			

extends StaticBody2D

var player_in_rangeSW = false

func _process(delta: float) -> void:
	$AnimatedSprite2D.play("PortalSW")
	
	if player_in_rangeSW and Input.is_action_just_pressed("interact"):
		print("EXITportalInteracted")
		Global.transitionScene = true
		Global.currentScene = "spirit_world"
		changeScene()
		
func _on_fountain_portal_area_body_entered(body: Node2D) -> void:

	if body.name == "Judge":
		player_in_rangeSW = true
		Global.playerSavedPos = body.global_position
		
func _on_fountain_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = false
		

func changeScene():
	if Global.transitionScene:
		if Global.currentScene == "spirit_world":
			Global.currentScene = "world"  
			# await $TeleportEffect.get_node("AnimationPlayer").animation_finished
			await get_tree().change_scene_to_file("res://scenes/world.tscn")
			Global.finishSceneChange()  # Ensure the state is reset
			


func _on_statue_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = true
		Global.playerSavedPos = body.global_position


func _on_statue_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = false


func _on_market_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = true
		Global.playerSavedPos = body.global_position


func _on_market_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = false

func _on_festival_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = true
		Global.playerSavedPos = body.global_position


func _on_festival_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_rangeSW = false

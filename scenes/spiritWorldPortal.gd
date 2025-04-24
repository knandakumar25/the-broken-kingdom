extends StaticBody2D

var player_in_range = false

@onready var z_prompt = $ZLabel

func _ready():
	z_prompt.visible = true
	z_prompt.modulate.a = 0 

func _process(delta: float) -> void:
	$AnimatedSprite2D.play("PortalOW")
	
	if player_in_range and Input.is_action_just_pressed("interact"):
		print("portalInteracted")
		Global.transitionScene = true
		Global.currentScene = "world"
		changeScene()

func changeScene():
	if Global.transitionScene:
		if Global.currentScene == "world":
			Global.currentScene = "spirit_world"  
			# await $TeleportEffect.get_node("AnimationPlayer").animation_finished
			await get_tree().change_scene_to_file("res://scenes/spirit_world.tscn")
			Global.finishSceneChange()  # Ensure the state is reset
			
func _on_fountain_portal_area_body_entered(body: Node2D) -> void:

	if body.name == "Judge":
		player_in_range = true
		Global.playerSavedPos = body.global_position
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 1.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)
		
func _on_statue_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		Global.playerSavedPos = body.global_position
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 1.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

func _on_fountain_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 0.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)
		
func _on_statue_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 0.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)

func _on_market_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		Global.playerSavedPos = body.global_position
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 1.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)


func _on_market_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 0.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)


func _on_festival_portal_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		Global.playerSavedPos = body.global_position
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 1.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)


func _on_festival_portal_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 0.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)

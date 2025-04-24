extends CharacterBody2D

const SPEED = 0
var current_state = SIDE_LEFT

var is_chatting = false
var is_roaming = false

var start_pos
var player
var player_in_range = false
@onready var anim_sprite: AnimatedSprite2D = $AnimatedSprite2D

@onready var z_prompt = $ZLabel

enum {
	IDLE
}

func _ready():
	randomize()
	start_pos = position
	anim_sprite.play("scholar_idle")
	z_prompt.visible = true
	z_prompt.modulate.a = 0 


func _process(delta):
	
	if Input.is_action_just_pressed("interact") and player_in_range:
		if not is_chatting:
			anim_sprite.play("scholar_openBook")
			is_roaming = false
			is_chatting = true
			$DialogueUI.start()


	if is_chatting:
		if anim_sprite.animation == "scholar_openBook" and not $AnimatedSprite2D.is_playing():
			anim_sprite.play("scholar_read")
	else:
		if $AnimatedSprite2D.animation == "scholar_closeBook" and not $AnimatedSprite2D.is_playing():
			anim_sprite.play("scholar_idle")
		elif anim_sprite.animation != "scholar_idle":
			anim_sprite.play("scholar_idle")


func _on_detection_area_body_entered(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = true
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 1.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

func _on_detection_area_body_exited(body: Node2D) -> void:
	if body.name == "Judge":
		player_in_range = false
		var tween = get_tree().create_tween()
		tween.tween_property(z_prompt, "modulate:a", 0.0, 0.4).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_IN)

func _on_dialogue_ui_dialogue_finished() -> void:
	is_chatting = false

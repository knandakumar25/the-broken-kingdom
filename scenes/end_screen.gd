extends Control

@onready var buttonSun = $MarginContainer/ButtonSun
@onready var buttonMoon = $MarginContainer/ButtonMoon
@onready var buttonEnd = $"MarginContainer/The End"
@onready var labelSun = $Kill
@onready var labelMoon = $Purify
@onready var judgeSprite = $Judge
@onready var the_end_label = $TheEndLabel
@onready var endButtonText = $TheEnd
@onready var kingSprite = $King

func _ready():
	the_end_label.visible = false
	buttonSun.visible = false
	buttonEnd.visible = false
	buttonMoon.visible = false
	labelSun.visible = false
	labelMoon.visible = false
	endButtonText.visible = false
	kingSprite.visible = true

	if Global.score >= 70:
		buttonSun.visible = true
		labelSun.visible = true
		buttonSun.pressed.connect(destroyEnding)
	elif  Global.score <= -70:
		buttonMoon.visible = true
		labelMoon.visible = true
		buttonMoon.pressed.connect(restoreEnding)
	else:
		buttonMoon.visible = true
		labelMoon.visible = true
		buttonMoon.pressed.connect(restoreEnding)
		

func destroyEnding():
	playEnding("attack")
	the_end_label.text = "With King Solun's spirit destroyed and the kingdom in ruins...\n          You have judged Solunaris worthy of Destruction"

func restoreEnding():
	playEnding("purify")
	the_end_label.text = "With King Solun's spirit purified and the kingdom rebuilt...\n            You have judged Solunaris worthy of Restoration"

func playEnding(anim_name: String):
	buttonSun.visible = false
	buttonMoon.visible = false
	labelSun.visible = false
	labelMoon.visible = false
	
	judgeSprite.play(anim_name)
	
	if (anim_name == "attack"):
		judgeSprite.flip_h = true
		
	await judgeSprite.animation_finished
	kingSprite.visible = false
	the_end_label.visible = true
	buttonEnd.visible = true
	endButtonText.visible = true


func _on_the_end_pressed() -> void:
	get_tree().quit()

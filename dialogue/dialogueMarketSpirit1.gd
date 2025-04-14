extends Control

signal dialogue_finished 

@export_file("*.json") var d_file

var dialogue = []
var current_dialogue_id = 0
var d_active = false
var typing = false
var full_text = ""
var current_text = ""
var text_index = 0
var typewriter_speed = 0.05  # Adjust speed as needed

func _ready():
	$NinePatchRect.visible = false

func start():
	if d_active:
		return
	d_active = true
	$NinePatchRect.visible = true
	dialogue = load_dialogue()
	current_dialogue_id = -1
	next_script()

func load_dialogue():
	
	var file = FileAccess.open("res://dialogue/MarketSpirit1-Dialogue.json", FileAccess.READ)
	var content = JSON.parse_string(file.get_as_text())
	
	print("Dialogue read")
	
	var score = Global.score
	
	if score < -10 && score > -33:
		return content["M1"]
	elif score <= -33 && score > -66:
		return content["M2"]
	elif score <= -66:
		return content["M3"]
	elif score > 10 && score < 33:
		return content["S1"]
	elif score >= 33 && score < 66:
		return content["S2"]
	elif score >= 66:
		return content["S3"]
	else:
		return content["neutral"]

func _input(event):
	if !d_active:
		return
	if event.is_action_pressed("ui_accept"):
		if typing:
			# Skip typing animation and show full text
			$NinePatchRect/Text.text = full_text
			typing = false
		else:
			next_script()

func next_script():
	current_dialogue_id += 1
	
	if (current_dialogue_id >= len(dialogue)):
		d_active = false
		$NinePatchRect.visible = false
		emit_signal("dialogue_finished")
		return
	
	$NinePatchRect/Name.text = dialogue[current_dialogue_id]['name']
	full_text = dialogue[current_dialogue_id]['text']
	current_text = ""
	text_index = 0
	typing = true
	
	# Start the typewriter effect
	type_text()

func type_text():
	if text_index < full_text.length() and typing:
		current_text += full_text[text_index]
		$NinePatchRect/Text.text = current_text
		text_index += 1
		get_tree().create_timer(typewriter_speed).timeout.connect(type_text)
	else:
		typing = false

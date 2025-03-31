extends Control

signal dialogue_finished 

@export_file("*.json") var d_file
@onready var meter: Control = $"../../CanvasLayer/Meter"

var dialogue = []
var current_dialogue_id = 0
var d_active = false
var scholarMet = false

func _ready():
	$NinePatchRect.visible = false

func start():
	if d_active:
		return
	d_active = true
	$NinePatchRect.visible = true
	dialogue = load_dialogue()
	current_dialogue_id = -1
	scholarMet = true
	next_script()

func load_dialogue():
	var file = FileAccess.open("res://dialogue/Scholar-Dialouge.json", FileAccess.READ)
	var content = JSON.parse_string(file.get_as_text())
	
	if !scholarMet:
		return content["intro"]
		
	#if churchInteracted:
	#	if churchDestroyed:
	#		return content["church-destroyed"]
	#	else:
	#		return content["church-rebuilt"]
	
	var score = meter.getScore()
	if score > 0:
		return content["destruction"]
	elif score < 0:
		return content["restoration"]
	else:
		return content["neutral"]

func _input(event):

	if !d_active:
		return
	if event.is_action_pressed("ui_accept"):
		next_script()

	

func next_script():

	current_dialogue_id += 1

	if (current_dialogue_id >= len(dialogue)):
		d_active = false
		$NinePatchRect.visible = false
		emit_signal("dialogue_finished")
		return

	$NinePatchRect/Name.text = dialogue[current_dialogue_id]['name']
	$NinePatchRect/Text.text = dialogue[current_dialogue_id]['text']

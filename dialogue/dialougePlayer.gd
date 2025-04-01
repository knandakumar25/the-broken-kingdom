extends Control

signal dialogue_finished 

@export_file("*.json") var d_file
@onready var meter: Control = $"../../CanvasLayer/Meter"
@onready var church: Ruin = $"../../Church"
@onready var castle: Ruin = $"../../Castle"
@onready var prison: Ruin = $"../../Prison"
@onready var theatre: Ruin = $"../../Theatre"
@onready var library: Ruin = $"../../Library"
@onready var cookhouse: Ruin = $"../../Cookhouse"

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
	
	if !church.interacted and church.player_in_range:
		if church.rebuilt:
			church.interacted = true
			return content["church-rebuilt"]
		else:
			church.interacted = true
			return content["church-destroyed"]
	
	if !castle.interacted and castle.player_in_range:
		if castle.rebuilt:
			castle.interacted = true
			return content["castle-rebuilt"]
		else:
			castle.interacted = true
			return content["castle-destroyed"]
	
	if !prison.interacted and prison.player_in_range:
		if prison.rebuilt:
			prison.interacted = true
			return content["prison-rebuilt"]
		else:
			prison.interacted = true
			return content["prison-destroyed"]
	
	if !theatre.interacted and theatre.player_in_range:
		if theatre.rebuilt:
			theatre.interacted = true
			return content["theatre-rebuilt"]
		else:
			theatre.interacted = true
			return content["theatre-destroyed"]
	
	if !library.interacted and library.player_in_range:
		if library.rebuilt:
			library.interacted = true
			return content["library-rebuilt"]
		else:
			library.interacted = true
			return content["library-destroyed"]
	
	if !cookhouse.interacted and cookhouse.player_in_range:
		if cookhouse.rebuilt:
			cookhouse.interacted = true
			return content["cookhouse-rebuilt"]
		else:
			cookhouse.interacted = true
			return content["cookhouse-destroyed"]
	
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

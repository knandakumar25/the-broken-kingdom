extends Control

signal dialogue_finished 

@export_file("*.json") var d_file
@onready var meter: Control = $"../../CanvasLayer/Meter"
@onready var church: Ruin = $"../../Ruins/Church"
@onready var castle: Ruin = $"../../Ruins/Castle"
@onready var prison: Ruin = $"../../Ruins/Prison"
@onready var theatre: Ruin = $"../../Ruins/Theatre"
@onready var library: Ruin = $"../../Ruins/Library"
@onready var cookhouse: Ruin = $"../../Ruins/Cookhouse"
@onready var farm: Ruin = $"../../Ruins/Farm"
@onready var academy: Ruin = $"../../Ruins/Academy"

var dialogue = []
var current_dialogue_id = 0
var d_active = false
var scholarMet = false
var typing = false
var full_text = ""
var current_text = ""
var text_index = 0
var typewriter_speed = 0.05  # Adjust speed as needed

var milestoneFlag = false
var triggered_milestones = []

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
	
	var scoreABS = abs(Global.score)
	var milestones = [20, 40, 60, 80, 100]

	for milestone in milestones:
		if scoreABS >= milestone and !triggered_milestones.has(milestone):
			triggered_milestones.append(milestone)
			milestoneFlag = true
			return content["milestone%d" % milestone]  
			
	milestoneFlag = false
		
	
	if !scholarMet:
		return content["intro"]
	
	if is_instance_valid(church) and !church.interacted and church.scholar_in_range:
		if church.rebuilt:
			church.interacted = true
			return content["church-rebuilt"]
		else:
			church.interacted = true
			church.queue_free()
			return content["church-destroyed"]
	if is_instance_valid(castle) and !castle.interacted and castle.scholar_in_range:
		if castle.rebuilt:
			castle.interacted = true
			return content["castle-rebuilt"]
		else:
			castle.interacted = true
			castle.queue_free()
			return content["castle-destroyed"]
	if is_instance_valid(prison) and !prison.interacted and prison.scholar_in_range:
		if prison.rebuilt:
			prison.interacted = true
			return content["prison-rebuilt"]
		else:
			prison.interacted = true
			prison.queue_free()
			return content["prison-destroyed"]
	
	if is_instance_valid(theatre) and !theatre.interacted and theatre.scholar_in_range:
		if theatre.rebuilt:
			theatre.interacted = true
			return content["theatre-rebuilt"]
		else:
			theatre.interacted = true
			theatre.queue_free()
			return content["theatre-destroyed"]
	
	if is_instance_valid(library) and !library.interacted and library.scholar_in_range:
		if library.rebuilt:
			library.interacted = true
			return content["library-rebuilt"]
		else:
			library.interacted = true
			library.queue_free()
			return content["library-destroyed"]
	
	if is_instance_valid(cookhouse) and !cookhouse.interacted and cookhouse.scholar_in_range:
		if cookhouse.rebuilt:
			cookhouse.interacted = true
			return content["cookhouse-rebuilt"]
		else:
			cookhouse.interacted = true
			cookhouse.queue_free()
			return content["cookhouse-destroyed"]
	
	if is_instance_valid(farm) and !farm.interacted and farm.scholar_in_range:
		if farm.rebuilt:
			farm.interacted = true
			return content["farm-rebuilt"]
		else:
			farm.interacted = true
			farm.queue_free()
			return content["farm-destroyed"]
	
	if is_instance_valid(academy) and !academy.interacted and academy.scholar_in_range:
		if academy.rebuilt:
			academy.interacted = true
			return content["academy-rebuilt"]
		else:
			academy.interacted = true
			academy.queue_free()
			return content["academy-destroyed"]
	
	var score = Global.score
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
		if typing:
			$NinePatchRect/Text.text = full_text
			typing = false
		elif current_dialogue_id >= len(dialogue) - 1:
			d_active = false
			$NinePatchRect.visible = false
			emit_signal("dialogue_finished")
		else:
			next_script()

func next_script():
	current_dialogue_id += 1
	
	var dialogueComplete = current_dialogue_id == len(dialogue)

	if (current_dialogue_id >= len(dialogue) || dialogueComplete):
		d_active = false
		$NinePatchRect.visible = false
		emit_signal("dialogue_finished")
		return
	
	$NinePatchRect/Name.text = dialogue[current_dialogue_id]['name']
	full_text = dialogue[current_dialogue_id]['text']
	current_text = ""
	text_index = 0
	typing = true

	type_text()

func type_text():
	if text_index < full_text.length() and typing:
		current_text += full_text[text_index]
		$NinePatchRect/Text.text = current_text
		text_index += 1
		get_tree().create_timer(typewriter_speed).timeout.connect(type_text)
	else:
		typing = false

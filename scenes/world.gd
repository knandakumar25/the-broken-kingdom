extends Node

@onready var heartsContainer = $CanvasLayer/heartsContainer
@onready var player = $Judge
@onready var fountainPortal = $FountainPortal

func _ready():
	
	if !Global.started:
		Global.playerSavedPos = Vector2(957.5, 3900)
		Global.started = true
		
	player.global_position = Global.playerSavedPos
	
	heartsContainer.setMaxHP(player.maxHealth)
	heartsContainer.updateHearts(player.currentHealth)
	

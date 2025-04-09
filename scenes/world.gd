extends Node

@onready var heartsContainer = $CanvasLayer/heartsContainer
@onready var player = $Judge
@onready var fountainPortal = $FountainPortal

func _ready():
	if !Global.started:
		Global.playerSavedPos = Vector2(957.5, 3900)
		Global.started = true

	# Use the saved position and health when transitioning back to the world
	player.global_position = Global.playerSavedPos
	player.currentHealth = Global.playerSavedHealth  # Assuming you also save the health value
	
	heartsContainer.setMaxHP(player.maxHealth)
	heartsContainer.updateHearts(player.currentHealth)

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
	print(3)
	if (Global.church != null):
		print(4)
		$Church.ruin_image.texture = Global.church
		$Church.rebuilt = true
	if (Global.castle != null):
		print(4)
		$Castle.ruin_image.texture = Global.castle
		$Castle.rebuilt = true
	if (Global.prison != null):
		print(4)
		$Prison.ruin_image.texture = Global.prison
		$Prison.rebuilt = true
	if (Global.theatre != null):
		print(4)
		$Theatre.ruin_image.texture = Global.theatre
		$Theatre.rebuilt = true
	if (Global.library != null):
		print(4)
		$Library.ruin_image.texture = Global.library
		$Library.rebuilt = true
	if (Global.cookhouse != null):
		print(4)
		$Cookhouse.ruin_image.texture = Global.cookhouse
		$Cookhouse.rebuilt = true
	if (Global.farm != null):
		print(4)
		$Farm.ruin_image.texture = Global.farm
		$Farm.rebuilt = true
	if (Global.academy != null):
		print(4)
		$Academy.ruin_image.texture = Global.academy
		$Academy.rebuilt = true

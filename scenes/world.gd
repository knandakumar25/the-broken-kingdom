extends Node

@onready var heartsContainer = $CanvasLayer/heartsContainer
@onready var player = $Judge

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
		$Ruins/Church.ruin_image.texture = Global.church
		$Ruins/Church.rebuilt = true
	if (Global.castle != null):
		print(4)
		$Ruins/Castle.ruin_image.texture = Global.castle
		$Ruins/Castle.rebuilt = true
	if (Global.prison != null):
		print(4)
		$Ruins/Prison.ruin_image.texture = Global.prison
		$Ruins/Prison.rebuilt = true
	if (Global.theatre != null):
		print(4)
		$Ruins/Theatre.ruin_image.texture = Global.theatre
		$Ruins/Theatre.rebuilt = true
	if (Global.library != null):
		print(4)
		$Ruins/Library.ruin_image.texture = Global.library
		$Ruins/Library.rebuilt = true
	if (Global.cookhouse != null):
		print(4)
		$Ruins/Cookhouse.ruin_image.texture = Global.cookhouse
		$Ruins/Cookhouse.rebuilt = true
	if (Global.farm != null):
		print(4)
		$Ruins/Farm.ruin_image.texture = Global.farm
		$Ruins/Farm.rebuilt = true
	if (Global.academy != null):
		print(4)
		$Ruins/Academy.ruin_image.texture = Global.academy
		$Ruins/Academy.rebuilt = true

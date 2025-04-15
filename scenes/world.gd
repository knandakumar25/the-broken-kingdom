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
	elif (Global.church_destroyed):
		$Ruins/Church.ruin_image.texture = null
		$Ruins/Church/StaticBody2D.queue_free()
		$Ruins/Church/Label.queue_free()
	if (Global.castle != null):
		print(4)
		$Ruins/Castle.ruin_image.texture = Global.castle
		$Ruins/Castle.rebuilt = true
	elif (Global.castle_destroyed):
		$Ruins/Castle.ruin_image.texture = null
		$Ruins/Castle/StaticBody2D.queue_free()
		$Ruins/Castle/Label.queue_free()
	if (Global.prison != null):
		print(4)
		$Ruins/Prison.ruin_image.texture = Global.prison
		$Ruins/Prison.rebuilt = true
	elif (Global.prison_destroyed):
		$Ruins/Prison.ruin_image.texture = null
		$Ruins/Prison/StaticBody2D.queue_free()
		$Ruins/Prison/Label.queue_free()
	if (Global.theatre != null):
		print(4)
		$Ruins/Theatre.ruin_image.texture = Global.theatre
		$Ruins/Theatre.rebuilt = true
	elif (Global.theatre_destroyed):
		$Ruins/Theatre.ruin_image.texture = null
		$Ruins/Theatre/StaticBody2D.queue_free()
		$Ruins/Theatre/Label.queue_free()
	if (Global.library != null):
		print(4)
		$Ruins/Library.ruin_image.texture = Global.library
		$Ruins/Library.rebuilt = true
	elif (Global.library_destroyed):
		$Ruins/Library.ruin_image.texture = null
		$Ruins/Library/StaticBody2D.queue_free()
		$Ruins/Library/Label.queue_free()
	if (Global.cookhouse != null):
		print(4)
		$Ruins/Cookhouse.ruin_image.texture = Global.cookhouse
		$Ruins/Cookhouse.rebuilt = true
	elif (Global.cookhouse_destroyed):
		$Ruins/Cookhouse.ruin_image.texture = null
		$Ruins/Cookhouse/StaticBody2D.queue_free()
		$Ruins/Cookhouse/Label.queue_free()
	if (Global.farm != null):
		print(4)
		$Ruins/Farm.ruin_image.texture = Global.farm
		$Ruins/Farm.rebuilt = true
	elif (Global.farm_destroyed):
		$Ruins/Farm.ruin_image.texture = null
		$Ruins/Farm/StaticBody2D.queue_free()
		$Ruins/Farm/Label.queue_free()
	if (Global.academy != null):
		print(4)
		$Ruins/Academy.ruin_image.texture = Global.academy
		$Ruins/Academy.rebuilt = true
	elif (Global.academy_destroyed):
		$Ruins/Academy.ruin_image.texture = null
		$Ruins/Academy/StaticBody2D.queue_free()
		$Ruins/Academy/Label.queue_free()

extends Node

@onready var heartsContainer = $CanvasLayer/heartsContainer
@onready var player = $Judge

func _ready():
	heartsContainer.setMaxHP(player.maxHealth)
	heartsContainer.updateHearts(player.currentHealth)
	
func _process(delta):
	pass

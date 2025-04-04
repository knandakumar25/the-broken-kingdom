extends Panel

@onready var sprite = $Sprite2D

func update(health: int):
	match health:
		2:
			sprite.frame = 0
		1: 
			sprite.frame = 1
		_:
			sprite.frame = 2

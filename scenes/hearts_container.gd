extends HBoxContainer

@onready var HeartGuiClass = preload("res://scenes/heart_gui.tscn")

var maxHearts = 0

func _ready():
	pass

func _process(delta):
	pass

func setMaxHP(max: int):
	
	maxHearts = max / 2
	
	for i in range(maxHearts):
		var heart = HeartGuiClass.instantiate()
		add_child(heart)
		
func updateHearts(currentHealth: int):
	var hearts = get_children()
	
	for i in range(hearts.size()):
		var heartHealth = clamp(currentHealth - (i * 2), 0, 2)
		hearts[i].update(heartHealth)

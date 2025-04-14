extends CanvasLayer 

@onready var panel = $TutorialPanel

func _ready():
	if Global.started:
		queue_free()  # Already seen — remove the popup from the scene.
	else:
		panel.visible = true  # Show tutorial.

func _process(_delta):
	if panel.visible and Input.is_action_just_pressed("interact"):
		panel.visible = false
		Global.started = true

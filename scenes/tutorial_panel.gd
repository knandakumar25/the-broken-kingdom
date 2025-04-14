extends Panel

func _ready():
	if Global.started:
		queue_free()  
	else:
		visible = true  

func _process(_delta):
	if visible and Input.is_action_just_pressed("interact"):
		visible = false
		Global.started = true

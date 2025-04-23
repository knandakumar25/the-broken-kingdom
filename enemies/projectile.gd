extends Area2D

@export var speed: float = 300.0
var direction: Vector2 = Vector2.ZERO

func _ready():
	connect("body_entered", Callable(self, "_on_body_entered"))

func _physics_process(delta):
	if direction != Vector2.ZERO:
		global_position += direction.normalized() * speed * delta

func _on_body_entered(body: Node) -> void:
	if body.name == "Judge":
		body.currentHealth -= 2
		body.world.heartsContainer.updateHearts(body.currentHealth)
		queue_free()
	elif body.is_in_group("walls") or body.is_in_group("enemies"):
		queue_free()

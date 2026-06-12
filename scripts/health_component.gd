extends Node
class_name HealthComponent

## HealthComponent: Manages health, damage, and death logic.

signal health_changed(current_health)
signal died

@export var max_health: int = 6
var current_health: int

func _ready():
	current_health = max_health

func take_damage(amount: int, source_position: Vector2 = Vector2.ZERO):
	current_health -= amount
	health_changed.emit(current_health)

	if current_health <= 0:
		current_health = 0
		died.emit()

func heal(amount: int):
	current_health = clampi(current_health + amount, 0, max_health)
	health_changed.emit(current_health)

func set_health(value: int):
	current_health = value
	health_changed.emit(current_health)

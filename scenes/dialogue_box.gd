extends Control

@onready var meter: Control = $"../Meter"

func show_text(text: String) -> void:
	$Label.text = text
	$ButtonMoon.hide()
	$ButtonSun.hide()
	show()

func show_choice() -> void:
	$Label.text = "Choose your path:"
	$ButtonMoon.show()
	$ButtonSun.show()
	show()

func _on_button_moon_pressed() -> void:
	meter.add_points(-10)
	hide()

func _on_button_sun_pressed() -> void:
	meter.add_points(10)
	hide()

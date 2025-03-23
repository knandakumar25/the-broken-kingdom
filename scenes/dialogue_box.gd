extends Control

# Used ChatGPT to generate key functions and mechanics

@onready var meter: Control = $"../Meter"
@onready var label: Label = $Label
@onready var button_moon: Button = $ButtonMoon
@onready var button_sun: Button = $ButtonSun

var typing_speed = 0.05
var full_text = ""
var is_typing = false

func show_text(text: String) -> void:
	full_text = text
	label.text = ""
	button_moon.hide()
	button_sun.hide()
	show()
	is_typing = true
	typewriter_effect()

func typewriter_effect() -> void:
	# Coroutine-like behavior to reveal text one character at a time
	for i in full_text.length():
		label.text += full_text[i]
		await get_tree().create_timer(typing_speed).timeout
	is_typing = false

func show_choice() -> void:
	label.text = "Choose your path:"
	button_moon.show()
	button_sun.show()
	show()

func _on_button_moon_pressed() -> void:
	meter.add_points(-10)
	hide()

func _on_button_sun_pressed() -> void:
	meter.add_points(10)
	hide()

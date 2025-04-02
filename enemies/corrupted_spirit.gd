extends CharacterBody2D

var speed = 50
var chasingPlayer = false
var player = null

func _physics_process(delta: float) -> void:
	if chasingPlayer:
		position += (player.position - position) / speed
		

func _on_detection_area_body_entered(body: Node2D) -> void:
	player = body
	chasingPlayer = true


func _on_detection_area_body_exited(body: Node2D) -> void:
	player = null
	chasingPlayer = false

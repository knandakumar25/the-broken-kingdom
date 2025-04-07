extends Node

var isPlayerAttacking = false
var isFocusKill = false

var currentScene = "world"
var transitionScene = false

var playerSavedPos := Vector2.ZERO
var started := false
var startingTile := Vector2(957.5, 3900)

func _process(delta: float) -> void:
	# print(currentScene)
	pass

func finishSceneChange():
	transitionScene = false
			
			

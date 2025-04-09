extends Node

var isPlayerAttacking = false
var isFocusKill = false

var currentScene = "world"
var transitionScene = false

var playerSavedPos := Vector2.ZERO
var playerSavedHealth := 6  # Add this to save the player's health
var started := false
var startingTile := Vector2(957.5, 3900)

var score: int = 0
var playerMaxHP: int = 6
var playerCurrentHP: int = 6

func _process(delta: float) -> void:
	pass

func finishSceneChange():
	transitionScene = false

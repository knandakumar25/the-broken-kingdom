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

var worldRespawnPos: Vector2 = Vector2.ZERO
var worldRespawnHealth: int = 6
var lastEnteredFromWorld: bool = false

var defeatedByKing = false

var church: Texture = null
var prison: Texture = null
var theatre: Texture = null
var library: Texture = null
var cookhouse: Texture = null
var farm: Texture = null
var academy: Texture = null

var church_destroyed = false
var castle_destroyed = true
var prison_destroyed = false
var theatre_destroyed = false
var library_destroyed = false
var cookhouse_destroyed = false
var farm_destroyed = false
var academy_destroyed = false

func _ready():
	pass

func _process(delta: float) -> void:
	pass

func finishSceneChange():
	transitionScene = false

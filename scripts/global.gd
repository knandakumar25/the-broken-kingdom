extends Node

var save_path = "user://game_data.cfg"

var isPlayerAttacking = false
var isFocusKill = false

var currentScene = "world"
var transitionScene = false

var playerSavedPos := Vector2.ZERO
var playerSavedHealth := 6  # Add this to save the player's health
var started := false
var startingTile := Vector2(957.5, 3900)

var score: int = 0
var highest_score: int = 0
var has_played_before: bool = false
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
	init_database()
	load_highest_score()

func _process(delta: float) -> void:
	pass

func init_database():
	var config = ConfigFile.new()
	var err = config.load(save_path)
	if err != OK:
		# First time playing, create default file
		config.set_value("stats", "highest_score", 0)
		config.save(save_path)
		has_played_before = false
	else:
		has_played_before = true

func load_highest_score():
	var config = ConfigFile.new()
	var err = config.load(save_path)
	if err == OK:
		highest_score = config.get_value("stats", "highest_score", 0)

func save_highest_score():
	var config = ConfigFile.new()
	config.load(save_path)
	config.set_value("stats", "highest_score", highest_score)
	config.save(save_path)

func update_highest_score():
	var abs_score = abs(score)
	if abs_score > abs(highest_score):
		highest_score = abs_score  # Store absolute value
		save_highest_score()

func finishSceneChange():
	transitionScene = false

extends Node

var db: SQLite
var db_path = "user://game_data.db"

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
	db = SQLite.new()
	db.path = db_path
	db.open_db()
	
	# Create table if it doesn't exist
	var table_dict = {
		"id": {"data_type": "int", "primary_key": true, "not_null": true},
		"highest_score": {"data_type": "int", "not_null": true}
	}
	db.create_table("game_stats", table_dict)
	
	# Check if we have data
	db.query("SELECT * FROM game_stats WHERE id = 1;")
	var result = db.query_result
	if result.size() == 0:
		# First time playing, insert initial record
		var data = {"id": 1, "highest_score": 0}
		db.insert_row("game_stats", data)
		has_played_before = false
	else:
		has_played_before = true

func load_highest_score():
	if db:
		db.query("SELECT highest_score FROM game_stats WHERE id = 1;")
		var result = db.query_result
		if result.size() > 0:
			highest_score = result[0]["highest_score"]

func save_highest_score():
	if db:
		var data = {"highest_score": highest_score}
		db.update_rows("game_stats", "id = 1", data)

func update_highest_score():
	var abs_score = abs(score)
	if abs_score > abs(highest_score):
		highest_score = abs_score  # Store absolute value
		save_highest_score()

func finishSceneChange():
	transitionScene = false

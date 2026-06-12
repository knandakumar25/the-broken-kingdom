extends Node

## PersistenceManager: Handles low-level SQLite operations
## Decouples raw SQL from game logic.

var db: SQLite
var db_path = "user://game_data.db"

func _ready():
	init_database()

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

func get_highest_score() -> int:
	db.query("SELECT highest_score FROM game_stats WHERE id = 1;")
	var result = db.query_result
	if result.size() > 0:
		return result[0]["highest_score"]
	return 0

func save_highest_score(score: int):
	var data = {"highest_score": score}
	db.update_rows("game_stats", "id = 1", data)
	# If the record didn't exist, insert it
	db.query("SELECT * FROM game_stats WHERE id = 1;")
	if db.query_result.size() == 0:
		var initial_data = {"id": 1, "highest_score": score}
		db.insert_row("game_stats", initial_data)

func query(sql: String):
	db.query(sql)
	return db.query_result

func insert_row(table: String, data: Dictionary):
	db.insert_row(table, data)

func update_rows(table: String, condition: String, data: Dictionary):
	db.update_rows(table, condition, data)

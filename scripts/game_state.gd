extends Resource
class_name GameState

## GameState: A data container for the current game session.

# Player Stats
@export var player_saved_pos := Vector2.ZERO
@export var player_saved_health := 6
@export var player_max_hp: int = 6
@export var player_current_hp: int = 6
@export var score: int = 0
@export var highest_score: int = 0

# World State
@export var current_scene: String = "world"
@export var transition_scene: bool = false
@export var world_respawn_pos: Vector2 = Vector2.ZERO
@export var world_respawn_health: int = 6
@export var last_entered_from_world: bool = false
@export var defeated_by_king: bool = false

# Ruin Statuses
# Dictionary: { "ruin_id": { "destroyed": bool, "rebuilt": bool, "texture": Texture } }
@export var ruins_status: Dictionary = {}

# Session Flags
@export var started := false
@export var starting_tile := Vector2(957.5, 3900)
@export var is_player_attacking := false
@export var is_focus_kill := false

# Graph Report - .  (2026-06-12)

## Corpus Check
- Corpus is ~10,822 words - fits in a single context window. You may not need a graph.

## Summary
- 681 nodes · 672 edges · 43 communities (42 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.8)
- Token cost: 15,894 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Global State & Persistence|Global State & Persistence]]
- [[_COMMUNITY_The Judge's Trial|The Judge's Trial]]
- [[_COMMUNITY_The Broken King|The Broken King]]
- [[_COMMUNITY_Dialogue System|Dialogue System]]
- [[_COMMUNITY_World Ruins|World Ruins]]
- [[_COMMUNITY_Website Infrastructure|Website Infrastructure]]
- [[_COMMUNITY_Elite Enemies (Knights)|Elite Enemies (Knights)]]
- [[_COMMUNITY_Ethereal Enemies (Spirits)|Ethereal Enemies (Spirits)]]
- [[_COMMUNITY_Scoring & UI Meter|Scoring & UI Meter]]
- [[_COMMUNITY_Festival Spirit Lore|Festival Spirit Lore]]
- [[_COMMUNITY_Festival Spirit Lore|Festival Spirit Lore]]
- [[_COMMUNITY_Fountain Spirit Lore|Fountain Spirit Lore]]
- [[_COMMUNITY_Fountain Spirit Lore|Fountain Spirit Lore]]
- [[_COMMUNITY_Market Spirit Lore|Market Spirit Lore]]
- [[_COMMUNITY_Market Spirit Lore|Market Spirit Lore]]
- [[_COMMUNITY_Statue Spirit Lore|Statue Spirit Lore]]
- [[_COMMUNITY_Statue Spirit Lore|Statue Spirit Lore]]
- [[_COMMUNITY_King Pedestal Lore|King Pedestal Lore]]
- [[_COMMUNITY_Website Frontend|Website Frontend]]
- [[_COMMUNITY_The Scholar|The Scholar]]
- [[_COMMUNITY_Game Endings|Game Endings]]
- [[_COMMUNITY_Inter-dimensional Travel|Inter-dimensional Travel]]
- [[_COMMUNITY_The Summons|The Summons]]
- [[_COMMUNITY_The Castle Spire|The Castle Spire]]
- [[_COMMUNITY_Dialogue Interface|Dialogue Interface]]
- [[_COMMUNITY_Generic NPC Logic|Generic NPC Logic]]
- [[_COMMUNITY_Interior Mechanics|Interior Mechanics]]
- [[_COMMUNITY_The Way Back|The Way Back]]
- [[_COMMUNITY_Player Health System|Player Health System]]
- [[_COMMUNITY_NPC Interactions|NPC Interactions]]
- [[_COMMUNITY_The Spirit World|The Spirit World]]
- [[_COMMUNITY_Combat Projectiles|Combat Projectiles]]
- [[_COMMUNITY_Global Projectiles|Global Projectiles]]
- [[_COMMUNITY_Project Identity|Project Identity]]
- [[_COMMUNITY_UI Overlay|UI Overlay]]
- [[_COMMUNITY_Main World Logic|Main World Logic]]
- [[_COMMUNITY_Database Engine|Database Engine]]
- [[_COMMUNITY_Game Entry|Game Entry]]
- [[_COMMUNITY_Heart Visuals|Heart Visuals]]
- [[_COMMUNITY_Onboarding|Onboarding]]
- [[_COMMUNITY_The Sacred Fountain|The Sacred Fountain]]

## God Nodes (most connected - your core abstractions)
1. `Ruin` - 25 edges
2. `scripts` - 5 edges
3. `_physics_process` - 4 edges
4. `add_points` - 4 edges
5. `update_meter` - 4 edges
6. `update_score_labels` - 4 edges
7. `playEnding` - 3 edges
8. `enemyAttack` - 3 edges
9. `playerFocus` - 3 edges
10. `interruptFocus` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (43 total, 1 thin omitted)

### Community 0 - "Global State & Persistence"
Cohesion: 0.05
Nodes (46): abs_score, academy, academy_destroyed, castle_destroyed, church, church_destroyed, cookhouse, cookhouse_destroyed (+38 more)

### Community 1 - "The Judge's Trial"
Cohesion: 0.05
Nodes (43): anim_sprite, attacking, current_direction, currentCamera, currentHealth, damageTween, enemyAttack, enemyAttackCD (+35 more)

### Community 2 - "The Broken King"
Cohesion: 0.06
Nodes (38): animated_sprite, canTakeDamage, current_patrol_index, damageTween, die, dir, CharacterBody2D, handle_patrol (+30 more)

### Community 3 - "Dialogue System"
Cohesion: 0.06
Nodes (33): academy, castle, church, content, cookhouse, current_dialogue_id, current_text, d_active (+25 more)

### Community 4 - "World Ruins"
Cohesion: 0.08
Nodes (25): Ruin, capitalize_first_letter, cleanup_ui, destroy_button, Area2D, interacted, label, meter (+17 more)

### Community 5 - "Website Infrastructure"
Cohesion: 0.08
Nodes (25): dependencies, clsx, framer-motion, lucide-react, react, react-dom, react-router-dom, tailwind-merge (+17 more)

### Community 6 - "Elite Enemies (Knights)"
Cohesion: 0.08
Nodes (23): anim_sprite, canTakeDamage, chasingPlayer, CharacterBody2D, health, isDying, knockback_direction, knockback_distance (+15 more)

### Community 7 - "Ethereal Enemies (Spirits)"
Cohesion: 0.09
Nodes (21): canTakeDamage, chasingPlayer, CharacterBody2D, health, knockback_direction, knockback_distance, knockback_target, meter (+13 more)

### Community 8 - "Scoring & UI Meter"
Cohesion: 0.12
Nodes (21): abs_current, abs_highest, abs_score, add_points, background, current_score_label, fill_bar, fill_width (+13 more)

### Community 9 - "Festival Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 10 - "Festival Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 11 - "Fountain Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 12 - "Fountain Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 13 - "Market Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 14 - "Market Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 15 - "Statue Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 16 - "Statue Spirit Lore"
Cohesion: 0.11
Nodes (18): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+10 more)

### Community 17 - "King Pedestal Lore"
Cohesion: 0.11
Nodes (17): content, current_dialogue_id, current_text, d_active, dialogue, file, full_text, Control (+9 more)

### Community 18 - "Website Frontend"
Cohesion: 0.18
Nodes (8): Footer(), Navbar(), Factions(), Home(), Join(), Lore(), Ruins(), App()

### Community 19 - "The Scholar"
Cohesion: 0.12
Nodes (16): anim_sprite, current_state, CharacterBody2D, is_chatting, is_roaming, _on_detection_area_body_entered, _on_detection_area_body_exited, _on_dialogue_ui_dialogue_finished (+8 more)

### Community 20 - "Game Endings"
Cohesion: 0.14
Nodes (15): buttonEnd, buttonMoon, buttonSun, destroyEnding, endButtonText, Control, judgeSprite, kingSprite (+7 more)

### Community 21 - "Inter-dimensional Travel"
Cohesion: 0.12
Nodes (15): changeScene, StaticBody2D, _on_festival_portal_area_body_entered, _on_festival_portal_area_body_exited, _on_fountain_portal_area_body_entered, _on_fountain_portal_area_body_exited, _on_market_portal_area_body_entered, _on_market_portal_area_body_exited (+7 more)

### Community 22 - "The Summons"
Cohesion: 0.13
Nodes (14): current_state, CharacterBody2D, is_chatting, is_roaming, king, _on_detection_area_body_entered, _on_detection_area_body_exited, _on_dialogue_ui_dialogue_finished (+6 more)

### Community 23 - "The Castle Spire"
Cohesion: 0.14
Nodes (13): capitalize_first_letter, Area2D, label, _on_interaction_radius_body_entered, _on_interaction_radius_body_exited, player, player_in_range, player_ref (+5 more)

### Community 24 - "Dialogue Interface"
Cohesion: 0.15
Nodes (13): button_moon, button_sun, full_text, Control, is_typing, label, meter, _on_button_moon_pressed (+5 more)

### Community 25 - "Generic NPC Logic"
Cohesion: 0.14
Nodes (13): current_state, CharacterBody2D, is_chatting, is_roaming, _on_detection_area_body_entered, _on_detection_area_body_exited, _on_dialogue_ui_dialogue_finished, player (+5 more)

### Community 26 - "Interior Mechanics"
Cohesion: 0.17
Nodes (12): exit_building, Node2D, heartsContainer, label, _on_area_2d_body_entered, _on_area_2d_body_exited, player, player_in_range (+4 more)

### Community 27 - "The Way Back"
Cohesion: 0.15
Nodes (12): changeScene, StaticBody2D, _on_festival_portal_area_body_entered, _on_festival_portal_area_body_exited, _on_fountain_portal_area_body_entered, _on_fountain_portal_area_body_exited, _on_market_portal_area_body_entered, _on_market_portal_area_body_exited (+4 more)

### Community 28 - "Player Health System"
Cohesion: 0.18
Nodes (10): HBoxContainer, heart, HeartGuiClass, heartHealth, hearts, maxHearts, _process, _ready (+2 more)

### Community 29 - "NPC Interactions"
Cohesion: 0.20
Nodes (10): black, current_dialogue, dialogue_started, Area2D, label, _on_body_entered, _on_body_exited, player_in_range (+2 more)

### Community 30 - "The Spirit World"
Cohesion: 0.25
Nodes (7): changeScene, Node2D, _on_fountain_exit_portal_body_entered, _on_fountain_exit_portal_body_exited, player, _process, _ready

### Community 31 - "Combat Projectiles"
Cohesion: 0.33
Nodes (5): direction, Area2D, _on_body_entered, _physics_process, _ready

### Community 32 - "Global Projectiles"
Cohesion: 0.33
Nodes (5): direction, Area2D, _on_body_entered, _physics_process, _ready

### Community 33 - "Project Identity"
Cohesion: 0.40
Nodes (5): The Broken Kingdom, The Broken Kingdom Website, index.html, main.jsx, root div

### Community 34 - "UI Overlay"
Cohesion: 0.40
Nodes (4): CanvasLayer, panel, _process, _ready

### Community 35 - "Main World Logic"
Cohesion: 0.40
Nodes (4): Node, heartsContainer, player, _ready

### Community 36 - "Database Engine"
Cohesion: 0.50
Nodes (3): EditorPlugin, _enter_tree, _exit_tree

### Community 37 - "Game Entry"
Cohesion: 0.50
Nodes (3): Control, _on_new_game_pressed, _on_quit_pressed

### Community 38 - "Heart Visuals"
Cohesion: 0.50
Nodes (3): Panel, sprite, update

### Community 39 - "Onboarding"
Cohesion: 0.50
Nodes (3): Panel, _process, _ready

## Knowledge Gaps
- **580 isolated node(s):** `EditorPlugin`, `_enter_tree`, `_exit_tree`, `Control`, `dialogue` (+575 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `_physics_process` (e.g. with `enemyAttack` and `playerAttack`) actually correct?**
  _`_physics_process` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `EditorPlugin`, `_enter_tree`, `_exit_tree` to the rest of the system?**
  _580 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Global State & Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.045328399629972246 - nodes in this community are weakly interconnected._
- **Should `The Judge's Trial` be split into smaller, more focused modules?**
  _Cohesion score 0.05179704016913319 - nodes in this community are weakly interconnected._
- **Should `The Broken King` be split into smaller, more focused modules?**
  _Cohesion score 0.0553306342780027 - nodes in this community are weakly interconnected._
- **Should `Dialogue System` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Should `World Ruins` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._
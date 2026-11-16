# The Broken Kingdom

[![Godot Engine](https://img.shields.io/badge/Engine-Godot_4.6-blue.svg)](https://godotengine.org/)
[![Language](https://img.shields.io/badge/Language-GDScript-brightgreen.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Windows_|_macOS_|_Linux-orange.svg)]()
[![Genre](https://img.shields.io/badge/Genre-2D_Action_RPG_/_Adventure-purple.svg)]()

> A top-down 2D action RPG where an arbiter known as the Judge crosses between the mortal realm and the ethereal Spirit World to purge corruption, restore fallen monuments, and confront the fallen King.

---

## Overview

**The Broken Kingdom** is an expansive 2D action-adventure RPG built in **Godot 4.6**.

The once-glorious kingdom lies in ruin—its sacred halls shattered, its towns deserted, and a corrupting blight consuming both knight and spirit. Players take control of the **Judge**, an enigmatic arbiter wielding both a blade for combat and sacred magic for purification. By passing through spectral portals into the ethereal **Spirit World**, players uncover forgotten histories, solve spiritual trials, heal the land's landmarks, and bring peace to a fractured realm.

---

## Core Gameplay Systems

```
                           ┌───────────────────────────┐
                           │    The Physical Realm     │
                           │ Ruined Kingdom & Monoliths│
                           └─────────────┬─────────────┘
                                         │
                         [Mystical Spirit World Portals]
                                         │
                                         ▼
                           ┌───────────────────────────┐
                           │     The Spirit World      │
                           │  Ethereal Planes & Trials │
                           └─────────────┬─────────────┘
                                         │
                ┌────────────────────────┴────────────────────────┐
                ▼                                                 ▼
     ┌───────────────────────┐                         ┌───────────────────────┐
     │  Combat & Purify      │                         │ Realm Restoration     │
     │  • Sword Attack (X)   │                         │ • Church, Academy     │
     │  • Soul Cleanse (C)   │                         │ • Theatre, Library    │
     └──────────┬────────────┘                         └──────────┬────────────┘
                │                                                 │
                └────────────────────────┬────────────────────────┘
                                         ▼
                           ┌───────────────────────────┐
                           │   Fallen King Boss Fight  │
                           └───────────────────────────┘
```

### 1. Dual-Realm Traversal
Enter shimmering planar gateways (`spiritWorldPortal.gd` and `spiritWorldExitPortal.gd`) to transition between the mortal earth and the spectral **Spirit World**. Each realm reveals distinct pathways, hidden spirits, and altered physical rules.

### 2. Combat vs. Purification
- **Sword Strike (`X`)**: Inflict physical damage on aggressive Corrupted Knights (`corrupted_knight.tscn`) and hostile apparitions.
- **Purification Magic (`C`)**: Dispel the malevolent darkness binding tortured spirits, liberating them rather than destroying them. Choices between violence and cleansing influence your spirit meter.

### 3. Kingdom Restoration
Travel across the kingdom to survey and rebuild ancient structures that have fallen into decay:
- **The Holy Church**
- **The Royal Prison**
- **The Grand Theatre**
- **The Ancient Library**
- **The Cookhouse & Community Farm**
- **The Arcane Academy**
- **The Citadel Castle**

Restoring these landmarks requires obtaining spiritual blessings and fulfilling quests for guardian spirits.

### 4. Spirit Dialogue & Quests
Engage with guardian entities throughout the kingdom through a dedicated narrative dialogue UI (`dialougeUI.tscn`):
- **The Statue Spirit**: Guardian of forgotten kingdom oaths.
- **The Fountain Spirit**: Purveyor of healing waters and spiritual balance.
- **The Market Spirit**: Relic merchant and overseer of community commerce.
- **The Festival Spirit**: Spirit of kingdom celebrations and cultural memory.

### 5. Climax: The Corrupted King
The final confrontation pits the Judge against the tragic monarch (`enemies/king.tscn`) in a bullet-hell projectile battle requiring swift movement, parrying, and precision counterattacks.

---

## Controls

| Key | Action |
| :--- | :--- |
| **Arrow Keys** / **W, A, S, D** | Move Character (8-Directional) |
| **Z** | Interact with NPCs, Portals, and Monuments |
| **X** | Attack (Sword Melee) |
| **C** | Purify (Dispel Corruption) |
| **Tab** | Advance Dialogue Text |
| **Spacebar** / **Enter** | Confirm / Accept / UI Selection |

---

## Running the Game in Godot

### Prerequisites
- [Godot Engine 4.6](https://godotengine.org/download) (Forward+ Renderer compatible GPU recommended).

### Launch Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/knandakumar25/the-broken-kingdom.git
   ```
2. Open Godot 4.6, select **Import**, and navigate to `the-broken-kingdom/project.godot`.
3. Click **Import & Edit**.
4. Press **F5** to start the game from the main menu (`scenes/main_menu.tscn`).

---

## Project Structure

```
the-broken-kingdom/
├── project.godot       # Godot 4.6 engine configurations, input maps, and autoloads
├── MenuTheme.tres      # Custom UI theme definition
├── scripts/
│   ├── global.gd           # Autoload singleton tracking state, inventory, and ruined structures
│   ├── game_state.gd       # Runtime quest and level state manager
│   └── health_component.gd # Reusable entity vitality component
├── scenes/
│   ├── world.tscn / .gd    # Overworld mortal kingdom
│   ├── spirit_world.tscn   # Spectral alternate plane
│   ├── main_menu.tscn      # Main menu and settings
│   ├── judge.tscn / .gd    # Player entity (The Judge)
│   ├── hearts_container.*  # Dynamic UI heart health display
│   ├── meter.tscn / .gd    # Spirit / morality energy meter
│   └── ruins / landmarks   # Church, Prison, Theatre, Library, Castle, etc.
├── dialogue/           # Dialogue controllers for spirits and NPC interactions
├── enemies/            # Enemy scenes (Corrupted Knight, Corrupted Spirit, King, Projectiles)
├── assets/             # Animations, sprites, buildings, decorations, and fonts
└── README.md           # Project documentation
```

---

## Credits & License

- **Developer**: Karthik Nandakumar
- **Engine**: [Godot Engine 4.6](https://godotengine.org/)
- **Custom Font**: Pirata One Regular

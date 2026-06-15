# Graph Report - the-broken-kingdom  (2026-06-15)

## Corpus Check
- 28 files · ~19,373 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 519 nodes · 992 edges · 31 communities (19 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14b4277b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Project Identity|Project Identity]]

## God Nodes (most connected - your core abstractions)
1. `get()` - 26 edges
2. `lookupPath()` - 25 edges
3. `assert()` - 19 edges
4. `abort()` - 19 edges
5. `isDir()` - 17 edges
6. `create()` - 16 edges
7. `getStr()` - 16 edges
8. `close()` - 14 edges
9. `add()` - 14 edges
10. `createNode()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `assert()` --calls--> `abort()`  [EXTRACTED]
  website/public/web-player/The Broken Kingdom.js → website/public/web-player/The Broken Kingdom.js  _Bridges community 2 → community 7_
- `assignWasmExports()` --calls--> `assert()`  [EXTRACTED]
  website/public/web-player/The Broken Kingdom.js → website/public/web-player/The Broken Kingdom.js  _Bridges community 2 → community 21_
- `createStandardStreams()` --calls--> `assert()`  [EXTRACTED]
  website/public/web-player/The Broken Kingdom.js → website/public/web-player/The Broken Kingdom.js  _Bridges community 2 → community 10_
- `exitRuntime()` --calls--> `assert()`  [EXTRACTED]
  website/public/web-player/The Broken Kingdom.js → website/public/web-player/The Broken Kingdom.js  _Bridges community 2 → community 12_
- `read()` --calls--> `assert()`  [EXTRACTED]
  website/public/web-player/The Broken Kingdom.js → website/public/web-player/The Broken Kingdom.js  _Bridges community 2 → community 4_

## Import Cycles
- None detected.

## Communities (31 total, 12 thin omitted)

### Community 1 - "The Judge's Trial"
Cohesion: 0.06
Nodes (46): _addEndedListener(), addSampleNode(), clear(), connect(), connectPositionWorklet(), constructor(), delete(), _duplicateAudioBuffer() (+38 more)

### Community 2 - "The Broken King"
Cohesion: 0.10
Nodes (46): assert(), callMain(), chdir(), createNode(), createStream(), destroyNode(), doMsync(), doTruncate() (+38 more)

### Community 3 - "Dialogue System"
Cohesion: 0.10
Nodes (30): calculateAt(), createDefaultDirectories(), createPath(), createRecursive(), createSpecialDirectories(), getStr(), lstat(), mkdir() (+22 more)

### Community 4 - "World Ruins"
Cohesion: 0.08
Nodes (30): chmod(), close(), closeStream(), createDataFile(), dupStream(), expandFileStorage(), _fd_close(), _fd_read() (+22 more)

### Community 5 - "Website Infrastructure"
Cohesion: 0.08
Nodes (25): dependencies, clsx, framer-motion, lucide-react, react, react-dom, react-router-dom, tailwind-merge (+17 more)

### Community 6 - "Elite Enemies (Knights)"
Cohesion: 0.08
Nodes (27): add(), addAt(), create(), getBus(), getBusOrNull(), getId(), _godot_audio_sample_register_stream(), _godot_audio_script_create() (+19 more)

### Community 7 - "Ethereal Enemies (Spirits)"
Cohesion: 0.08
Nodes (24): abort(), absolutePath(), checkIncomingModuleAPI(), createFile(), createFolder(), createLazyFile(), createLink(), createWasm() (+16 more)

### Community 8 - "Scoring & UI Meter"
Cohesion: 0.14
Nodes (16): checkOpExists(), chown(), doChmod(), doChown(), doSetAttr(), fchmod(), fchown(), fstat() (+8 more)

### Community 10 - "Festival Spirit Lore"
Cohesion: 0.19
Nodes (14): Config(), createDefaultDevices(), createDevice(), createStandardStreams(), _godot_audio_init(), _godot_js_display_vk_cb(), _godot_js_input_gamepad_cb(), _godot_js_set_ime_cb() (+6 more)

### Community 11 - "Fountain Spirit Lore"
Cohesion: 0.15
Nodes (14): getPitchScale(), getPlaybackPosition(), getPlaybackRate(), getSampleNodeOrNull(), _godot_audio_get_sample_playback_position(), _godot_js_tts_pause(), pause(), pauseSampleNode() (+6 more)

### Community 12 - "Fountain Spirit Lore"
Cohesion: 0.17
Nodes (13): checkStackCookie(), consumedModuleProp(), exitRuntime(), initRuntime(), postRun(), preMain(), preRun(), quit() (+5 more)

### Community 14 - "Market Spirit Lore"
Cohesion: 0.40
Nodes (5): done(), getMounts(), onPersistComplete(), startPersist(), syncfs()

### Community 15 - "Statue Spirit Lore"
Cohesion: 0.40
Nodes (5): _godot_audio_resume(), _godot_js_tts_resume(), _godot_js_tts_speak(), _godot_js_tts_stop(), resume()

### Community 16 - "Statue Spirit Lore"
Cohesion: 0.40
Nodes (5): ioctl(), ioctl_tcgets(), ioctl_tcsets(), ioctl_tiocgwinsz(), ___syscall_ioctl()

### Community 17 - "King Pedestal Lore"
Cohesion: 0.67
Nodes (3): _disableSolo(), _enableSolo(), solo()

### Community 18 - "Website Frontend"
Cohesion: 0.16
Nodes (9): Footer(), Navbar(), Characters(), Factions(), Home(), Join(), Lore(), Ruins() (+1 more)

### Community 33 - "Project Identity"
Cohesion: 0.40
Nodes (5): The Broken Kingdom, The Broken Kingdom Website, index.html, main.jsx, root div

## Knowledge Gaps
- **25 isolated node(s):** `type`, `name`, `private`, `version`, `type` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ExitStatus` connect `Dialogue Interface` to `Global State & Persistence`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `get()` connect `The Judge's Trial` to `Global State & Persistence`, `World Ruins`, `Elite Enemies (Knights)`, `Ethereal Enemies (Spirits)`, `Fountain Spirit Lore`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `type`, `name`, `private` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Global State & Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.013245033112582781 - nodes in this community are weakly interconnected._
- **Should `The Judge's Trial` be split into smaller, more focused modules?**
  _Cohesion score 0.06280193236714976 - nodes in this community are weakly interconnected._
- **Should `The Broken King` be split into smaller, more focused modules?**
  _Cohesion score 0.09951690821256039 - nodes in this community are weakly interconnected._
- **Should `Dialogue System` be split into smaller, more focused modules?**
  _Cohesion score 0.09885057471264368 - nodes in this community are weakly interconnected._
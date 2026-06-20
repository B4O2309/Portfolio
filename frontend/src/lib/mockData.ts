import type { Project, BlogPostListItem, Job, Education, MediaItem } from "@/types";

// ── Projects ──────────────────────────────────────────────

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Verdi",
    slug: "verdi",
    description:
      "A full-stack real-time social chat application. Supports direct messaging, group chats, friend system, live notifications, media uploads and profile management — built solo from scratch in ~2.5 months.",
    content: `## Overview

Verdi is a full-featured social chat platform built with a modern React 19 + Node.js stack. Users can add friends, chat in real-time via direct or group conversations, react to messages, and manage their profiles — all with live notifications powered by Socket.io.

## Features

### Authentication & Security
- JWT-based auth with automatic token refresh
- Google OAuth 2.0 login via Passport.js
- Secure password hashing with bcrypt
- Email verification via Nodemailer

### Real-time Messaging
- Instant direct and group messaging via Socket.io
- Message reply, search, and deletion
- Infinite scroll through message history
- Read/unread tracking
- Duplicate message and race condition handling

### Social System
- Friend request flow: send, accept, decline
- Live notifications for friend requests and new messages
- Group chat creation with member management
- Member list viewer

### Profile & Media
- Profile customisation (avatar, display name, bio)
- Password change flow
- Image uploads hosted on Cloudinary

### Developer Experience
- Full REST API documented with Swagger UI
- TypeScript throughout — frontend and backend
- Zod schema validation on all forms
- Zustand for lightweight, predictable client state

## Architecture

**Frontend:** React 19, TypeScript, Vite, TailwindCSS 4, Zustand, Socket.io Client, React Router 7, React Hook Form + Zod, Axios, Radix UI, Lucide React

**Backend:** Node.js, Express, MongoDB + Mongoose, Socket.io, JWT, Passport.js (Google OAuth 2.0), Cloudinary, Nodemailer, Swagger UI, bcrypt

## Development Timeline

Built entirely solo over ~2.5 months (Feb 6 → Apr 16, 2026) with 25 commits covering auth, real-time messaging, group chats, friend system, notifications, and polish.`,
    category: "web",
    tags: ["React 19", "Socket.io", "TypeScript", "Node.js", "MongoDB", "Zustand", "TailwindCSS 4"],
    github: "",
    liveUrl: null,
    image: "/verdi/08-dashboard.jpeg",
    featured: true,
    order: 1,
    year: "2026",
    role: "Full-Stack Developer",
    team: "Solo",
    duration: "~2.5 months",
    createdAt: "2026-02-06T00:00:00Z",
    updatedAt: "2026-04-16T00:00:00Z",
    media: [
      // ── Demo Video ────────────────────────────────────────
      { type: "video", url: "/verdi/demo.mp4", thumbnail: "/verdi/08-dashboard.jpeg", caption: "Full demo — auth, OTP, messaging, group chat, friend system, profile settings" },
      // ── Auth ──────────────────────────────────────────────
      { type: "image", url: "/verdi/01-register.jpeg",           caption: "Register — create a Verdi account with name, username, email & password" },
      { type: "image", url: "/verdi/02-register-validation.png", caption: "Register — client-side validation errors on all fields" },
      { type: "image", url: "/verdi/03-login.jpeg",              caption: "Login — username/password sign-in or Continue with Google (OAuth 2.0)" },
      { type: "image", url: "/verdi/04-login-validation.png",    caption: "Login — inline validation feedback before submission" },
      // ── OTP / Password Reset ──────────────────────────────
      { type: "image", url: "/verdi/05-forgot-password.png",     caption: "Forgot Password — enter registered email to receive OTP via Nodemailer" },
      { type: "image", url: "/verdi/06-otp-verify.png",          caption: "OTP Verification — 6-digit code sent to email, expires in 10 minutes" },
      { type: "image", url: "/verdi/07-reset-password.png",      caption: "Reset Password — set new password after OTP verified" },
      // ── Main App ─────────────────────────────────────────
      { type: "image", url: "/verdi/08-dashboard.jpeg",          caption: "Main Dashboard — sidebar listing Group Chats & Direct Messages, sign-in success toast" },
      { type: "image", url: "/verdi/09-new-conversation.png",    caption: "New Conversation — create a DM or group from your friends list" },
      // ── Direct Messages ───────────────────────────────────
      { type: "image", url: "/verdi/10-dm-empty.png",            caption: "Direct Message — newly opened conversation ready to chat" },
      { type: "image", url: "/verdi/11-dm-chat.png",             caption: "Direct Message — real-time chat with emoji reactions, image upload, message actions" },
      { type: "image", url: "/verdi/12-dm-reply-reaction.png",   caption: "Direct Message — reply to specific message, message seen indicator, reactions" },
      // ── Group Chat ────────────────────────────────────────
      { type: "image", url: "/verdi/13-group-chat.png",          caption: "Group Chat — multi-member group conversation with member avatars in header" },
      { type: "image", url: "/verdi/14-group-search.png",        caption: "Group Chat — in-conversation message search with keyword highlight" },
      // ── Conversation Management ───────────────────────────
      { type: "image", url: "/verdi/15-convo-menu.jpeg",         caption: "Conversation Menu — hide or delete a conversation from the sidebar" },
      // ── Friend System ─────────────────────────────────────
      { type: "image", url: "/verdi/16-friend-requests.png",     caption: "Friend Requests — Received / Sent tabs, live \"You are now friends!\" toast" },
      { type: "image", url: "/verdi/17-user-profile-card.png",   caption: "User Profile Card — view profile, Friends / Block actions inline in chat" },
      // ── Profile & Settings ────────────────────────────────
      { type: "image", url: "/verdi/18-profile-settings.jpeg",   caption: "Profile & Settings — Personal Info: display name, username, email, phone, bio" },
      { type: "image", url: "/verdi/19-privacy-tab.jpeg",        caption: "Privacy Tab — Active Sessions, Change Password, Block Users, Danger Zone" },
      { type: "image", url: "/verdi/20-change-password.jpeg",    caption: "Change Password — current + new password with Forgot Password flow" },
      { type: "image", url: "/verdi/21-delete-account.png",      caption: "Delete Account — permanent action confirmation dialog (Danger Zone)" },
    ] as MediaItem[],
  },
  {
    id: 5,
    title: "Eden Isle",
    slug: "eden-isle",
    description:
      "A first-person 3D survival horror co-op game built in Unity for 1–4 players — stranded on a mysterious island of failed biological experiments, players must manage hunger, thirst, body temperature, and sanity while fighting mutated wildlife and uncovering the dark truth to escape.",
    content: `## Overview

**Eden Isle** is a first-person survival horror co-op game (1–4 players) developed as a 3-person Capstone project at VTC Academy (Game Programming major). Players are stranded on a mysterious island once used for secret biological experiments. To survive and escape they must manage resources, maintain sanity, explore a seamless open world, and work together against mutated creatures and psychological horror.

The game uses **Photon Fusion** for authoritative multiplayer and features a full environmental interaction loop — from chopping trees to cooking meat over a campfire.

## Features

### Survival Systems
- HP, Hunger, Thirst, Stamina, Body Temperature, and Sanity — each with decay rates and restoration conditions
- Low Sanity triggers hallucinations, false guidance, and temporary loss of player control

### Wildlife & Enemies
- Passive animals: Deer, Rabbit, Toucan — flee or scatter on player approach
- Aggressive predators: Wolf, Bear — stalk, chase, and attack; behaviour escalates at night
- AI reacts to sound, sight, crouching, and time of day

### World & Environment
- Seamless open-world island with dense forests, caves, cliffs, and beaches
- Dynamic day/night cycle (40-minute real-time day) and weather system
- Resource gathering: chop trees, collect logs, hunt animals for meat

### Co-op (1–4 Players)
- Shared world state: enemies, resources, structures, and player stats synced via Photon Fusion
- Proximity voice chat via Photon Voice
- Item dropping, sharing, and optional teammate revive

### Crafting & Building
- Gather wood, stone, and food to craft tools, weapons, and survival items
- Grid-based structure placement with HP and destruction

## My Contributions

### Player Systems
- **Movement controller**: walk, sprint, crouch, and jump with acceleration curves and networked state across all clients; footstep sound emission scales with speed to feed the animal AI perception system
- **Attack system**: weapon-agnostic melee with animation-event-driven hitbox open/close timing, failsafe auto-reset on stuck states, and remote client sync via network tick
- **Animator controller**: bridges networked movement state to the character animator, including first-person body twist and aim alignment for third-person visibility to other players
- **Camera**: first-person mouse-look with screen shake and dynamic FOV tilt during sprint
- **Interaction system**: raycast-based interaction with trees, items, chests, campfires, and structures, driving the HUD interaction prompt

### Animal AI
- **Base animal class**: shared state machine (Wander, Suspect, Flee, Dead) with FOV vision detection, hearing via world sound events, short-term memory of last-known player position, and day/night behaviour modifiers that shift vision range, hearing sensitivity, and activity patterns
- **Aggressive animal base**: extends the base with a Chase → Prepare Attack → Burst Attack → Recovery combat pipeline; a damage interrupt aborts the current phase and re-enters suspect state
- **Species**: Wolf (pack predator, escalates at night), Bear (high-HP, devastating melee), Deer (passive, strong flee), Rabbit (passive, scatters as a group using boid-style neighbour checks), Toucan (passive bird with idle perch patterns)
- **Animal spawner**: manages population caps and respawn timers per species across the open world

### Tree Chopping & Fall Logic
- **Tree manager**: spatial-grid lookup built at startup for fast nearest-tree detection without full linear scans; per-tree HP with host-authoritative damage
- **Fall animation**: a proxy tree object is spawned on chop and rotates 90° along the hit axis using an easing curve while the terrain tree is hidden, keeping the visual in sync across all clients
- **Log spawning**: log count derived from tree height, each piece raycasted to the ground before being network-spawned as a collectible
- **State sync**: late-joining players receive the current felled-tree set from the host on connect so world state stays consistent

## Tech

- **Engine:** Unity 3D (URP)
- **Language:** C#
- **Networking:** Photon Fusion
- **Audio:** Photon Voice
- **Platform:** PC`,
    category: "game",
    tags: ["Multiplayer", "Photon Fusion", "Survival Horror", "Unity", "C#", "3D", "NavMesh AI"],
    github: "",
    liveUrl: null,
    image: "/edenisle/InGame.png",
    featured: true,
    order: 2,
    year: "2026",
    role: "Game Developer",
    team: "3-person team",
    duration: "~3 months (ongoing)",
    createdAt: "2026-03-01T00:00:00Z",
    updatedAt: "2026-06-16T00:00:00Z",
    media: [
      { type: "video",  url: "/edenisle/EdenIsleDemo.mp4",              thumbnail: "/edenisle/InGame.png",          caption: "Demo — player movement, melee combat, animal AI, and tree chopping" },
      { type: "image",  url: "/edenisle/MainMenu.png",                  caption: "Main Menu" },
      { type: "image",  url: "/edenisle/CharacterSelection.png",        caption: "Character Selection" },
      { type: "image",  url: "/edenisle/ChoosingServer.png",            caption: "Choosing Server" },
      { type: "image",  url: "/edenisle/InGame.png",                    caption: "In-Game — first-person view" },
      { type: "image",  url: "/edenisle/CuttingTrees.png",              caption: "Cutting Trees" },
      { type: "image",  url: "/edenisle/FallenTree.png",                caption: "Fallen Tree" },
      { type: "image",  url: "/edenisle/PickUpFruit.png",               caption: "Picking Up Fruit" },
      { type: "image",  url: "/edenisle/Inventory.png",                 caption: "Inventory" },
      { type: "image",  url: "/edenisle/Knowledge.png",                 caption: "Knowledge / Codex" },
      { type: "image",  url: "/edenisle/DrivingBoat.png",               caption: "Driving Boat" },
      { type: "image",  url: "/edenisle/BearComing.png",                caption: "Bear Encounter" },
      { type: "image",  url: "/edenisle/DearRunning.png",               caption: "Deer Running" },
      { type: "image",  url: "/edenisle/Afternoon.png",                 caption: "Afternoon Lighting" },
      { type: "image",  url: "/edenisle/Night.png",                     caption: "Night Scene" },
      { type: "image",  url: "/edenisle/MarkerOtherPlayer.png",         caption: "Marker — Other Player" },
      { type: "image",  url: "/edenisle/Player2JoinedThe Game.png",     caption: "Player 2 Joined the Game" },
      { type: "image",  url: "/edenisle/Player2CuttingTree.png",        caption: "Player 2 Cutting Tree" },
      { type: "image",  url: "/edenisle/Player2BringLog.png",           caption: "Player 2 Bringing Log" },
    ] as MediaItem[],
  },
  {
    id: 2,
    title: "The World Rift: Shadow of Chaos",
    slug: "the-world-rift",
    description:
      "A 2D top-down action RPG built with Unity — set in a dark-fantasy world torn apart by an ancient rift between Order and Chaos. Choose Warrior or Mage, battle corrupted creatures, and confront Sir Kael, the fallen guardian behind the World Rift.",
    content: `## Overview

**The World Rift: Shadow of Chaos** is a single-player 2D top-down ARPG prototype developed as a 2-person student project at VTC Academy (Game Programming major). Inspired by Souls-like design, the game emphasises real-time combat with dodge, parry, and skill-based depth across a linear dark-fantasy adventure.

## Features

### Two Playable Classes
- **Warrior – Vessel of Valor**: Melee, shield, parry & block, high defense, short-range combos, survival kit
- **Mage – Vessel of Wisdom**: Ranged elemental caster (fire, ice, lightning), teleport, burst damage, strong area control

### Real-time Combat System
- Basic attacks with directional mouse aiming
- Dash (Warrior) / Teleport (Mage), parry & block, crowd-control spells
- 3 unique skills per class (Q / E / R) — cooldown & MP based
- Boss encounters with multi-phase patterns and telegraphed attacks

### World of Elyndra
- **Elyndra Village** — safe hub, NPCs, shop, story beats
- **The Forest / Forgotten Grove** — corrupted nature, early enemies
- **The Dungeon** — deeper enemies and encounters
- **The Inner Abyss** — final area and Sir Kael boss arena

### Bosses
- **Infernal Hydra** — corrupted guardian of the forest
- **Darian** — lost knight controlled by Rift energy
- **Sir Kael** — fallen balance keeper, final boss wielding both Order & Chaos

### Progression & Economy
- Character level system with auto-scaling stats per class
- Skill levels that improve damage & reduce cooldowns
- Equipment rarity tiers: Starter → Common → Rare → Epic → Legendary
- Gold economy from enemies, chests, and quests

### Inventory & Loot
- Grid-based inventory with stackable consumables
- Equipment manager with multiple slots (weapon, armor, potions, etc.)
- World drops with rarity auras and name labels
- Wooden & Golden chests with different loot quality

### World & Time
- Dynamic day/night cycle affecting lighting, atmosphere, and enemy behaviour across all regions
- Enemies grow more aggressive and difficult at night, encouraging players to manage their pace

### Audio & Visuals
- Pixel-art chibi style with a dark-fantasy color palette
- Distinct visual themes for each region, shifting further with the day/night cycle
- Ambient sounds per area; class-specific combat SFX
- Separate themes for exploration, combat, boss fights, endings, and game over

## Tech
- **Engine:** Unity 2022+
- **Language:** C#
- **Platform:** Windows PC

## My Contributions

### Programming — Core Game & Game Flow
- Shop system: item listing, buy/sell transaction logic, and coin economy
- NPC interaction system: dialogue trigger, branching dialogue activation, and boss cutscene hooks
- Chest system: chest interaction logic, loot spawning, and locked-chest unlock conditions

### Game Design — Story, NPCs & Bosses
- Wrote the main narrative and all branching game endings (seal vs. absorb Chaos)
- Designed NPC roster, full dialogue system, shop catalogue, chest placement, and health bar UI
- Designed Warrior character and bosses Darian and Sir Kael (lore, visual direction, attack patterns)
- Created loading screens, project report, game trailer, and presentation slides

### Art & Environment — High-fidelity Environments
- Designed and built Elyndra Village, The Dungeon, and The Inner Abyss scenes
- Created enemy sprites: Skeleton, Bat, and Necromancer
- Animated skill VFX and combat effects for the Warrior character

### UI/UX & Audio — Main Interface
- Designed HUD, Shop, and Dialogue interfaces
- Optimised UX flow and tuned sound effects for the Warrior and all three environments (Village, Dungeon, Inner Abyss)`,
    category: "game",
    tags: ["2D ARPG", "Pixel Art", "Top-down", "Unity", "C#"],
    github: "",
    liveUrl: null,
    image: "/worldrift/06-combat-warrior.jpg",
    featured: true,
    order: 3,
    year: "2025",
    role: "Game Developer & Designer",
    team: "2-person team",
    duration: "~3 months",
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-11-01T00:00:00Z",
    media: [
      { type: "video", url: "/worldrift/trailer.mp4", thumbnail: "/worldrift/01-main-menu.jpg", caption: "Official trailer — gameplay, combat, bosses, and story moments" },
      { type: "image", url: "/worldrift/01-main-menu.jpg",              caption: "Main Menu — pixel-art dark-fantasy title screen" },
      { type: "image", url: "/worldrift/02-char-select.jpg",            caption: "Character Selection — choose Warrior or Mage, each with a unique playstyle" },
      { type: "image", url: "/worldrift/03-hud-warrior.jpg",            caption: "Warrior HUD — HP/MP orbs, skill hotbar, EXP bar, and coin counter in gameplay" },
      { type: "image", url: "/worldrift/05-village.jpg",                caption: "Elyndra Village — character style overview and hub-area map" },
      { type: "image", url: "/worldrift/06-combat-warrior.jpg",         caption: "Warrior — Basic Attack: directional melee strike with interaction prompt" },
      { type: "image", url: "/worldrift/warrior-parry.jpg",             caption: "Warrior — Parry & Block: precise counter on right-click timing" },
      { type: "image", url: "/worldrift/warrior-groundbreaker.png",  caption: "Warrior — Groundbreaker (Ultimate): giant hammer from the sky, AoE energy burst" },
      { type: "image", url: "/worldrift/warrior-heal.jpg",            caption: "Warrior — Heal: restoring health to the Warrior" },
      { type: "image", url: "/worldrift/08-npc-village.jpg",            caption: "NPC dialogue — Eleonore (Celestial Mentor) first encounter in Elyndra Village" },
      { type: "image", url: "/worldrift/09-npc-dungeon.jpg",            caption: "NPC dialogue — Eleonore second encounter deep inside The Dungeon" },
      { type: "image", url: "/worldrift/11-shop.jpg",                   caption: "Shop UI — buy/sell consumables and equipment via the coin economy" },
      { type: "image", url: "/worldrift/map-abyss.png",              caption: "The Inner Abyss — final area level design, Sir Kael's boss arena" },
      { type: "image", url: "/worldrift/map-dungeon.jpg",             caption: "The Dungeon — level design map, opening area and Darian's domain" },
    ] as MediaItem[],
  },
  {
    id: 3,
    title: "The Last Homestead",
    slug: "the-last-homestead",
    description:
      "A solo 2D top-down action RPG built in Unity — follow Aric, a young warrior wielding an ancient sword, through a coastal village, haunted ruins, and a cursed dungeon to shatter the corruption consuming his world.",
    content: `## Overview

**The Last Homestead** is a solo-developed 2D top-down action RPG prototype built in Unity for a student project at VTC Academy (Game Programming major). The game explores themes of moral corruption and redemption through tight real-time combat, progressive difficulty scaling, and dynamic audio design.

## Story

The world is being consumed by an ancient curse — warriors who succumb to it become corrupted soldiers driven by malice. Aric, a young swordsman, must fight through three regions to face the source of corruption and free his homeland.

Three acts, three maps:
- **Map 1 — The Village**: A peaceful coastal island, tutorial area. NPCs (green soldiers) guide the environment, no combat yet.
- **Map 2 — The Ruins**: Corrupted red soldiers swarm the ruins. Defeating enemies reveals escaping corrupted souls, hinting at the curse's origin. A stone slab teleports Aric deeper.
- **Map 3 — The Dungeon**: The darkest area. The final boss — a legendary knight fully possessed — unleashes 3-hit combo chains and a dash-assassinate attack. Defeating him breaks the curse.

## Gameplay

- **8-directional WASD movement** with mouse-aimed attacks
- **3-hit sword combo** — left-click, direction set by cursor position
- **HP system** — health potions dropped by enemies or scattered on maps
- **EXP & level-up** — EXP bar on HUD, each level-up raises the required EXP threshold by 20%
- **Escalating difficulty** — enemy speed increases 40% in Map 3; boss has randomised patterns

## Enemies

- **Basic Red Soldier** — melee, low HP, medium speed
- **Shield Soldier** — melee, medium HP, slow
- **Corrupted Warrior** — high HP, high damage, requires kiting tactics
- **Final Boss (Possessed Knight)** — 3-hit combo + dash-assassinate, multiple times the HP of standard enemies

## Technical Highlights

- **Screen Shake** — Cinemachine Impulse on hit/attack, tuned amplitude and duration
- **Floating Damage Text** — red (outgoing) / white (incoming) pixel-font numbers, fade-up animation
- **Dynamic Ocean Audio** — volume scales as \`1 / (distance + 1)\` from nearest shoreline point, real-time spatial effect
- **A\\* Pathfinding AI** — enemies navigate around obstacles and pursue the player; boss has partially randomised attack patterns
- **Per-map BGM** — seamless-loop tracks: piano (village calm), dramatic (ruins combat), organ + echo (dungeon dread)

## Tech

- **Engine:** Unity 2022+
- **Language:** C#
- **Platform:** Windows PC`,
    category: "game",
    tags: ["2D RPG", "Solo", "Pixel Art", "Unity", "C#", "A* Pathfinding"],
    github: null,
    liveUrl: null,
    image: "/tlh/gameplay-map3-boss-fight.png",
    featured: false,
    order: 4,
    year: "2025",
    role: "Solo Developer",
    team: "Solo",
    duration: "~1 month",
    createdAt: "2025-09-01T00:00:00Z",
    updatedAt: "2025-09-30T00:00:00Z",
    media: [
      { type: "image", url: "/tlh/gameplay-map1-village.png",       caption: "Map 1 — The Village: Aric explores the peaceful coastal island, no enemies yet" },
      { type: "image", url: "/tlh/gameplay-map1-dock.png",          caption: "Map 2 — Dock area: Aric boards the ship departing for the Ruins, NPC and teleport stone visible" },
      { type: "image", url: "/tlh/gameplay-map2-ruins-combat.png",  caption: "Map 2 — The Ruins: Aric mid-combat against corrupted enemies, floating damage numbers and EXP bar in HUD" },
      { type: "image", url: "/tlh/gameplay-map2-ruins-fight.png",   caption: "Map 2 — The Ruins: Aric engaging a corrupted warrior, HP bar and level indicator on HUD" },
      { type: "image", url: "/tlh/gameplay-map3-boss-fight.png",    caption: "Map 3 — The Dungeon: Final Boss (Possessed Knight) swinging his greatsword, floating damage and health potion on ground" },
      { type: "image", url: "/tlh/design-map1-overview.png",        caption: "Village island — top-down level design overview of the full Map 1 layout" },
      { type: "image", url: "/tlh/ui-main-menu.png",                caption: "Main Menu — epic dark-fantasy title art with chains, PLAY and QUIT" },
      { type: "image", url: "/tlh/ui-pause-menu.png",               caption: "Pause Menu — Resume or Quit, triggered by ESC during gameplay" },
      { type: "image", url: "/tlh/ui-victory.png",                  caption: "Victory Screen — \"Final Boss Defeated!\" displayed after breaking the curse" },
      { type: "image", url: "/tlh/ui-game-over.png",                caption: "Game Over — Retry or return to Main Menu, boss looming in the background" },
    ] as MediaItem[],
  },
  {
    id: 4,
    title: "Ashen's Blade",
    slug: "ashens-blade",
    description:
      "A 2D side-scrolling action platformer built in Unity — play as a warrior chosen by an ancient stone, battle through grasslands, forests, and caves, master three combat skills, and take down the boss lurking at the end of each map.",
    content: `## Overview

**Ashen's Blade** is a 2D side-scrolling action platformer developed solo as a Semester 1 student project at VTC Academy (Game Programming major). Inspired by classics like Hollow Knight and Celeste, the game focuses on tight platforming, responsive melee combat, and a multi-layered parallax world that evolves across three distinct environments.

## Story

In the world of Elyndra, an ancient stone chooses its next champion. The player awakens in Ashwhisper Village and is greeted by Nyra — a mysterious cat NPC — with the words: *"Well well… looks like the stone has chosen you."* Armed with a blade, the warrior sets out through corrupted lands to defeat the darkness threatening each region.

## Gameplay

- **Side-scrolling platformer** — run, jump, and traverse three maps: grasslands (Map 1), dark forest (Map 2), and deep cave/dungeon (Map 3)
- **Melee combat** — directional sword attacks with combo potential
- **Three active skills:**
  - **Dash / Slide** — rapid horizontal burst for mobility and dodging
  - **Heal** — restore HP mid-combat at the cost of skill charges
  - **Power Burst** — explosive spiky aura dealing AoE damage
- **Skill HUD** — bottom panel showing skill icons, charges, and HP bar (100 HP)
- **NPC dialogue system** — click-triggered conversations that advance the story
- **Boss encounters** — each map culminates in a boss fight with unique patterns
- **Parallax background** — multi-layer scrolling at different speeds creates depth in every scene

## Systems

- HP system — visual bar + damage numbers on hit; death triggers "You Died!" screen
- Game Over ("You Died? Try Again?") — Yes restarts the map, No returns to Main Menu
- Win Screen ("Thanks for playing") — shown after clearing the final boss in Map 3
- Pause Menu (ESC) — Resume, Settings, Quit to Main Menu
- Audio Settings — Master Volume, Music Volume, SFX Volume sliders

## Tech

- **Engine:** Unity 2022+ (Unity 6.2 Alpha)
- **Language:** C#
- **IDE:** Visual Studio 2022
- **Art tools:** Photoshop / Piskel
- **Audio tools:** Audacity
- **Platform:** Windows PC`,
    category: "game",
    tags: ["2D Platformer", "Solo", "Pixel Art", "Unity", "C#", "Side-scrolling"],
    github: null,
    liveUrl: null,
    image: "/ashenblade/gameplay-combat-skill1.jpg",
    featured: false,
    order: 5,
    year: "2025",
    role: "Solo Developer",
    team: "Solo",
    duration: "~1 month",
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-05-24T00:00:00Z",
    media: [
      { type: "video", url: "/ashenblade/AshenDemo.mp4", thumbnail: "/ashenblade/gameplay-map1-village.jpg", caption: "Full demo — gameplay, combat, skills, NPC dialogue, and UI" },
      // ── Scenes ─────────────────────────────────────────────
      { type: "image", url: "/ashenblade/gameplay-map1-village.jpg",  caption: "Main Menu" },
      { type: "image", url: "/ashenblade/gameplay-map2-cave.png",     caption: "Map 1 — Cave entrance: dark rocky cliffs with golden stone platforms, transition between worlds" },
      { type: "image", url: "/ashenblade/gameplay-map1-hud.jpg",      caption: "Map 2 gameplay — HUD: HP bar (100/100), 3 skill slots (dash / heal / slash), area title banner" },
      { type: "image", url: "/ashenblade/gameplay-npc-dialogue.jpg",  caption: "NPC dialogue — cat Nyra" },
      { type: "image", url: "/ashenblade/gameplay-map3-dungeon.png",  caption: "Map 3 — Dungeon Scene" },
      // ── Skills ─────────────────────────────────────────────
      { type: "image", url: "/ashenblade/gameplay-combat-skill1.jpg", caption: "Skill 1 — Dash: rapid horizontal burst for dodging" },
      { type: "image", url: "/ashenblade/gameplay-skill-burst.jpg",   caption: "Skill 3 — Heal: blue healing light VFX, restoring HP instantly" },
      { type: "image", url: "/ashenblade/gameplay-skill3-slash.png",  caption: "Skill 4 — Blade Slash, red slash VFX, dealing critical damage" },
      // ── UI ─────────────────────────────────────────────────
      { type: "image", url: "/ashenblade/ui-pause-menu.jpg",          caption: "Pause Menu" },
      { type: "image", url: "/ashenblade/ui-you-died.jpg",            caption: "Game Over UI" },
      { type: "image", url: "/ashenblade/ui-win-screen.jpg",          caption: "Win Screen UI" },
    ] as MediaItem[],
  },
  {
    id: 6,
    title: "Cock Escape",
    slug: "color-dice-3d",
    description:
      "A 3D isometric mobile puzzle game built in Unity — players control a blocky character exploring rooms viewed from a rotating isometric camera, mixing colors to unlock doors and advance through each level before the timer runs out.",
    content: `## Overview

**Cock Escape** is a 3D isometric mobile puzzle game developed as a team project at VTC Academy. The game is played in portrait mode on mobile, with the player controlling a voxel-style character inside a series of rooms viewed from a fixed isometric perspective. Each room is locked behind a door puzzle requiring the player to mix colors correctly — apply the right color combination to each slot on the door to trigger the opening animation and move on.

## Gameplay

- **Isometric mobile view** — fixed isometric camera orbiting the room, rotated via on-screen left/right arrow buttons at the bottom corners of the screen
- **Color mixing mechanic** — a bottom panel displays available color chips and a mixer showing color1 + color2 = result; players combine colors to produce the correct shade needed for each door slot
- **Room-based progression** — each room contains a unique puzzle on a locked door; solving it triggers a door opening animation and loads the next room
- **Two door types** — single-door (180° rotation) and double-door (multi-step DOTween sequence with barrier removal)
- **Timer** — a live timer runs per room, displayed in the top HUD; final time is shown on the victory screen
- **Inspection system** — players can examine objects and read paper clues placed around the room
- **Inventory & item combining** — collectible items can be combined to solve supplementary environmental puzzles
- **Fade transitions** — smooth fade-out/fade-in between room loads

## Camera System

The camera orbits the room from one of four fixed isometric angles, snapping 90° per tap on the on-screen rotate buttons. The transition uses smooth Lerp/Slerp so the rotation feels fluid rather than instant. A separate **Focus Mode** moves the camera to a close-up position in front of a door or picture for interaction, then returns to the last orbit angle on exit. Wall visibility is driven by the current direction index so only the walls facing the camera render correctly at any angle.

## UI & Menus

- **Main Menu** — animated voxel avatar with an idle loop and a hidden Easter egg interaction on tap
- **In-game HUD** — live timer at the top centre, character avatar icon, camera rotate buttons at bottom corners, and the color mixing panel at the bottom
- **Settings panel** — master volume, music, and SFX sliders with toggle icons
- **Victory panel** — displays final clear time and a next-room button
- **Failed panel** — triggered when all door slots are filled but the color combination is incorrect
- **Scene transitions** — FadeManager handles fade-out/fade-in callbacks between Menu and Game scenes

## Tech

- **Engine:** Unity (URP)
- **Language:** C#
- **Platform:** Mobile (portrait)
- **Libraries:** DOTween, TextMesh Pro

## My Contributions

### Camera System
- Implemented the 4-angle isometric orbit camera with smooth Lerp/Slerp rotation, snapping 90° per input using a direction index and target yaw offset
- Built the Focus Mode system transitioning the camera to door or picture focus points and returning smoothly to the correct orbit angle on exit
- Wired wall visibility updates to the current direction index so only the camera-facing wall renders at each angle

### UI & Menu
- Set up the full Main Menu scene including layout, animated avatar idle loop, Easter egg tap interaction, and quit logic
- Implemented all in-game UI panels — Settings, Victory, and Failed — managed via UIManager singleton
- Integrated the FadeManager fade-out/fade-in callback system into the Next Room and Replay flows
- Connected audio settings sliders to AudioSettingsManager and wired sound toggle icon states`,
    category: "game",
    tags: ["Mobile", "Puzzle", "Isometric", "Unity", "C#", "3D", "DOTween"],
    github: "",
    liveUrl: null,
    image: null,
    featured: false,
    order: 6,
    year: "2025",
    role: "Game Developer",
    team: "5-person team",
    duration: null,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    media: [] as MediaItem[],
  },
  {
    id: 7,
    title: "URL Shortener System",
    slug: "url-shortener-system",
    description:
      "A scalable URL-shortening service built on a .NET 8 microservices architecture — featuring an Ocelot API Gateway, Redis distributed caching, RabbitMQ async messaging, JWT auth, and a React frontend, all orchestrated with Docker Compose.",
    content: `## Overview

A cloud-native URL shortening platform developed as a team coursework project (AMD201 — Greenwich University). The system follows a microservices pattern with two independent backend services communicating asynchronously, fronted by a single API Gateway and backed by SQL Server, Redis, and RabbitMQ — all containerised with Docker.

## Architecture

- **API Gateway (Ocelot)** — single entry point routing all client requests to the correct downstream service
- **URL Service** — handles URL creation, Base62 short-code generation, 302 redirects, and Redis caching for fast lookups
- **User Service** — handles registration, login, JWT issuance, and publishes user events to RabbitMQ
- **Async Communication** — URL Service consumes RabbitMQ events from User Service to keep data consistent without tight coupling

## Features

### URL Service
- Base62 short-code generation for unique, compact URLs
- 302 redirect on short URL resolution
- Redis caching layer for high-read-performance on popular links
- RabbitMQ consumer to handle async user events

### User Service
- JWT authentication with configurable expiry
- Secure password hashing
- RabbitMQ publisher broadcasting user lifecycle events

### Infrastructure
- Ocelot API Gateway as the unified entry point
- SQL Server (separate databases per service — URLDb, UserDb)
- Redis for distributed caching
- RabbitMQ for async inter-service messaging
- Multi-stage Dockerfiles for optimised production images
- Docker Compose orchestrating all services with health checks and dependency ordering

### Frontend
- React + Vite with Tailwind CSS
- Axios-based API client routing through the Gateway
- AuthContext for global auth state
- Components: ShortenForm, UrlTable, Navbar

## My Contributions

- Designed and configured \`docker-compose.yml\` orchestrating SQL Server, Redis, RabbitMQ, and all three services
- Implemented Ocelot API Gateway with multi-stage Dockerfile
- Built the URL Service: entity design, Base62 shortening logic, 302 redirect, Redis caching in \`URLController.cs\`
- Developed \`UrlConsumer.cs\` (RabbitMQ) for async event handling from User Service
- Wrote unit tests and integration tests for Redis and database connectivity

## Tech

- **Backend:** .NET 8, Entity Framework Core, Ocelot
- **Frontend:** React (Vite), Tailwind CSS, Axios
- **Database:** SQL Server
- **Caching:** Redis
- **Messaging:** RabbitMQ
- **Containerisation:** Docker, Docker Compose`,
    category: "web",
    tags: [".NET 8", "Microservices", "Docker", "Redis", "RabbitMQ", "Ocelot", "React", "SQL Server"],
    github: "",
    liveUrl: null,
    image: "/urlshortener/02-shorten-dashboard.png",
    featured: false,
    order: 7,
    year: "2025",
    role: "Infrastructure & URL Service",
    team: "3-person team",
    duration: null,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
    media: [
      { type: "image", url: "/urlshortener/01-register.png",          caption: "Register Page" },
      { type: "image", url: "/urlshortener/02-shorten-dashboard.png", caption: "Shorten URL Dashboard" },
      { type: "image", url: "/urlshortener/03-list.png",              caption: "My Links List" },
      { type: "image", url: "/urlshortener/04-admin-panel.png",       caption: "Admin Panel — View All Users' Links" },
      { type: "image", url: "/urlshortener/05-url-shortening-api.png",caption: "API Testing — URL Shortening (Postman)" },
      { type: "image", url: "/urlshortener/06-get-user-urls-api.png", caption: "API Testing — Get User URLs (Postman)" },
      { type: "image", url: "/urlshortener/07-shorten-url-flow.png",  caption: "Functional Test — Shorten URL Flow" },
      { type: "image", url: "/urlshortener/08-admin-view-links.png",  caption: "Functional Test — Admin View User Links" },
    ] as MediaItem[],
  },
];

// ── Blog ──────────────────────────────────────────────────

export const mockBlogPosts: BlogPostListItem[] = [
  {
    id: 1,
    title: "Building Wildlife AI for Eden Isle",
    slug: "wildlife-ai-eden-isle",
    summary:
      "How I designed the animal AI system for our multiplayer survival horror game — a shared state machine handling FOV detection, hearing, day/night behaviour shifts, and species-specific logic for wolves, bears, deer, and rabbits.",
    tags: ["Unity", "C#", "AI", "Game Dev", "NavMesh"],
    author: "Nguyen Hoang Gia Bao",
    published: true,
    date: "2026-05-20T00:00:00Z",
    createdAt: "2026-05-20T00:00:00Z",
    updatedAt: "2026-05-20T00:00:00Z",
  },
  {
    id: 2,
    title: "Syncing Tree Chopping Across Clients with Photon Fusion",
    slug: "tree-sync-photon-fusion",
    summary:
      "A deep dive into one of the trickiest systems in Eden Isle — making a tree fall the same way on every client, spawning the right number of logs, and keeping late-joining players in sync without re-running the whole world.",
    tags: ["Unity", "C#", "Photon Fusion", "Multiplayer", "Game Dev"],
    author: "Nguyen Hoang Gia Bao",
    published: true,
    date: "2026-04-10T00:00:00Z",
    createdAt: "2026-04-10T00:00:00Z",
    updatedAt: "2026-04-10T00:00:00Z",
  },
  {
    id: 3,
    title: "Game Feel in 2D: What I Learned from The Last Homestead",
    slug: "game-feel-last-homestead",
    summary:
      "Screen shake, floating damage numbers, dynamic spatial audio, and A* pathfinding — the small systems that made The Last Homestead feel like a real game instead of a student project.",
    tags: ["Unity", "C#", "Game Feel", "A* Pathfinding"],
    author: "Nguyen Hoang Gia Bao",
    published: true,
    date: "2025-10-05T00:00:00Z",
    createdAt: "2025-10-05T00:00:00Z",
    updatedAt: "2025-10-05T00:00:00Z",
  },
  {
    id: 4,
    title: "Real-time Messaging Architecture in Verdi",
    slug: "realtime-messaging-verdi",
    summary:
      "How I structured the Socket.io event layer in Verdi to handle direct messages, group chats, read receipts, and live notifications — without race conditions or duplicate messages.",
    tags: ["Node.js", "Socket.io", "TypeScript", "Web Dev", "Architecture"],
    author: "Nguyen Hoang Gia Bao",
    published: true,
    date: "2026-04-20T00:00:00Z",
    createdAt: "2026-04-20T00:00:00Z",
    updatedAt: "2026-04-20T00:00:00Z",
  },
];

export const mockBlogContent: Record<string, string> = {
  "wildlife-ai-eden-isle": `## The Problem

Eden Isle is a 1–4 player survival horror co-op set on an open-world island. The world needed to feel alive — passive animals fleeing, predators hunting, and behaviour shifting as night fell. I was responsible for the entire animal AI system, and the first question was architecture: one class per species, or a shared base everyone inherits from?

The answer was a shared base. All five species — wolf, bear, deer, rabbit, toucan — share the same core state machine and detection logic. Species-specific behaviour is layered on top through subclasses.

## The Core State Machine

Every animal runs four states: **Wander**, **Suspect**, **Flee**, and **Dead**.

\`\`\`csharp
public enum AnimalState { Wander, Suspect, Flee, Dead }
\`\`\`

Transitions are driven by two detection channels: vision and hearing.

**Vision** uses a cone check — if the player is within detection range and inside the FOV angle, a raycast confirms line of sight. Range and angle values are exposed as fields so each species gets its own sensory profile.

**Hearing** uses a world sound event system. When the player moves, their footstep component fires a sound event with a position and intensity value. Animals within range pick it up and enter Suspect state. Crouch-walking produces a quieter event; sprinting produces a louder one. This gives players something to manage.

\`\`\`csharp
void OnSoundHeard(Vector3 origin, float intensity) {
    if (Vector3.Distance(transform.position, origin) <= hearingRange * intensity)
        SetState(AnimalState.Suspect);
}
\`\`\`

The **Suspect** state starts a short timer. If the animal re-detects the player during that window, it transitions to Flee (passive) or Chase (aggressive). If it doesn't, it returns to Wander. This creates the moment where the deer looks up, and you hold still.

## Day/Night Modifiers

At night, predators become more dangerous. Rather than duplicating state logic, each animal holds a set of multipliers applied at runtime based on the current time-of-day value:

\`\`\`csharp
float effectiveVisionRange   = baseVisionRange   * dayNightProfile.visionMult;
float effectiveHearingRange  = baseHearingRange  * dayNightProfile.hearingMult;
float effectiveActivityLevel = baseActivityLevel * dayNightProfile.activityMult;
\`\`\`

Wolves at night have increased vision range, higher hearing sensitivity, and a faster chase speed. During the day they wander further apart and are easier to avoid.

## Aggressive Animals: the Combat Pipeline

Wolves and bears extend the base class with a four-phase combat pipeline: **Chase → PrepareAttack → BurstAttack → Recovery**.

PrepareAttack is a brief telegraph before the actual lunge — long enough for the player to dodge, short enough to feel dangerous. BurstAttack moves the agent forward at high speed, applies damage on contact, then locks into Recovery before the next cycle can begin.

If the animal takes damage during any phase, the pipeline aborts and re-enters Suspect state. This prevents damage-tanking and forces the player to manage spacing.

## Passive Animals

Deer uses the same base class but with no aggressive extension. Its Flee state is tuned for high speed and long duration. Rabbit groups use a simple neighbour check — when one rabbit enters Flee, nearby rabbits check for the alert and join in, producing a scatter effect without any explicit coordination logic. Toucan has an idle perch pattern layered on top of Wander, giving the forest ambient life even when the player isn't nearby.

## What I'd Do Differently

The day/night multiplier system works but is brittle. A data-driven approach using ScriptableObjects per species would be cleaner and easier to tune without touching code. That's the first refactor I'd make on a second pass.`,

  "tree-sync-photon-fusion": `## The Problem

Eden Isle has a tree-chopping system. Players hit trees with an axe, the tree falls, logs spawn, and those logs are collectible resources. Simple enough in a single-player game. In a 4-player co-op running on Photon Fusion, every step of that process needs to stay consistent across all clients — including a player who joins mid-session after trees have already been cut.

## Fast Tree Detection

The island has hundreds of terrain trees placed by Unity's terrain system. When a player lands a hit, we need to find the nearest tree quickly. A linear scan every frame isn't viable.

At startup, a TreeManager builds a spatial grid — the island is divided into cells, and each terrain tree is registered into the appropriate cell based on its world position. At hit time, we check only the trees in the cell containing the hit point and its neighbours. The lookup goes from O(n) to roughly O(1) for typical tree density.

\`\`\`csharp
public TerrainTree GetNearestTree(Vector3 worldPos) {
    var cell = WorldToCell(worldPos);
    return GetCellAndNeighbours(cell)
        .SelectMany(c => grid[c])
        .OrderBy(t => Vector3.Distance(t.position, worldPos))
        .FirstOrDefault();
}
\`\`\`

## The Fall Animation Problem

Unity terrain trees can't be animated directly — they're static instances managed by the terrain system. The solution is a proxy object.

When the host authorises a chop, it hides the terrain tree and spawns a matching proxy mesh at the same position. The proxy then rotates 90° around the hit axis using an easing curve over about 1.5 seconds, landing flat on the ground. Dust particles fire on impact. To everyone watching, a tree fell.

The proxy rotation runs on all clients simultaneously from the same network tick, so the animation stays in sync without streaming position data every frame.

## Log Spawning

Log count is derived from tree height — taller trees drop more logs. Each log position is determined by a raycast from a point along the fallen trunk down to the terrain surface, accounting for slope. Logs are then network-spawned as collectible objects owned by the host.

\`\`\`csharp
int logCount = Mathf.RoundToInt(treeHeight * logsPerUnit);
for (int i = 0; i < logCount; i++) {
    Vector3 spawnPos = GetLogSpawnPosition(fallenTrunk, i, logCount);
    Runner.Spawn(logPrefab, spawnPos, Quaternion.identity);
}
\`\`\`

## Late-Join Sync

The trickiest part. When a new player connects mid-session, they need to see the world as it currently is — without triggering fall animations for trees that fell twenty minutes ago.

The host maintains a list of felled tree indices. On player join, that list is sent as part of the initial state sync. The joining client hides those terrain trees and places flat proxy meshes in their final position, skipping the animation entirely. From the new player's perspective, the trees were always down.

## What I Learned

Multiplayer forces you to be explicit about every assumption you'd normally leave implicit. "The tree falls when you hit it" becomes a distributed systems problem. The proxy approach is a good pattern for anything that needs to look dynamic but can't be driven by continuous state replication.`,

  "game-feel-last-homestead": `## What is Game Feel?

Game feel is the difference between a prototype and a game. It's the screen shake when a sword connects, the number floating up showing exactly how much damage you dealt, the way the background music shifts as you go deeper into the dungeon. None of these things affect the core loop — but without them, the game feels hollow.

The Last Homestead was a solo one-month project, and most of that month went into these systems. Here's what I built and why.

## Screen Shake with Cinemachine Impulse

The naive approach to screen shake is translating the camera by a random offset each frame. It works, but it looks cheap — the shake has no weight or direction.

Cinemachine Impulse is better. You define an impulse source on the hitting object and a listener on the virtual camera. When the player attacks or takes damage, the source fires with a defined force and duration. The camera responds with a physically-based decay curve that feels like recoil rather than noise.

\`\`\`csharp
[SerializeField] CinemachineImpulseSource impulseSource;

void OnHit(float damage) {
    impulseSource.GenerateImpulse(damage * shakeForceMult);
}
\`\`\`

Tuning is everything here. Too much force and every hit feels catastrophic. Too little and it reads as nothing. I ended up with separate profiles for light attacks, heavy attacks, and taking damage, each with a different amplitude and duration.

## Floating Damage Numbers

Floating damage text gives the player information and feedback simultaneously. Seeing "47" pop off an enemy confirms the hit registered and tells you the number matters.

Each number is a world-space UI element instantiated at the hit position, moving upward along a curve and fading out over about 0.8 seconds. Outgoing damage uses red; incoming damage on the player uses white. The font is pixel-style to match the art direction.

The tricky part is preventing overlap when hits land in quick succession. Each new number spawns with a small random horizontal offset relative to the previous one, keeping them readable even during combo strings.

## Dynamic Ocean Audio

Map 1 takes place on a coastal island. The ocean should be audible but not constant — it should get louder as you approach the shore and quieter as you move inland.

Rather than placing multiple audio sources along the coast, I used a single source and a distance function. At runtime, the audio system samples the nearest point on a predefined shoreline path and scales the volume inversely with that distance:

\`\`\`csharp
float dist = GetDistanceToNearestShorelinePoint(player.position);
oceanAudio.volume = 1f / (dist + 1f);
\`\`\`

This gives a smooth, real-time spatial effect with minimal setup.

## A* Pathfinding for Enemies

Unity's NavMesh handles pathfinding automatically, but I wanted to understand A* from the implementation level, so I wrote a lightweight grid-based version for The Last Homestead's enemies.

The grid overlays the playable area at a fixed cell size. Cells overlapping obstacles are marked unwalkable at startup. At runtime, enemies request a path from their position to the player's last known position. The algorithm returns a list of waypoints the enemy follows via simple steering.

The boss adds a layer on top: its attack patterns are partially randomised, choosing between a direct charge and a wide flanking arc based on the player's position relative to the room centre. This makes the boss feel reactive without being purely random.

## The Takeaway

None of these systems are complicated. A screen shake is twenty lines. Floating text is maybe fifty. But the cumulative effect of having all of them is the difference between something that plays like a tech demo and something that feels like it was made to be played.`,

  "realtime-messaging-verdi": `## The Stack

Verdi is a real-time social chat application built solo over about two and a half months. The backend runs on Node.js with Express, MongoDB for persistence, and Socket.io for the real-time layer. The frontend is React 19 with Zustand managing client state.

The messaging system had to handle direct messages, group chats, read receipts, live notifications, and reconnection — without duplicate messages or race conditions. Here's how I structured it.

## Room-Based Architecture

Every conversation (DM or group) maps to a Socket.io room identified by its MongoDB document ID. When a user opens a conversation, the client emits a \`join_conversation\` event and the server adds the socket to the corresponding room. Messages sent to that conversation are emitted to the room, reaching all active participants instantly.

\`\`\`typescript
socket.on('join_conversation', (conversationId: string) => {
  socket.join(conversationId);
});

socket.on('send_message', async (data) => {
  const message = await MessageService.create(data);
  io.to(data.conversationId).emit('new_message', message);
});
\`\`\`

This keeps the server simple — it doesn't need to track which user is in which conversation at the socket level. The room handles delivery.

## Read Receipts

Read state is tracked per-user per-conversation in MongoDB. When a user opens a conversation, the client emits a \`mark_read\` event. The server updates the database and emits a \`conversation_read\` event back to all room members, so other participants see the "seen" indicator update in real time.

The client only emits \`mark_read\` when the conversation is actually visible — not when it's in the background. This prevents marking messages as read when the user hasn't actually seen them.

## Preventing Duplicate Messages

The first version had a race condition: fast typing sometimes caused the same message to appear twice. The client emitted \`send_message\`, the optimistic update added it to the local state immediately, and the server's \`new_message\` event added it again.

The fix was a client-side deduplication map keyed by a temporary ID generated at send time:

\`\`\`typescript
const pendingMessages = new Map<string, boolean>();

socket.on('new_message', (message) => {
  if (message.tempId && pendingMessages.has(message.tempId)) {
    // Replace optimistic entry, don't add a new one
    pendingMessages.delete(message.tempId);
    replaceOptimisticMessage(message.tempId, message);
  } else {
    addMessage(message);
  }
});
\`\`\`

## Live Notifications

Users receive notifications for new messages in conversations they're not currently viewing, and for incoming friend requests. These are delivered via a separate \`user:{id}\` room each user joins on connection — a personal channel for events not tied to a specific conversation.

\`\`\`typescript
socket.on('connect', () => {
  socket.join(\`user:\${currentUser.id}\`);
});
\`\`\`

The server emits \`new_notification\` to this personal room whenever something relevant happens. The client increments the badge count and queues a toast.

## Reconnection

Socket.io handles reconnection automatically, but room membership is lost on disconnect. On reconnect, the client re-emits \`join_conversation\` for the currently open conversation and re-joins the personal notification room. This is handled in a single \`connect\` event listener that runs on both initial connection and every subsequent reconnect.

## What I'd Do Differently

The current notification system is fire-and-forget — if the client is offline when a notification fires, it's lost. A proper implementation would persist unread notifications to the database and deliver them on the next connection. That's the most obvious gap in the current architecture.`,
};

// ── Resume ────────────────────────────────────────────────

export const mockJobs: Job[] = [];

export const mockEducation: Education[] = [
  {
    id: 1,
    school: "University of Greenwich — Computing",
    summary:
      "Pursuing a Bachelor's in Computing focused on software engineering, algorithms, and systems design. Using the theoretical foundation here to better understand the engineering behind games, from data structures powering game logic to the network architecture underlying multiplayer systems. Every module gets applied to something I'm actively building.",
    content: "",
    tags: ["Computing", "Software Engineering", "Algorithms", "Web Development", "Systems Design"],
    startDate: "2023",
    endDate: "Expected Jul 2027",
    order: 1,
    createdAt: "2024-09-01T00:00:00Z",
    updatedAt: "2024-09-01T00:00:00Z",
  },
  {
    id: 2,
    school: "VTC Academy — Game Development",
    summary:
      "Diploma in Game Programming (expected Nov 2026), focused entirely on building games with Unity and C#. Completed multiple projects solo and in teams, spanning 2D side-scrollers, top-down ARPGs, and a first-person multiplayer survival horror game. Built gameplay systems including NavMesh AI, Photon Fusion multiplayer networking, combat mechanics, and full production pipelines taking a game from concept to playable build.",
    content: "",
    tags: ["Unity", "C#", "Game Programming", "AI Systems", "Multiplayer", "Game Design", "2D", "3D"],
    startDate: "2024",
    endDate: "Expected Nov 2026",
    order: 2,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

# Technical Design Document (TDD)
**Project:** Hero Race 2  
**Game Genre:** Top-Down PVP Action Racing  
**Game Mode:** 5v5 Multiplayer or other

---

## Table of Contents
1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Core Systems](#core-systems)
4. [Data Flow and State Management](#data-flow-and-state-management)
5. [Networking and Multiplayer](#networking-and-multiplayer)
6. [Performance Optimization](#performance-optimization)
7. [Testing and Debugging](#testing-and-debugging)
8. [Future Considerations](#future-considerations)

---

## 1. Introduction <a name="introduction"></a>
This TDD provides technical specifications and architecture details for the custom Dota 2 map "Hero Race 2." It focuses on the core systems, data management, and networking challenges involved in building a 5v5 multiplayer racing experience.

**Technical Requirements:**
- **Engine:** Hammer (Source 2)
- **Primary Language:** Typescript, compile to javascript for Panorama UI and compile to lua for game logic
- **UI Framework:** React
- **Network Architecture:** Dedicated servers provided by Dota2
- **Target Performance:** 60 FPS, no stutter.

---

## 2. System Architecture <a name="system-architecture"></a>
### 2.1 Core Components
- **Game Manager:** Controls the main game loop, initializing and terminating matches, managing countdowns, round calculation, and final results.
- **Map Logic:** Controls environmental hazards, and track events, neutral creeps, tree respawn, keeping track of each player’s progress.

### 2.2 Data Persistence
- **Persistent Data Storage:** Handles player data such as KDA, score, win/loss records, win rate, round count, player level, experience, owned skin, customization preferences like camera zoom level, and win/loss records stored server-side depending on availability.

---

## 3. Core Systems <a name="core-systems"></a>

### 3.1 Race Track System
- **Anti-Cheating Measures:** Implement position verification logic to ensure players are following the intended path.

### 3.2 Random Item System
- **Give Bonus Random Item Upon Killing**

---

## 4. Data Flow and State Management <a name="data-flow-and-state-management"></a>
### 4.1 Game State Transitions
- **Match States:** Idle → Countdown → Race In Progress → Race Finished -> Next Round
- **State Machine Implementation:** A finite-state machine (FSM) tracks the game state and handles transitions to avoid state conflicts.
- **Event Broadcasting:** Key events like lap completion or ability usage are broadcasted to clients with minimal delay.

---


### 5 Matchmaking and Lobby System
- **Ranking System:** Player Ranking for 5v5 mode
- **Team Balancing:** Automatic team assignments for 5v5 gameplay base on win rate (Shuffle Button)

---

## 6. Performance Optimization <a name="performance-optimization"></a>
### 6.1 Rendering Optimization
- **Particle Effect Management:** Ensure all particle are precached
- **Sound** Ensure all sounds are precached

### 6.2 Script Optimization
- **Efficient Loops and Event Calls:** Minimize the use of nested loops, and ensure event calls are debounced to prevent excessive computation.
- **Measurement** Measure FPS every months. Find out the problems as soon as possible.

---

## 7. Testing and Debugging <a name="testing-and-debugging"></a>
### 7.1 Unit Testing
- **Ability System Tests:** Validate each ability’s cooldown and effect application with automated tests.

### 7.2 Debugging Tools
- **Debug HUD:** Custom Cheat Code like spawn hero and item. Order NPC hero to spell.
- **Replay Analysis:** Collect Replay for Bug Analysis.

---

## 8. Future Considerations <a name="future-considerations"></a>
- **Advanced AI Opponents:** Implement easy, medium, hard bot. and Implement Machine Learning Bot if possible

---

**End of Document**

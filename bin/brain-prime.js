#!/usr/bin/env node
import { rules, getRoundGenerator } from '../src/games/game-prime.js';
import gameLogic from '../src/index.js';

gameLogic(rules, getRoundGenerator);

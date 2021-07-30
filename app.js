"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Initializer_1 = require("./models/Initializer");
const Lawn_1 = require("./models/Lawn");
let initializer = new Initializer_1.Initializer();
const lawn = new Lawn_1.Lawn(initializer.initializeLawn().X, initializer.initializeLawn().Y, initializer.initalizeMowers());

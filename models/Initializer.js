"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializer = void 0;
const fs_1 = __importDefault(require("fs"));
const Mower_1 = require("./Mower");
const Coordinate_1 = require("./Coordinate");
const cardinalDirection_1 = require("./cardinalDirection");
class Initializer {
    constructor() {
        this.initalizeMowers = () => {
            let rawParams = this.content.split(/\r?\n/);
            let intruct = rawParams.slice(1);
            let mowers = [];
            for (let i = 0; i < intruct.length; i += 2) {
                mowers.push(new Mower_1.Mower(new Coordinate_1.Coordinate(+intruct[i].split(" ")[0], +intruct[i].split(" ")[1]), new cardinalDirection_1.Cardinal(intruct[i].split(" ")[2]), intruct[i + 1].split("")));
            }
            return mowers;
        };
        this.initializeLawn = () => {
            let rawParams = this.content.split(/\r?\n/);
            return new Coordinate_1.Coordinate(+rawParams[0].split(" ")[0], +rawParams[0].split(" ")[1]);
        };
        this.content = fs_1.default.readFileSync("./params.txt").toString();
    }
}
exports.Initializer = Initializer;

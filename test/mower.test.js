"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Mower_1 = require("../models/Mower");
const Coordinate_1 = require("../models/Coordinate");
const cardinalDirection_1 = require("../models/cardinalDirection");
describe('mower', () => {
    it("should move correctly", () => {
        let mower = new Mower_1.Mower(new Coordinate_1.Coordinate(2, 3), new cardinalDirection_1.Cardinal("N"), "LFLF".split(""));
        mower.mow(5, 5);
        chai_1.expect(mower.coordinates.X).to.equal(1);
        chai_1.expect(mower.coordinates.Y).to.equal(2);
        chai_1.expect(mower.orientation.direction).to.equal('S');
        mower.instructions = "RRRFFF".split("");
        mower.mow(5, 5);
        chai_1.expect(mower.coordinates.X).to.equal(4);
        chai_1.expect(mower.coordinates.Y).to.equal(2);
        chai_1.expect(mower.orientation.direction).to.equal('E');
    });
    it("should not move out of Lawn limits", () => {
        let mower = new Mower_1.Mower(new Coordinate_1.Coordinate(6, 6), new cardinalDirection_1.Cardinal("N"), "FFRFF".split(""));
        mower.mow(6, 6);
        chai_1.expect(mower.coordinates.X).to.equal(6);
        chai_1.expect(mower.coordinates.Y).to.equal(6);
        chai_1.expect(mower.orientation.direction).to.equal('E');
    });
});

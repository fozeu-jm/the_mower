"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon = __importStar(require("sinon"));
const fs_1 = __importDefault(require("fs"));
const Initializer_1 = require("../models/Initializer");
const Mower_1 = require("../models/Mower");
const Coordinate_1 = require("../models/Coordinate");
describe('Initializer', function () {
    it("should return mower", () => {
        sinon.stub(fs_1.default, 'readFileSync').callsFake(() => {
            const result = `5 5
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF`;
            return result;
        });
        let initializer = new Initializer_1.Initializer();
        chai_1.expect(initializer.initalizeMowers()[0] instanceof Mower_1.Mower).to.be.true;
        fs_1.default.readFileSync.restore();
    });
    it("should return good values for mower", () => {
        sinon.stub(fs_1.default, 'readFileSync').callsFake(() => {
            const result = `5 5
0 0 N
LFLFLFLFF`;
            return result;
        });
        let initializer = new Initializer_1.Initializer();
        chai_1.expect(initializer.initalizeMowers().length).to.be.equal(1);
        chai_1.expect(initializer.initalizeMowers()[0].coordinates.X).to.be.equal(0);
        chai_1.expect(initializer.initalizeMowers()[0].coordinates.Y).to.be.equal(0);
        chai_1.expect(initializer.initalizeMowers()[0].orientation.direction).to.be.equal('N');
        chai_1.expect(JSON.stringify(initializer.initalizeMowers()[0].instructions) == JSON.stringify("LFLFLFLFF".split(""))).to.be.true;
        fs_1.default.readFileSync.restore();
    });
    it("should return good values for Lawn size", () => {
        sinon.stub(fs_1.default, 'readFileSync').callsFake(() => {
            const result = `7 9
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF`;
            return result;
        });
        let initializer = new Initializer_1.Initializer();
        chai_1.expect(initializer.initializeLawn() instanceof Coordinate_1.Coordinate).to.be.true;
        chai_1.expect(initializer.initializeLawn().X).to.be.equal(7);
        chai_1.expect(initializer.initializeLawn().Y).to.be.equal(9);
        fs_1.default.readFileSync.restore();
    });
});

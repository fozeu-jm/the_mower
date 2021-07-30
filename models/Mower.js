"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mower = void 0;
const cardinalDirection_1 = require("./cardinalDirection");
const Coordinate_1 = require("./Coordinate");
class Mower {
    constructor(coordinate, orientation, instructions) {
        this.mow = (limX, limY) => {
            this._instructions.forEach((instruction) => {
                switch (instruction) {
                    case 'R':
                        this.rotateRight();
                        break;
                    case 'L':
                        this.rotateLeft();
                        break;
                    case 'F':
                        this.moveForward(limX, limY);
                        break;
                }
            });
        };
        this.toString = () => {
            return this._coordinates.X.toString() + " " + this._coordinates.Y.toString() + " " + this._orientation.direction;
        };
        this._coordinates = coordinate !== null && coordinate !== void 0 ? coordinate : new Coordinate_1.Coordinate(0, 0);
        this._orientation = orientation !== null && orientation !== void 0 ? orientation : new cardinalDirection_1.Cardinal("N");
        this._instructions = instructions !== null && instructions !== void 0 ? instructions : [];
    }
    get coordinates() {
        return this._coordinates;
    }
    get orientation() {
        return this._orientation;
    }
    set coordinates(coordinate) {
        this._coordinates = coordinate;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    get instructions() {
        return this._instructions;
    }
    set instructions(instructions) {
        this._instructions = instructions;
    }
    rotateRight() {
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._orientation.direction = 'E';
                break;
            case 'E':
                this._orientation.direction = 'S';
                break;
            case 'S':
                this._orientation.direction = 'W';
                break;
            case 'W':
                this._orientation.direction = 'N';
                break;
        }
    }
    rotateLeft() {
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._orientation.direction = 'W';
                break;
            case 'E':
                this._orientation.direction = 'N';
                break;
            case 'S':
                this._orientation.direction = 'E';
                break;
            case 'W':
                this._orientation.direction = 'S';
                break;
        }
    }
    moveForward(limX, limY) {
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._coordinates.plusY(limY);
                break;
            case 'E':
                this._coordinates.plusX(limX);
                break;
            case 'S':
                this._coordinates.minusY();
                break;
            case 'W':
                this._coordinates.minusX();
                break;
        }
    }
}
exports.Mower = Mower;

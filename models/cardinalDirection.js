"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cardinal = void 0;
class Cardinal {
    constructor(direction) {
        this._direction = direction;
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }
}
exports.Cardinal = Cardinal;

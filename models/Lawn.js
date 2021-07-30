"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lawn = void 0;
class Lawn {
    constructor(length, width, mowers) {
        this.startMowers = () => {
            this._mowers.forEach((mower) => {
                mower.mow(this._length, this._width);
                console.log(mower.toString());
            });
        };
        this._length = length;
        this._width = width;
        this._mowers = mowers;
        this.startMowers();
    }
}
exports.Lawn = Lawn;

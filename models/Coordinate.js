"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
class Coordinate {
    constructor(x, y) {
        this._X = x;
        this._Y = y;
    }
    get X() {
        return this._X;
    }
    get Y() {
        return this._Y;
    }
    set X(x) {
        this._X = x;
    }
    set Y(y) {
        this._Y = y;
    }
    plusX(limX, step = 1) {
        (this._X + step) <= limX ? this._X += step : '';
    }
    minusX(step = 1) {
        (this._X - step) >= 0 ? this._X -= step : '';
    }
    plusY(limY, step = 1) {
        (this._Y + step) <= limY ? this._Y += step : '';
    }
    minusY(step = 1) {
        (this._Y - step) >= 0 ? this._Y -= step : '';
    }
}
exports.Coordinate = Coordinate;

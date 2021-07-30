import {Ipoint} from "../Interfaces/Ipoint";

export class Coordinate implements Ipoint{
    private _X : number;
    private _Y : number;

    constructor( x:number, y:number) {
        this._X = x;
        this._Y = y;
    }

    public get X():number{
        return this._X;
    }

    public get Y():number{
        return this._Y;
    }

    public set X(x:number){
        this._X = x;
    }

    public set Y(y:number){
        this._Y = y;
    }

    public plusX(limX:number, step:number = 1){
        (this._X + step) <= limX ?  this._X += step : '';
    }

    public minusX(step:number = 1){
        (this._X - step) >= 0 ?  this._X -= step : '';
    }

    public plusY(limY:number, step:number = 1){
        (this._Y + step) <= limY ?  this._Y += step : '';
    }

    public minusY(step:number = 1){
        (this._Y - step) >= 0 ?  this._Y -= step : '';
    }
}
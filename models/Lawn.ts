import {Mower} from "./Mower";
import {Imow} from "../Interfaces/Imow";

export class Lawn{
    // l,w => x,y respectively
    private _length : number;
    private _width : number;
    private _mowers : Imow[];

    constructor(length:number, width:number, mowers: Imow[]) {
        this._length = length;
        this._width = width;
        this._mowers = mowers;
        this.startMowers();
    }

    private startMowers = () => {
        this._mowers.forEach((mower:Imow) => {
            mower.mow(this._length, this._width);
            console.log(mower.toString());
        });
    }
}
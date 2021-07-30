import {IOrientation} from "../Interfaces/IOrientation";

export class Cardinal implements IOrientation{
    private _direction: string;
    constructor(direction : string) {
        this._direction = direction;
    }

    public get direction():string{
        return this._direction;
    }

    public set direction(direction:string){
        this._direction = direction;
    }
}
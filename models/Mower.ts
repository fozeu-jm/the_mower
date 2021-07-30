import {Cardinal} from "./cardinalDirection";
import {Coordinate} from "./Coordinate";
import {Imow} from "../Interfaces/Imow";
import {Ipoint} from "../Interfaces/Ipoint";
import {IOrientation} from "../Interfaces/IOrientation";

export class Mower implements Imow {
    private _coordinates : Ipoint;
    private _orientation : IOrientation;
    private _instructions : string[];

    constructor(coordinate? : Ipoint , orientation? : IOrientation, instructions? : string[]) {
        this._coordinates = coordinate ?? new Coordinate(0, 0);
        this._orientation = orientation ?? new Cardinal("N");
        this._instructions =  instructions ?? [];
    }
    public get coordinates():Ipoint{
        return this._coordinates;
    }
    public get orientation():IOrientation{
        return this._orientation;
    }
    public set coordinates(coordinate:Ipoint){
        this._coordinates = coordinate;
    }
    public set orientation(orientation:IOrientation){
        this._orientation = orientation;
    }
    public get instructions(): string[]{
        return this._instructions;
    }
    public set instructions(instructions: string[]){
        this._instructions = instructions;
    }
    public mow = (limX:number, limY:number) => {
        this._instructions.forEach((instruction) =>{
            switch (instruction) {
                case 'R':
                    this.rotateRight();
                    break;
                case 'L':
                    this.rotateLeft();
                    break;
                case  'F':
                    this.moveForward(limX, limY);
                    break;
            }
        });
    }
    private rotateRight(){
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._orientation.direction = 'E';
                break;
            case 'E' :
                this._orientation.direction = 'S';
                break;
            case 'S' :
                this._orientation.direction = 'W';
                break;
            case 'W' :
                this._orientation.direction = 'N';
                break;
        }
    }
    private rotateLeft(){
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._orientation.direction = 'W';
                break;
            case 'E' :
                this._orientation.direction = 'N';
                break;
            case 'S' :
                this._orientation.direction = 'E';
                break;
            case 'W' :
                this._orientation.direction = 'S';
                break;
        }
    }
    private moveForward(limX:number, limY:number){
        switch (this._orientation.direction.toUpperCase()) {
            case 'N':
                this._coordinates.plusY(limY);
                break;
            case 'E' :
                this._coordinates.plusX(limX);
                break;
            case 'S' :
                this._coordinates.minusY();
                break;
            case 'W' :
                this._coordinates.minusX();
                break;
        }
    }
    public toString = () :string => {
        return this._coordinates.X.toString()+ " " + this._coordinates.Y.toString() + " " + this._orientation.direction;
    }
}
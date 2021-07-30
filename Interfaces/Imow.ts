import {Ipoint} from "./Ipoint";
import {IOrientation} from "./IOrientation";

export interface Imow {
    coordinates : Ipoint;
    orientation : IOrientation;
    instructions : string[];
    mow(limX:number, limY:number):void ;
}
export interface Ipoint {
    X : number;
    Y : number;

    plusX(limX:number, step?:number):void;
    plusY(limY:number, step?:number):void;
    minusX(step?:number):void;
    minusY(step?:number):void;
}
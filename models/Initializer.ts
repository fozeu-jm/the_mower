import fs from "fs";
import {Mower} from "./Mower";
import {Coordinate} from "./Coordinate";
import {Cardinal} from "./cardinalDirection";
import {Imow} from "../Interfaces/Imow";
import {Ipoint} from "../Interfaces/Ipoint";

export class Initializer{
    private content : string;

    constructor() {
       this.content = fs.readFileSync("./params.txt").toString();
    }

    public initalizeMowers = () : Imow[] => {
        let rawParams = this.content.split(/\r?\n/);
        let intruct = rawParams.slice(1);
        let mowers : Imow[] = [];
        for(let i = 0; i < intruct.length; i+=2){
            mowers.push(
                new Mower(
                    new Coordinate(+intruct[i].split(" ")[0], +intruct[i].split(" ")[1]),
                    new Cardinal(intruct[i].split(" ")[2]),
                    intruct[i+1].split("")
                ));
        }
        return mowers;
    }

    public  initializeLawn = () : Ipoint => {
        let rawParams = this.content.split(/\r?\n/);
        return new Coordinate(+rawParams[0].split(" ")[0], +rawParams[0].split(" ")[1]);
    }
}
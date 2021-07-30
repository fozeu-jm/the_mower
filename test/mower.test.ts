import {expect} from 'chai';
import * as sinon from 'sinon';
import {Mower} from "../models/Mower";
import {Coordinate} from "../models/Coordinate";
import {Cardinal} from "../models/cardinalDirection";

describe('mower', () => {
   it("should move correctly", ()=>{
       let mower : Mower = new Mower(new Coordinate(2, 3), new Cardinal("N"),"LFLF".split(""));
       mower.mow(5,5);
       expect(mower.coordinates.X).to.equal(1);
       expect(mower.coordinates.Y).to.equal(2);
       expect(mower.orientation.direction).to.equal('S');
       mower.instructions = "RRRFFF".split("");
       mower.mow(5, 5);
       expect(mower.coordinates.X).to.equal(4);
       expect(mower.coordinates.Y).to.equal(2);
       expect(mower.orientation.direction).to.equal('E');
   });

    it("should not move out of Lawn limits", ()=>{
        let mower : Mower = new Mower(new Coordinate(6, 6), new Cardinal("N"),"FFRFF".split(""));
        mower.mow(6,6);
        expect(mower.coordinates.X).to.equal(6);
        expect(mower.coordinates.Y).to.equal(6);
        expect(mower.orientation.direction).to.equal('E');
    });
});
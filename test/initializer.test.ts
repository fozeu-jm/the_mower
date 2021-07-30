import {expect} from 'chai';
import * as sinon from 'sinon';
import fs from "fs";
import {Initializer} from "../models/Initializer";
import {Mower} from "../models/Mower";
import {Imow} from "../Interfaces/Imow";
import {Lawn} from "../models/Lawn";
import {Coordinate} from "../models/Coordinate";

describe('Initializer', function (){

    it("should return mower", () =>{
        sinon.stub(fs, 'readFileSync').callsFake(()=>{
            const result = `5 5
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF`
            return result;
        });
        let initializer : Initializer = new Initializer();
        expect(initializer.initalizeMowers()[0] instanceof Mower).to.be.true;
        (fs as any).readFileSync.restore();
    });

    it("should return good values for mower", () =>{
        sinon.stub(fs, 'readFileSync').callsFake(()=>{
            const result = `5 5
0 0 N
LFLFLFLFF`
            return result;
        });
        let initializer : Initializer = new Initializer();
        expect(initializer.initalizeMowers().length).to.be.equal(1);
        expect(initializer.initalizeMowers()[0].coordinates.X).to.be.equal(0);
        expect(initializer.initalizeMowers()[0].coordinates.Y).to.be.equal(0);
        expect(initializer.initalizeMowers()[0].orientation.direction).to.be.equal('N');
        expect(JSON.stringify(initializer.initalizeMowers()[0].instructions) == JSON.stringify("LFLFLFLFF".split(""))).to.be.true;
        (fs as any).readFileSync.restore();
    });

    it("should return good values for Lawn size", () =>{
        sinon.stub(fs, 'readFileSync').callsFake(()=>{
            const result = `7 9
1 2 N
LFLFLFLFF
3 3 E
FFRFFRFRRF`
            return result;
        });
        let initializer : Initializer = new Initializer();
        expect(initializer.initializeLawn() instanceof Coordinate).to.be.true;
        expect(initializer.initializeLawn().X).to.be.equal(7);
        expect(initializer.initializeLawn().Y).to.be.equal(9);
        (fs as any).readFileSync.restore();
    });
});
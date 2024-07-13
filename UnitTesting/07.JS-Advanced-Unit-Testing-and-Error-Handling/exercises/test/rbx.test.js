import { assert } from "chai";
import {rgbToHexColor} from "../rbx.js";

describe('Test with valid parameters', ()=>{
    describe('General test', ()=>{
        it('Should return #100C0D for (16, 12, 13)',()=>{
            assert.equal(rgbToHexColor(16,12,13), '#100C0D')
        });
    });

    describe("Test with lowest values", ()=>{
        it('Should return "#000000" for (0, 0, 0)', ()=>{
            assert.equal(rgbToHexColor(0,0,0), "#000000");
        });
    });

    describe('Test with highest values', ()=>{
       it('Should return "#FFFFFF" for (255, 255, 255)', ()=>{
        assert.equal(rgbToHexColor(255,255,255), "#FFFFFF")
       });
    });
});


describe('Test with invalid data', ()=>{
    describe('Test with non integer', ()=>{
        it('Should return undefined', ()=>{
            assert.equal(rgbToHexColor(3.15,16,12), undefined, 'first parameter is not integer');
            assert.equal(rgbToHexColor(3,16.2,12), undefined, 'second parameter is not integer');
            assert.equal(rgbToHexColor(3,16,12.5), undefined, 'third parameter is not integer');
        });
    });

    describe('Test with non number value', ()=>{
        it('Should return undefined', ()=>{
            assert.equal(rgbToHexColor('3',16,12), undefined, 'first parameter is not number');
            assert.equal(rgbToHexColor(3,"16.2",12), undefined, 'second parameter is not number');
            assert.equal(rgbToHexColor(3,16,"12.5"), undefined, 'third parameter is not number');
        });
    });

    describe('Test with number out of range', ()=>{
        it('Should return undefined', ()=>{
            assert.equal(rgbToHexColor(280,16,12), undefined, 'first parameter is not in a range');
            assert.equal(rgbToHexColor(3,280,12), undefined, 'second parameter is not in a range');
            assert.equal(rgbToHexColor(3,16,280), undefined, 'third parameter is not in a range');
        });
    });

    describe('Test with no input', ()=>{
        it('Should return undefined', ()=>{
            assert.equal(rgbToHexColor(), undefined)
        })
    })
})

describe("Pad values with zeros", function () {
    it("should pad values with zeros", function () {
        assert.equal(rgbToHexColor(12, 13, 14), "#0C0D0E");
    })
});
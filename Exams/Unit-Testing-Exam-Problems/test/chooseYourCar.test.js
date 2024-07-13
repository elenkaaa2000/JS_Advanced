import { expect } from "chai";
import {chooseYourCar} from '../chooseYourCar.js';

describe ('Test', ()=>{
    it('Should return an object', ()=>{
        expect(typeof chooseYourCar).to.equal('object')
    });

    it('Test choosingType (type, color, year)',()=>{
        expect(()=>chooseYourCar.choosingType('Sedan','red',1899)).to.throw("Invalid Year!");
        expect(()=>chooseYourCar.choosingType('Sedan','red',2023)).to.throw("Invalid Year!");

        expect(()=>chooseYourCar.choosingType('Renault','red',2012)).to.throw("This type of car is not what you are looking for.");

        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal("This red Sedan meets the requirements, that you have.");
        expect(chooseYourCar.choosingType('Sedan', 'red', 2012)).to.equal("This red Sedan meets the requirements, that you have.");

        expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal("This Sedan is too old for you, especially with that red color.");

    });

    it('Test brandName (brands, brandIndex)',()=>{
        expect(()=>chooseYourCar.brandName('a',null)).to.throw('Invalid Information!');
        expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],4)).to.throw('Invalid Information!');

        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1)).to.equal("BMW, Peugeot");
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2)).to.equal("BMW, Toyota");
    });

    it('Test CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)',()=>{
        expect(()=>chooseYourCar.carFuelConsumption('a',-4)).throw('Invalid Information!');
        expect(()=>chooseYourCar.carFuelConsumption(-5,{name:'Ivan'})).throw('Invalid Information!');

        expect(chooseYourCar.carFuelConsumption(10,8)).to.equal('The car burns too much fuel - 80.00 liters!');
        expect(chooseYourCar.carFuelConsumption(100,5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        expect(chooseYourCar.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');


    })
})
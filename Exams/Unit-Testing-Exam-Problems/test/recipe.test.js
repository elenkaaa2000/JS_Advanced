import { expect } from "chai";
import { recipeSelection } from "../recipeSelection.js";

describe('Test recipeSelection', () => {
    it('Should be an object', () => {
        expect(typeof recipeSelection).to.equal('object')
    });

    it('Test isTypeSuitable(type, dietaryRestriction)', () => {
        expect(() => recipeSelection.isTypeSuitable(5, 'abc')).to.throw("Invalid input");
        expect(() => recipeSelection.isTypeSuitable('abc', [1, 2, 3])).to.throw("Invalid input");
        expect(() => recipeSelection.isTypeSuitable(5, false)).to.throw("Invalid input");

        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        expect(recipeSelection.isTypeSuitable('Meat', 'Common')).to.equal("This recipe is suitable for your dietary restriction"
        )

    });

    it('Test isItAffordable (price, budget)', () => {
        expect(() => recipeSelection.isItAffordable('a', 5)).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable(5, '5')).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable('a', true)).to.throw('Invalid input');

        expect(recipeSelection.isItAffordable(5, 0)).to.equal("You don't have enough budget to afford this recipe");
        expect(recipeSelection.isItAffordable(3, 2)).to.equal("You don't have enough budget to afford this recipe");

        expect(recipeSelection.isItAffordable(10, 50)).to.equal("Recipe ingredients bought. You have 40$ left");
        expect(recipeSelection.isItAffordable(10, 10)).to.equal("Recipe ingredients bought. You have 0$ left");


    });

    it('Test getRecipesByCategory(recipes, category)', () => {
        expect(() => recipeSelection.getRecipesByCategory('a', 5)).to.throw('Invalid input');
        expect(() => recipeSelection.getRecipesByCategory(['a', 'a'], 5)).to.throw('Invalid input')
        expect(() => recipeSelection.getRecipesByCategory(5, 'ivan')).to.throw('Invalid input');

        const recipes = [
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Classic Caesar Salad", category: "Salads" },
            { title: "Chocolate Chip Cookies", category: "Desserts" }
          ];
    
          expect(recipeSelection.getRecipesByCategory(recipes, "Italian")).to.deep.equal(["Pasta Carbonara"]);
          expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry"]);
          expect(recipeSelection.getRecipesByCategory(recipes, "Salads")).to.deep.equal(["Classic Caesar Salad"]);
    })
})
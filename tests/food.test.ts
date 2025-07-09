import { Food } from "../src/resources/food";

describe("Food tests", () => {
    it("given a new Food object then name should be 'Food'", () => {
        const food = new Food();
        expect(food.name).toBe("Food");
    });
});
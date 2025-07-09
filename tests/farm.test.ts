import { Farm } from "../src/builds/producers/farm";
import { Food } from "../src/resources/food";
describe("Farm tests", () => {
    it("given a new Farm object then name should be 'Farm'", () => {
        const farm = new Farm(new Food());
        expect(farm.name).toBe("Farm");
    });
});
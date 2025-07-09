import { Gold } from "../src/resources/gold";

describe("Gold tests", () => {
    it("given a new Gold object then name should be 'Gold'", () => {
        const gold = new Gold();
        expect(gold.name).toBe("Gold");
    });
});
import { Stone } from "../src/resources/stone";

describe("Stone tests", () => {
    it("given a new Stone object then name should be 'Stone'", () => {
        const stone = new Stone();
        expect(stone.name).toBe("Stone");
    });
});
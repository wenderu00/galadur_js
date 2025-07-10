import { Quarry } from "../src/builds/producers/quarry";
import { Stone } from "../src/resources/stone";

describe("quarry Tests", () => {
    it("given a new quarry object should name tobe quarry", () => {
        const quarry = new Quarry(new Stone());
        expect(quarry.name).toBe("Quarry");
    });
});
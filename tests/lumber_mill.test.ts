import { LumberMill } from "../src/builds/producers/lumber_mill"
import { Wood } from "../src/resources/wood";

describe("Lumber Mill Tests", () => {
    it("given a new lumber mill object should name tobe lumber mill", () => {
        const lumberMill = new LumberMill(new Wood());
        expect(lumberMill.name).toBe("Lumber Mill");
    });
});
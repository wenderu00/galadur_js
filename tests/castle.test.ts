import { Castle } from "../src/builds/tax_collectors/castle";
import { Gold } from "../src/resources/gold";

describe("castle Tests", () => {
    it("given a new castle object should name tobe castle", () => {
        const castle = new Castle(new Gold());
        expect(castle.name).toBe("Castle");
    });
});
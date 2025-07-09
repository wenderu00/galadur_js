import { Resource } from "../src/resource";

describe("Resource tests", ()=>{
    it("given a new Resource object quantity has to be 0", ()=>{
        const resource = new Resource();
        expect(resource.quantity).toBe(0);
    });
    it("given a resource object when adding quantity then quantity has to be increased", ()=>{
        const resource = new Resource();
        resource.addQuantity(5);
        expect(resource.quantity).toBe(5);
    });
    it("given a resource object when subtracting quantity then quantity has to be decreased", ()=>{
        const resource = new Resource();
        resource.addQuantity(10);
        resource.subtractQuantity(3);
        expect(resource.quantity).toBe(7);
    });
})
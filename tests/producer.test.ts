import { Producer } from '../src/producer';
import { Resource } from '../src/resource';

describe('Producer tests', () => {
    it("given a new Producer object after call produce resource keep equal", () => {
        const resource = new Resource();
        const producer = new Producer(resource);
        producer.produce();
        expect(resource.quantity).toBe(0);
    });
    it("given a new Producer object when improving production then production quantity has to be increased", () => {
        const resource = new Resource();
        const producer = new Producer(resource);
        producer.improveProduction(5);
        producer.produce();
        expect(resource.quantity).toBe(5);
    });
})
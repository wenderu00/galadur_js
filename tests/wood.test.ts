import { Wood } from '../src/resources/wood';

describe('Wood tests', () => {
    it('given a new Wood object then name should be "Wood"', () => {
        const wood = new Wood();
        expect(wood.name).toBe('Wood');
    });
});
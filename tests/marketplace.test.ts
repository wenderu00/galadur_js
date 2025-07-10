import { Gold } from "../src/resources/gold";
import { Stone } from "../src/resources/stone";
import { Wood } from "../src/resources/wood";
import { Food } from "../src/resources/food";
import { Marketplace } from "../src/builds/traders/marketplace";

describe("Marketplace Tests", () => {
    it("should create a marketplace with the correct initial values", () => {
        const marketplace = new Marketplace(new Gold(), new Stone(), new Wood(), new Food());
        expect(marketplace.name).toBe("Marketplace");
        expect(marketplace.stoneBuyPrice).toBe(2);
        expect(marketplace.woodBuyPrice).toBe(3);
        expect(marketplace.foodBuyPrice).toBe(4);
        expect(marketplace.stoneSellPrice).toBe(2);
        expect(marketplace.woodSellPrice).toBe(3);
        expect(marketplace.foodSellPrice).toBe(4);
    });
    it("should buy stone and deduct gold correctly", () => {
        let gold = new Gold();
        gold.addQuantity(10);
        let stone = new Stone();
        const marketplace = new Marketplace(gold, stone, new Wood(), new Food());
        const initialGold = gold.quantity;
        marketplace.buyStone(5);
        expect(gold.quantity).toBe(initialGold - 10); // 5 * 2 = 10
        expect(stone.quantity).toBe(5); // Assuming initial stone quantity is 0
    });
});
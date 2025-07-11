import { Build } from "./build";
import { Resource } from "./resource";

export class Trader extends Build {
    constructor() {
        super();
    }
    protected trade(
        resourceToBuy: Resource,
        resourceToSell: Resource,
        quantityToBuy: number,
        quantityToSell: number
    ){
        if (resourceToSell.quantity < quantityToSell) {
            throw new Error("no resource for exchange");
        }
        resourceToBuy.addQuantity(quantityToBuy);
        resourceToSell.subtractQuantity(quantityToSell);
    }
}
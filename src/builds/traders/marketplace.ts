import { Food } from "../../resources/food";
import { Gold } from "../../resources/gold";
import { Stone } from "../../resources/stone";
import { Wood } from "../../resources/wood";
import { Trader } from "../../trader";

export class Marketplace extends Trader {
    private _name: string;
    private _gold: Gold;
    private _stone: Stone;
    private _wood: Wood;
    private _food: Food;
    private _stoneBuyPrice: number;
    private _woodBuyPrice: number;
    private _foodBuyPrice: number;
    private _stoneSellPrice: number;
    private _woodSellPrice: number;
    private _foodSellPrice: number;
    constructor(gold: Gold, stone: Stone, wood: Wood, food: Food) {
        super();
        this._name = "Marketplace";
        this._gold = gold;
        this._stone = stone;
        this._wood = wood;
        this._food = food;
        this._stoneBuyPrice = 2;
        this._woodBuyPrice = 3;
        this._foodBuyPrice = 4;
        this._stoneSellPrice = 2;
        this._woodSellPrice = 3;
        this._foodSellPrice = 4;
    }

    get name(): string {
        return this._name;
    }

    get stoneBuyPrice(): number {
        return this._stoneBuyPrice;
    }
    get woodBuyPrice(): number {
        return this._woodBuyPrice;
    }
    get foodBuyPrice(): number {
        return this._foodBuyPrice;
    }
    get stoneSellPrice(): number {
        return this._stoneSellPrice;
    }
    get woodSellPrice(): number {
        return this._woodSellPrice;
    }
    get foodSellPrice(): number {
        return this._foodSellPrice;
    }
    public buyStone(quantity: number): void {
        const totalCost = quantity * this._stoneBuyPrice;
        this.trade(this._stone, this._gold, quantity, totalCost);
    }
}
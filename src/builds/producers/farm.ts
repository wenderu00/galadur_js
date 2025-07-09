import { Producer } from "../../producer";
import { Food } from "../../resources/food";

export class Farm extends Producer {
    private _name: string;
    constructor(food: Food){
        super(food);
        this._name = "Farm";
    }

    get name(): string {
        return this._name;
    }
}
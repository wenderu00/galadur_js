import { Producer } from "../../producer";
import { Stone } from "../../resources/stone";

export class Quarry extends Producer {
    private _name: string
    constructor(stone: Stone){
        super(stone);
        this._name = "Quarry";
    }

    get name(): string {
        return this._name;
    }
}
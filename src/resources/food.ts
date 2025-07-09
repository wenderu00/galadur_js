import { Resource } from "../resource";

export class Food extends Resource{
    private _name: string;

    constructor() {
        super();
        this._name = "Food";
    }

    get name(): string {
        return this._name;
    }
}
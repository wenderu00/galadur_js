import { Resource } from "../resource";

export class Stone extends Resource{
    private _name: string;

    constructor() {
        super();
        this._name = "Stone";
    }

    get name(): string {
        return this._name;
    }
}
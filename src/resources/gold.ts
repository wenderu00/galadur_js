import { Resource } from "../resource";

export class Gold extends Resource{
    private _name: string;

    constructor() {
        super();
        this._name = "Gold";
    }

    get name(): string {
        return this._name;
    }
}
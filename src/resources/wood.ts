import { Resource } from "../resource";

export class Wood extends Resource {
    private _name: string;
    constructor(){
        super();
        this._name = "Wood";
    }
    get name(): string {
        return this._name;
    }
}
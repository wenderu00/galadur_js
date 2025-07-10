import { Producer } from "../../producer";
import { Wood } from "../../resources/wood";

export class LumberMill extends Producer{
    private _name: string;

    constructor(wood: Wood){
        super(wood);
        this._name = "Lumber Mill"
    }

    get name(){
        return this._name;
    }
}
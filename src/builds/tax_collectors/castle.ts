import { Gold } from "../../resources/gold";
import { TaxCollector } from "../../tax_collector";

export class Castle extends TaxCollector{
    private _name: string;

    constructor(gold: Gold) {
        super(gold);
        this._name = "Castle";
    }

    get name(): string {
        return this._name;
    }
}
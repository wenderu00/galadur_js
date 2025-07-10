import { Build } from "./build";
import { Resource } from "./resource";

export class TaxCollector extends Build {
    private _taxValue: number;
    private _maxTaxValue: number;
    private _resource: Resource;
    constructor(resource: Resource) {
        super();
        this._taxValue = 0;
        this._maxTaxValue = 4;
        this._resource = resource;
    }
    set taxValue(value: number) {
        if (value < 0) {
            throw new Error("Tax value cannot be negative");
        }
        if (value > this._maxTaxValue) {
            throw new Error(`Tax value cannot exceed ${this._maxTaxValue}`);
        }
        this._taxValue = value;
    }

    get taxValue(): number {
        return this._taxValue;
    }

    get maxTaxValue(): number {
        return this._maxTaxValue;
    }

    collectTax(): void {
        this._resource.addQuantity(this._taxValue);
    }
    
}
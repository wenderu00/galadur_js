import { Build } from "./build";
import { Resource } from "./resource";

export class Producer extends Build {
    private _productionQuantity: number;
    private _resource: Resource
    constructor(resource: Resource){
        super();
        this._productionQuantity = 0;
        this._resource = resource;
    }

    improveProduction(quantity: number): void {
        this._productionQuantity += quantity;
    }

    produce(){
        this._resource.addQuantity(this._productionQuantity);
    }
}
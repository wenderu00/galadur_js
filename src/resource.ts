export class Resource{
    private _quantity: number;
    constructor(){ 
        this._quantity = 0;
    }

    get quantity(): number{
        return this._quantity;
    }

    public addQuantity(quantity: number): void{
        this._quantity += quantity;
    }

    public subtractQuantity(quantity: number): void{
        this._quantity -= quantity;
    }
}
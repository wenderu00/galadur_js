export class Build {
    private _level: number;
    private _upgrading: boolean;
    private _daysToUpgrade: number;
    private _nextUpgrade: number;
    constructor(){
        this._level = 0;
        this._upgrading = false;
        this._daysToUpgrade = 0;
        this._nextUpgrade = 2;
    }

    private executeUpgrade(): void{
        this._level++;
        this._upgrading = false;
        this._daysToUpgrade = this._nextUpgrade;
        this._nextUpgrade += 2;
    }
    public upgrade(): void{
        this._upgrading = true;
    }

    public progressUpgrade(): void{
        if(this._upgrading && this._daysToUpgrade === 0){
            this.executeUpgrade();
        } else if(this._upgrading){
            this._daysToUpgrade--;
        }
    }

    get level(): number{
        return this._level;
    }
    get upgrading(): boolean{
        return this._upgrading;
    }
    get daysToUpgrade(): number{
        return this._daysToUpgrade;
    }
}
import IWeapons from "../interface/Weapons";

/**
 * 
 * @class
 * @classdesc 
 * @author Mirco Spagnolo
 */
class ActionMerchant{
    _id: number;
    _name: string;
    _money: number;
    _inventaire: Array<IWeapons>;

    constructor(name: string, money: number, inventaire: Array<IWeapons>){
        this._name = name;
        this._money = money;
        this._inventaire = inventaire;
    }

    getId(): number {
        return this._id
    }
    
    getName(): string {
        return this._name;
    }

    setName(name: string): void{
        this._name = name;
    }

    getMoney(): number {
        return this._money;
    }

    setMoney(money: number): void{
        this._money = money;
    }
}

export default ActionMerchant;
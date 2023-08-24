import IWeapons from "../interface/Weapons";


/**
 * 
 * @class
 * @classdesc 
 * @author Mirco Spagnolo
 */
class ActionFighters {
    _id: number;
    _name: string;
    _hp: number;
    _atk: number;
    _money: number;
    _inventaire?: Array<IWeapons>;
    

    constructor(name: string, hp: number, atk: number, money: number){
        this._name = name;
        this._hp = hp;
        this._atk = atk;
        this._money = money;
    }

    getId(){
        return this._id
    }
    
    getName(){
        return this._name;
    }

    setName(name: string){
        this._name = name;
    }

    getHp(){
        return this._hp;
    }
    
    setHp(hp: number){
        this._hp = hp;
    }

    getAtk(){
        return this._atk;
    }
    setAtk(atk: number){
        this._atk = atk;
    }

    getMoney(){
        return this._money;
    }

    setMoney(money: number){
        this._money = money;
    }

    getInventaire(){
        return this._inventaire;
    }

    // setInventaire(weapon: IWeapons){
    //     this._inventaire?.push(weapon);
    // }

}

export default ActionFighters;
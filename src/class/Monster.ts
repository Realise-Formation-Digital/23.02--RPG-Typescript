import ActionFighters from "./ActionFighters";

/**
 * 
 * @class
 * @classdesc 
 * @author Mirco Spagnolo
 */
class Monster extends ActionFighters {
    constructor(name:string ,hp: number, atk: number, money: number){
        super(name, hp, atk, money);
    }
}

export default Monster;
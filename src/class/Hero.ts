import ActionFighters from "./ActionFighters";

/**
 * 
 * @class
 * @classdesc 
 * @author Mirco Spagnolo
 */
class Hero extends ActionFighters {
    constructor(name: string,hp: number, atk: number, money: number){
        super(name, hp, atk, money);
    }
}

export default Hero;
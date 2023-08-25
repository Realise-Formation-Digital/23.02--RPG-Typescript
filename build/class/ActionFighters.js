/**
 *
 * @class
 * @classdesc
 * @author Mirco Spagnolo
 */
class ActionFighters {
    constructor(name, hp, atk, money) {
        this._name = name;
        this._hp = hp;
        this._atk = atk;
        this._money = money;
    }
    getId() {
        return this._id;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getHp() {
        return this._hp;
    }
    setHp(hp) {
        this._hp = hp;
    }
    getAtk() {
        return this._atk;
    }
    setAtk(atk) {
        this._atk = atk;
    }
    getMoney() {
        return this._money;
    }
    setMoney(money) {
        this._money = money;
    }
    getInventaire() {
        return this._inventaire;
    }
}
export default ActionFighters;
//# sourceMappingURL=ActionFighters.js.map
/**
 *
 * @class
 * @classdesc
 * @author Mirco Spagnolo
 */
class ActionMerchant {
    constructor(name, money, inventaire) {
        this._name = name;
        this._money = money;
        this._inventaire = inventaire;
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
    getMoney() {
        return this._money;
    }
    setMoney(money) {
        this._money = money;
    }
}
export default ActionMerchant;
//# sourceMappingURL=ActionMerchant.js.map
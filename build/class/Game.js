class Game {
    constructor(hero, monsters, merchants, weapons) {
        this._hero = hero;
        this._monsters = monsters;
        this._merchants = merchants;
        this._weapons = weapons;
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getHero() {
        return this._hero;
    }
    setHero(hero) {
        this._hero = hero;
    }
    getMonsters() {
        return this._monsters;
    }
    setMonsters(monsters) {
        this._monsters = monsters;
    }
    getMerchants() {
        return this._merchants;
    }
    setMerchants(merchants) {
        this._merchants = merchants;
    }
    getWeapons() {
        return this._weapons;
    }
    setWeapons(weapons) {
        this._weapons = weapons;
    }
}
export {};
//# sourceMappingURL=Game.js.map
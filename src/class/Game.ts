import IFighter from "../interface/Fighter";
import IMerchant from "../interface/Merchant";
import IWeapons from "../interface/Weapons";
import Hero from "./Hero";

class Game {
    _id: number;
    _hero: IFighter;
    _monsters: Array<IFighter>;
    _merchants: Array<IMerchant>;
    _weapons: Array<IWeapons>;

    constructor(hero: IFighter, monsters: Array<IFighter>, merchants: Array<IMerchant>, weapons: Array<IWeapons>) {
        this._hero = hero;
        this._monsters = monsters;
        this._merchants = merchants;
        this._weapons = weapons;
    }

    getId(){
        return this._id;
    }

    setId(id: number){
        this._id = id;
    }

    getHero(){
        return this._hero;
    }

    setHero(hero: IFighter){
        this._hero = hero;
    }

    getMonsters(){
        return this._monsters;
    }
    
    setMonsters(monsters: IFighter[]){
        this._monsters = monsters;
    }
    getMerchants(){
        return this._merchants;
    }

    setMerchants(merchants: Array<IMerchant>){
        this._merchants = merchants;
    }

    getWeapons(){
        return this._weapons;
    }

    setWeapons(weapons: Array<IWeapons>){
        this._weapons = weapons;
    }




}
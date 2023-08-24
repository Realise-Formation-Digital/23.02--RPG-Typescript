import IWeapons from "./Weapons";

interface IFighter {
    id: number;
    name: string;
    hp: number;
    atk: number;
    money: number;
    inventaire?: Array<IWeapons> 
};

export default IFighter
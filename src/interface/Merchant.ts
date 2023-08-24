import IWeapons from "./Weapons";

interface IMerchant{
    id: number;
    name: string;
    money: number;
    inventaire: Array<IWeapons>;
}

export default IMerchant

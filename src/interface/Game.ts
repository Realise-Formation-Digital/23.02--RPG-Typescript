import IFighter from "./Fighter";
import IMerchant from "./Merchant";
import IWeapons from "./Weapons";

interface IGame {
    id: number;
    hero: IFighter;
    monsters: Array<IFighter>;
    merchants: Array<IMerchant>;
    weapons: Array<IWeapons>
}

export default IGame
import { hote } from "../config/configue";
import AxiosService from "../services/axiosService";
class ActionWeapons {
    _id;
    _name;
    _hp;
    _atk;
    _price;
    _type;
    static _url = hote + '/weapons';
    static async getWeapons() {
        try {
            console.log(this._url);
            const response = await AxiosService.getAxiosService(this._url);
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default ActionWeapons;
//# sourceMappingURL=ActionWeapons.js.map
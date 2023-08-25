import axios from "../../node_modules/axios/index";
class AxiosService {
    //requete get axios vers l api
    static async getAxiosService(url, config) {
        try {
            const res = await axios.get(url, config);
            return res;
        }
        catch (error) {
            return error;
        }
    }
    //requete post axios vers l'api
    static async postAxiosService(url, data, config) {
        try {
            console.log('url', url);
            const res = await axios.post(url, data, config);
            let result = res.data;
            return result;
        }
        catch (e) {
            const message = e;
            return message;
        }
    }
    //requete delete axios vers l'api
    static async deleteAxiosService(url, config) {
        try {
            const res = await axios.delete(url, config);
            return res;
        }
        catch (error) {
            const message = error.message;
            return message;
        }
    }
}
export default AxiosService;
//# sourceMappingURL=axiosService.js.map
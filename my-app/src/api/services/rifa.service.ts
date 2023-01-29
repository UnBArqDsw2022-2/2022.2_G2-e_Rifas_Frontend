import axios from "../config/plugin/axios";
import Rifa from "../models/rifa.model";

class RifaService {

    async criarRifa(rifa: Rifa) {
        try {
            const response = await axios.post('/rifa', rifa);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

}

export default RifaService

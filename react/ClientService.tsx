import axios from 'axios';

const Cliente_API_URL = 'https://2rfmtwqnye.execute-api.us-east-1.amazonaws.com/';
const API_URL = Cliente_API_URL + 'clientes';

class ClienteService {


    /**lembrar de liberar o CORS 
     * Access-Control-Allow-Origin  : https://wgfa7--hiringcoders2021.myvtex.com
     * Access-Control-Allow-Headers : *
     * Access-Control-Allow-Methods : PUT
     * Access-Control-Expose-Headers: NONE
     * Access-Control-Max-Age : NONE
     * Access-Control-Allow-Credentials: NOT SET
     * 
    */
    getAllCliente() {
        return axios.get(API_URL);
    }
    deleteCliente(id: number) {
        return axios.delete(API_URL + '/' + id);
    }
    retrieveCliente(id: number) {
        return axios.get(API_URL + '/' + id);
    }
    // updateCliente(id, Cliente) {
    //     return axios.put(`${API_URL}/update/${id}`, Cliente);
    // }
    createCliente(Cliente: any) {
        return axios.post(`${API_URL}`, Cliente);
    }
}

export default new ClienteService();
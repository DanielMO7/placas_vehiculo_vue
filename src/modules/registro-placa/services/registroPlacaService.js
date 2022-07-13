import apiClient from "@/modules/general/services";

export default{
    buscarPlaca(placa){
        return apiClient.post('/datos-placa', placa)
    }
}

import axios from "axios";

export function getAbonnes() {

    let API_URL = "http://localhost:3650/abonnes";

    return axios.get(API_URL, {
        headers: {
            Accept: "Application/json"
        }
    }).then(response => {
        let data = response.data;
        return data;
    }).catch(error => {
        console.log("Error API", error);
    });

}
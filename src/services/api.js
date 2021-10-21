import axios from "axios";

export default axios.create({
    baseURL: "https://tml10.rosatom.ru/api",
    crossdomain: true,
    headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Headers": "x-access-token",
        'Access-Control-Allow-Origin': '*',
    }
});
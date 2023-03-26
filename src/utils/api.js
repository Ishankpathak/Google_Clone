import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key:'AIzaSyCNqUo1BItc2__Frt68OZvoPXyucbPAQ8A',
    cx:'d2cd4632c77e8461e'
}
export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL , {
        params:{...params , ...payload}
    })
    return data;
};


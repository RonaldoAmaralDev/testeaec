import axios from "axios";
import { FetchProduct } from "../Interface";

export async function FetchProductsApi(): Promise<FetchProduct> {
    const {data} = await axios.get<FetchProduct>("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=price&orderBy=ASC");

    //Melhoria: pegar do arquivo products.json
    // import data = require("products.json");
    // a.primaryMain

    return data;

}
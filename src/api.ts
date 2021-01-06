import axios from "axios";

const API_URL = 'https://localhost:44395/api'

export function fetchProducts(){
    return axios (`${API_URL}/products`)
};

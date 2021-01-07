import axios from "axios";

// const API_URL = 'https://localhost:44395/api'
const API_URL = process.env.REACT_APP_API_URL

export function fetchProducts(){
    return axios (`${API_URL}/products`)
};

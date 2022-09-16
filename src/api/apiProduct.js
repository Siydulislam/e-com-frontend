import axios from "axios"
import { API } from "../utils/config"

export const getProducts = (sortBy, order, limit) => {
    return axios.get(`${API}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`);
}

export const getProductDetails = id => {
    return axios.get(`${API}/product/${id}`);
}

export const getCategories = () => {
    return axios.get(`${API}/category`);
}
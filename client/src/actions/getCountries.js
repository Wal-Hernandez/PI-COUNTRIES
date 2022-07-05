import axios from "axios";
import {
    GET_COUNTRIES
} from "../types";

export default function getCountries(name) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/countries${name ? `?name=${name}` : ''}`).then(res => {
            dispatch({
                type: GET_COUNTRIES, payload: res.data || {}
            })
        }, err => {
            dispatch({
                type: GET_COUNTRIES, payload: err.response.data || {}
            })
        });

    }
}
import axios from 'axios'
import { GET_COUNTRY_DETAIL } from "../types"

export default function getCountryDetail(id) {
    return function (dispatch) {
        return axios.get('http://localhost:3001/countries/' + (id || '')).then(
            res => {
               
                dispatch({
                    type: GET_COUNTRY_DETAIL, payload: res.data || {}
                })
            },
            err => {
                dispatch({
                    type: GET_COUNTRY_DETAIL, payload: err.response.data || {}
                })
            }
        )
    }
}
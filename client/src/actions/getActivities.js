import axios from "axios";
import {
    GET_ACTIVITIES
} from "../types";

export default function getActivities() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/activities`).then(res => {
            dispatch({
                type: GET_ACTIVITIES, payload: res.data || {}
            })
        }, err => {
            dispatch({
                type: GET_ACTIVITIES, payload: err.response.data || {}
            })
        });

    }
}
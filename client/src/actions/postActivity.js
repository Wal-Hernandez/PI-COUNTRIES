import { POST_ACTIVITY } from "../types";
import axios from "axios";
export default function postActivity(form) {
  return function (dispatch) {
    return axios.post("http://localhost:3001/activities", form).then(
      (res) => {
        
        dispatch({
          type: POST_ACTIVITY,
          payload: res.data || {},
        });
      },
      (err) => {
        dispatch({
          type: POST_ACTIVITY,
          payload: err.response.data || {},
        });
      }
    );
  };
}

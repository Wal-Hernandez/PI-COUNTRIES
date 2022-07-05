import { SET_PAGE } from "../types";
export default function setPage(number) {
	return { type: SET_PAGE, payload: number};
};

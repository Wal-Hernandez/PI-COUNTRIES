import { SEARCH_COUNTRY } from "../types";
export default function searchCountries(response,name) {
  const search = response.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
    return {
            type: SEARCH_COUNTRY,
            payload: search 
          };
    }

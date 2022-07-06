import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  POST_ACTIVITY,
  SET_LOADING,
  PAGINATE_RESULTS,
  RESET_RESPONSE,
  SEARCH_COUNTRY,
  FILTER_TYPES,
  ORDER_BY_NAME,
  SET_PAGE,
  CLEAN_SEARCH,
  FILTER_REGION,
  GET_ACTIVITIES,
} from "../types";

const initialState = {
  allCountries: [],
  showedCountries: [],
  paginatedResults: [],
  currentPage: 0,
  countryDetail: {},
  form: [],
  loading: false,
  activities: [],
  season: ["Verano", "Otoño", "Invierno", "Primavera"],
  regions: ["Antarctic", "Americas", "Asia", "Africa", "Europe", "Oceania"],
};

function getCountries(state, payload) {
  let newState = {
    ...state,
    allCountries: payload,
    showedCountries: payload,
    loading: false,
  };
  if (payload.msg) {
    newState.paginatedResults = [];
    newState.loading = false;
  }
  return newState;
}
function filterRegion(state, payload) {
  let response = [];
  console.log(payload)
  if (payload === "all") {
    response = state.allCountries;
  } else {
    let id = parseInt(payload);
    for (let element of state.allCountries) {
      if (element.activities.length !== 0) {
        for (let elem of element.activities) {
          if (elem.id === id) {
            response = [...response, element];
          }
        }
      }
    }
  }
  let newState = {
    ...state,
    showedCountries: response,
  };
  return newState;
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return getCountries(state, action.payload);
    case SEARCH_COUNTRY:
      return {
        ...state,
        showedCountries: action.payload,
        loading: false,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
        loading: state.loading && false,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
        form: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PAGINATE_RESULTS:
      return {
        ...state,
        paginatedResults: action.payload,
        currentPage: 0,
        loading: state.loading && false,
      };

    case RESET_RESPONSE:
      return {
        ...state,
        showedCountries: state.allCountries,
      };

    case FILTER_TYPES:
      return filterRegion(state, action.payload);

    case FILTER_REGION:
      const allRegion = state.allCountries;

      const filterRegions =
        action.payload === "all"
          ? allRegion
          : allRegion.filter((country) =>
              country.region.includes(action.payload)
            );
      return {
        ...state,
        showedCountries: filterRegions,
      };
    case ORDER_BY_NAME:
      const orderName =
        action.payload === "all"
          ? state.showedCountries
          : action.payload === "asc"
          ? state.showedCountries.sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
          : state.showedCountries.sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            });
      return {
        ...state,
        showedCountries: orderName,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CLEAN_SEARCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;

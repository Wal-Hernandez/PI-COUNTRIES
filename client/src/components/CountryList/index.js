import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, NavLink } from "react-router-dom";
import style from "./style.module.css";
import pred_img from "../../utils/game_default.png";
import {
  getCountries,
  setLoading,
  searchCountries,
  resetResponse,
} from "../../actions/index.js";
import Loading from "../Loading";
import Card from "../Card";
import ErrorGame from "../ErrorGame";

function CountryList() {
  const {
    paginatedResults,
    loading,
    currentPage,
    showedCountries,
    allCountries,
  } = useSelector((state) => state);

  console.log(showedCountries);

  const dispatch = useDispatch();

  const location = useLocation();

  function parseQuery(location) {
    let { search } = location;
    if (!search) return {};
    let queryObj = new URLSearchParams(search);
    let queryObje = queryObj.get("name");
    return queryObje;
  }
  /* FILTERS */

  /* FILTERS */
  useEffect(() => {
    if (!allCountries.length) {
      if (!loading) dispatch(setLoading());
      dispatch(getCountries(""));
    }
   

    let query = parseQuery(location);
    if (query.length) dispatch(searchCountries(allCountries, query));
  }, [location, allCountries]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {parseQuery(location).search && (
        <h2>Games marching "{parseQuery(location)}":</h2>
      )}

      <div className={style.component}>
        {showedCountries.length ? (
          paginatedResults[currentPage]?.map((result, i) => (
            <Card
              key={result.id}
              id={result.id}
              name={result.name}
              image={result.image || pred_img}
              region={result.region}
              pos={i}
            />
          ))
        ) : (
          <ErrorGame />
        )}
      </div>
    </>
  );
}

export default CountryList;

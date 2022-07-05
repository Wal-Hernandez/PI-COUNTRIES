import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import pred_img from "../../utils/game_default.png";
import { getCountryDetails, setLoading } from "../../actions/index.js";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";

function CountryDetail() {
  const { id } = useParams();
  const { countryDetail, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== countryDetail.id) {
      dispatch(setLoading());
      dispatch(getCountryDetails(id));
    }
  }, [id, dispatch]);
  console.log(countryDetail);
  if (loading) return <Loading />;
  else if (!countryDetail) return <ErrorPage />;
  else
    return (
      <>
        <div className={style.component}>
          <div className={style.item1}>
            <div className={style.titlebox}>
              <h1>{countryDetail.name}</h1>
            </div>
            <div className={style.img}>
              <img src={countryDetail.image || pred_img} alt="country" />
            </div>
          </div>
          <hr></hr>
          <div className={style.item2}>
            region
            <div className={style.data}>
              <div>{countryDetail.continents}</div>
            </div>
          </div>

          <div className={style.item3}>
            capital
            <div>{countryDetail.capital}</div>
          </div>
          <div className={style.item3}>
            subregion
            <div>{countryDetail.subregion}</div>
            <div>{countryDetail.area}</div>
            <div>{countryDetail.population}</div>
            <div>
              {countryDetail.activities?.map((e) => {
                return (
                  <div key={e.id}>
                    {e.name}
                    {e.difficultly}
                    {e.duration}
                    {e.season}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}

export default CountryDetail;

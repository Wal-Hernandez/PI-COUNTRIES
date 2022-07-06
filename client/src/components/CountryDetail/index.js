import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import pred_img from "../../utils/country_default.png";
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
          <div className={style.regionDetail}>
            <div className={style.item}>
              id:
              <div> {countryDetail.id}</div>
            </div>
            <div className={style.item}>
              Region:
              <div className={style.data}>
                <div>{countryDetail.region}</div>
              </div>
            </div>
            <div className={style.item}>
              Capital:
              <div>{countryDetail.capital}</div>
            </div>
            <div className={style.item}>
              subregion:
              <div>{countryDetail.subregion}</div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className={style.regionDetail}>
            <div className={style.item}>area: {countryDetail.area}km²</div>
            <div className={style.item}>
              population: {countryDetail.population}
            </div>
          </div>
          <a href="#turism"> Turism activities </a>
          <div className={style.activities} id="turism"> 
       
            
            {countryDetail.activities?.map((e) => {
              return (
                <div key={e.id} className={style.activity}>
                  <div><h1>{e.name}</h1></div>

                  <div className={style.turismDetail}>
                    <div>
                    <h2>difficultly</h2>
                  <div>{e.difficultly}</div></div>
                  <div><h2>Duration</h2>
                  <div>{e.duration}</div></div>
                  <div><h2>Season</h2>
                  <div>{e.season}</div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default CountryDetail;

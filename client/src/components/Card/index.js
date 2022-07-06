import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { getCountryDetails } from "../../actions/index.js";
export default function Card({ id, name, image, region }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function hadle_country(e) {
    dispatch(getCountryDetails(id));
    navigate(`/countries/${id}`);
  }

  return (
    <>
      <div className={style.component}>
        <div onClick={hadle_country} className={style.item1}>
          <img src={image} alt="imagen" />
        </div>
        <div className={style.item2}>
          <div className={style.title}>
            <h3> {name} </h3>
          </div>
          <div className={style.info}>
            <p>Region: {region}</p>
          </div>
        </div>
      </div>
    </>
  );
}

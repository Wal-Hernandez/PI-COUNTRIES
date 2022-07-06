import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import searchImg from "../../utils/search.png";
import { resetResponse } from "../../actions";

function Search() {
  const { showedCountries } = useSelector((state) => state);

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch()

  function onSearch(e) {
    e.preventDefault();

    if (input) {
      navigate(`/countries?name=${input}`);
    } else {
      dispatch(resetResponse());
      navigate(`/countries`);
    }
  }

  function changeHandle(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    setInput("");
  }, [showedCountries]);

  return (
    <>
      <fieldset>
        <div className={style.wrap}>
          <form className={style.search} onSubmit={(e) => onSearch(e)}>
            <input
              type="search"
              placeholder="Search countries..."
              value={input}
              className={style.searchTerm}
              minLength="1"
              maxLength="256"
              size="32"
              onChange={changeHandle}
            ></input>
            <button onClick={(e) => onSearch(e)} className={style.searchButton}>
              <img src={searchImg} alt="search" />
            </button>
          </form>
        </div>
      </fieldset>
    </>
  );
}

export default Search;

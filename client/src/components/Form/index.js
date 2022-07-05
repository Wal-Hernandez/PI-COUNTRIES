import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity, setLoading } from "../../actions/index.js";
import NavBar from "../NavBar";

function Form() {
  const [errorMsg, setErrorMsg] = useState("Please fill the required fields.");
  const [input, setInput] = useState({
    name: "",
    difficultly: 5,
    duration: "",
    countries: [],
    season: "Verano",
  });
  console.log(input);
  const {allCountries, season } = useSelector(
    (store) => store
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
 /*  const regexNotEmpty = /(?!^$)/; */

  console.log(allCountries.length);
  function changeHandle(event) {
    let { name, value } = event.target;

    if (name === "countries") {
      console.log(1);
      if (value !== 0 && !input[name].includes(value)) {
        console.log(2);

        setInput((prevInput) => ({
          ...prevInput,
          [name]: [...prevInput[name], value],
        }));
      }
    } else {
      setInput({ ...input, [name]: value });
    }
  }

  function submitHandle(event) {
    event.preventDefault();
    if (!errorMsg) {
      dispatch(setLoading());
      dispatch(postActivity(input));
      dispatch(getCountries(""));
      alert("Activity created!");
      navigate("/countries");
    } else {
      alert("You have required fields to complete!");
    }
  }

  function updateErrorMsg() {
    if (!input.name) {
      setErrorMsg("You need to specify a valid name.");
    } else if (!input.duration) {
      setErrorMsg("You need to specify a description");
    } else {
      setErrorMsg("");
    }
  }

/*   function deleteFromList(name, id) {
    setInput((prevInput) => ({
      ...prevInput,
      [name]: prevInput[name].filter((e) => e !== id),
    }));
  }
 */
  useEffect(() => {
    if (!allCountries.length) {
      dispatch(getCountries(""));
    }
    updateErrorMsg();
  }, [input]);
  return (
    <>
      <div className={style.navFixed}>
        <NavBar />
      </div>
      <div className={style.background}>
    
          <div className={style.component}>
            <form>
              <div className={style.flexItems}>
                <h1 className={style.submitTitle}>Prepare your Activity</h1>
                <div className={style.boxTitle}>
                  <div>
                    <label>Name*</label>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type here the name"
                        onChange={changeHandle}
                        maxLength="256"
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label>difficultly</label>
                    <div>
                      0
                      <input
                        type="range"
                        name="difficultly"
                        onChange={changeHandle}
                        min="0"
                        max="5"
                      ></input>
                      5
                    </div>
                  </div>
                  <div>
                    <label>countries:</label>
                    <div>
                      <select
                        name="countries"
                        onChange={changeHandle}
                        value="0"
                      >
                        <option value="0">Add a country</option>
                        {allCountries?.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className={style.boxDesc}>
                  <div className={style.recipeText}>
                    <div>
                      <label>Duration*</label>
                      <div>
                        <textarea
                          name="duration"
                          placeholder="Type here your duration description"
                          onChange={changeHandle}
                          maxLength="1024"
                          width="500px"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <label>season</label>
                      <div>
                        <select name="season" onChange={changeHandle}>
                          {season?.map((season) => (
                            <option key={season} value={season}>
                              {season}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <button onClick={submitHandle}>
                <h2>Submit Recipe</h2>
              </button>
            </form>
          </div>
       
      </div>
    </>
  );
}

export default Form;

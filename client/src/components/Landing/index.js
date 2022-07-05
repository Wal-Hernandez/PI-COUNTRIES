import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.background}>
        <div className={style.component}>
          <button onClick={() => navigate("/countries")}>
            <h2 className={style.title}>Welcome</h2>
          </button>
        </div>
      </div>
    </>
  );
}

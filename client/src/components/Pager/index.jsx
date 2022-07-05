import React from "react";

import { useDispatch, useSelector } from "react-redux";

import style from "./style.module.css";

import { setPage } from "../../actions/index.js";

export default function Pager() {
  const { paginatedResults, currentPage } = useSelector((store) => store);

  const dispatch = useDispatch();

  function goToPage(number) {
    dispatch(setPage(number));
  }

  return (
    <div className={style.component}>
      <button
        disabled={currentPage === 0}
        className={style.leftBtn}
        onClick={() => goToPage(0)}
      >
        {"<<"}
      </button>
      <button
        disabled={currentPage === 0}
        className={style.middleBtn}
        onClick={() => goToPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {paginatedResults?.map((elem, i) => {
        return (
          <button
            key={i}
            disabled={currentPage === i}
            onClick={() => goToPage(i)}
            className={style.middleBtn}
          >
            {i + 1}
          </button>
        );
      })}
      <button
        disabled={
          !paginatedResults.length ||
          currentPage === paginatedResults.length - 1
        }
        onClick={() => goToPage(currentPage + 1)}
        className={style.middleBtn}
      >
        {">"}
      </button>
      <button
        disabled={
          !paginatedResults.length ||
          currentPage === paginatedResults.length - 1
        }
        className={style.rightBtn}
        onClick={() => goToPage(paginatedResults.length - 1)}
      >
        {">>"}
      </button>
    </div>
  );
}

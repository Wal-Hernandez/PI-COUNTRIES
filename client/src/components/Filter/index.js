import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import {
  paginateResults,
  setLoading,
  orderByName,
 
} from '../../actions/index.js'

function Filter() {
  const {
    showedCountries,
    allCountries,
  } = useSelector(state => state)
  const dispatch = useDispatch()


  function applyFilters() {
    dispatch(setLoading())
    dispatch(paginateResults(showedCountries))
  }
  const orderNames = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));

  };

  useEffect(() => {
    if (showedCountries.length) {
      applyFilters()
    }
     if (!showedCountries.length && allCountries.length) {
      applyFilters()
    }
    
  }, [showedCountries])


 


  return (<>
    <div className={style.background}>
      <div className={style.component}>
        <div>
          <h2>{showedCountries.length} matching results</h2>
        </div>
        <div className={style.filters}>
          <div> <h3>SORT BY:</h3></div>
          <div><select onChange={orderNames} className={style.option} >
            <option value="all">Name</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select></div>
          <div><button className={style.btn} onClick={applyFilters}>Apply</button></div>
        </div>
      </div>
    </div>
  </>

  )
}

export default Filter
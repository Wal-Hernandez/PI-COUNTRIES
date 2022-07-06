import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {
  filterByType, filterByRegion, getActivities
} from '../../actions/index.js'
import style from './style.module.css';



function Activities() {
  const {
    activities, regions
  } = useSelector(state => state)


  const navigate = useNavigate();

  const dispatch = useDispatch()

  const filterActivity = (e) => {

    e.preventDefault();
   
      dispatch(filterByType(e.target.value));


    
  };

  const filterRegion = (e) => {

    e.preventDefault();
 
      dispatch(filterByRegion(e.target.value));
    
  };

  useEffect(() => {
    dispatch(getActivities());
  }, []);
  console.log(activities)
  return (
    <div className={style.background}>
      <div className={style.component}>


        <select onChange={filterActivity} id="activities" className={style.select} >
          <option value="all" id="all" className={style.option} >ALL ACTIVITIES </option>
          {activities?.map((d) => (
            <option key={d.id} value={d.id} id={d.id} className={style.option}>
              {" "}
              {d.name.toUpperCase() + d.name.slice(1)}
            </option>
          ))}

        </select>
        <select onChange={filterRegion} id="regions" className={style.select} >
          <option value="all" id="all" className={style.option} >CONTINENTES </option>
          {regions?.map((d) => (
            <option key={d} value={d} id={d} className={style.option}>
              {" "}
              {d[0].toUpperCase() + d.slice(1)}
            </option>
          ))}

        </select>

      </div>
    </div>
  )
}

export default Activities
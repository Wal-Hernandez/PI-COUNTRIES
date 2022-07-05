import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import Search from "../Search";


function NavBar() {
    return (<>
    <div className={style.background}>
        <div className={style.component}>
            <div className={style.item1}> <NavLink to='/'>
            Home
            </NavLink>
            </div>
            <div className={style.item2}>
            <Search  />
            </div>
            <div className={style.item3}> 
            <NavLink to='/create'> Submit a activity
            </NavLink>
            </div>
        </ div>
        </div>   
         
        </>
    )
}

export default NavBar
import Filter from "../Filter";
import CountryList from "../CountryList";
import style from "./style.module.css";
import Pager from "../Pager";
import Activities from "../Activities";
import NavBar from "../NavBar";
export default function Home() {
  return (
    <>
      <div className={style.component}>
        <div className={style.item1}>
          <NavBar />

          <Activities />
        </div>
        <div className={style.helper}></div>
        <div className={style.item2}>
          <div className={style.filter}>
            <Filter />
          </div>
          <div className={style.recipesList}>
            <CountryList />
            <Pager />
          </div>
        </div>
      </div>
    </>
  );
}

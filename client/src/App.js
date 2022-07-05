import style from './styles/App.module.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import CountryDetail from './components/CountryDetail';
import Form from './components/Form';


function App() {
 


return (
  <div className={style.App}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/countries" element={<><Home /></>} />
      <Route path="/countries/:id" element={<><div className={style.navDetail}>
        <NavBar /></div>
        <CountryDetail /> </>} />
      <Route path="/create" element={<Form />} />
    </Routes>
  </div>
);
}

export default App;

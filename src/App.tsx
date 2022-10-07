import Home from './containers/pages/home_page';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './containers/navigation';
import { DataContext } from './hooks/ContextProvider';
import { useState } from 'react'
import DESTINATION from './containers/pages/destination_page';
import Crew from './containers/pages/crew_page';
import BurgerNav from './containers/burger_nav_bar';
import TECHNOLOGY from './containers/pages/technology_page';

function App() {
  const [isBurger_BtnActive, setBurger_BtnActive] = useState(false);
  const [DataIndex, setDataIndex] = useState(0);


  const ContextData = {
    isBurger_BtnActive,
    setBurger_BtnActive,
    DataIndex,
    setDataIndex
  }
  return (
    <BrowserRouter>
      <DataContext.Provider value={ContextData}>
        <section className="App">
          <BurgerNav />
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/DESTINATION' element={<DESTINATION />} />
            <Route path='/CREW' element={<Crew />} />
            <Route path='/TECHNOLOGY' element={<TECHNOLOGY />} />
          </Routes>
        </section>
      </DataContext.Provider>
    </BrowserRouter>

  );
}

export default App;

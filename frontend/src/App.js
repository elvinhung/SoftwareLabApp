import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Hotel from './pages/Hotel';
import HoxtonHolborn from './pages/HoxtonHolborn';
import LeonHotel from './pages/LeonHotel';
import FairmontHeritage from "./pages/FairmontHeritage";
import Restaurant from './pages/Restaurant';
import SF from './pages/SF';
import NYC from './pages/NYC';
import LDN from './pages/LDN';
import SouthKensington from './pages/SouthKensington';
import CrabHouse from './pages/CrabHouse';
import FishHouse from './pages/FishHouse'
import About from './pages/About';
import LocationInstance from "./pages/LocationInstance";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Location} />
        <Route path="/locations/sf" component={SF} />
        <Route path="/locations/nyc" component={NYC} />
        <Route path="/locations/ldn" component={LDN} />
        <Route path="/locations/:id" component={LocationInstance} />
        <Route path="/locations" component={Location} />
        <Route path="/hotels/hoxton_holborn" component={HoxtonHolborn} />
        <Route path="/hotels/leon_hotel" component={LeonHotel} />
        <Route path="/hotels/fairmont_heritage" component={FairmontHeritage} />
        <Route path="/hotels" component={Hotel} />
        <Route path="/restaurants/south_kensington" component={SouthKensington} />
        <Route path="/restaurants/crab_house" component={CrabHouse} />
        <Route path="/restaurants/fish_house" component={FishHouse} />
        <Route path="/restaurants" component={Restaurant} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

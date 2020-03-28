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
import About from './pages/About';
import LocationDetail from "./pages/LocationDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Location} />
        <Route path="/locations/:id" component={LocationDetail} />
        <Route path="/hotels/hoxton_holborn" component={HoxtonHolborn} />
        <Route path="/hotels/leon_hotel" component={LeonHotel} />
        <Route path="/hotels/fairmont_heritage" component={FairmontHeritage} />
        <Route path="/hotels" component={Hotel} />
        <Route exact path="/restaurants" component={Restaurant} />
        <Route path="/restaurants/:id" component={RestaurantDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

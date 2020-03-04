import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Location from './pages/Location';
import Hotel from './pages/Hotel';
import Restaurant from './pages/Restaurant';
import KatzDeli from './pages/KatzDeli';
import Fitzrovia from './pages/Fitzrovia';
import Roxie from './pages/Roxie'
import SF from './pages/SF';
import NYC from './pages/NYC';
import LDN from './pages/LDN';
import About from './pages/About';
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
        <Route path="/hotels" component={Hotel} />
        <Route path="/restaurants/katz's_delicatessen" component={KatzDeli} />
        <Route path="/restaurants/attendant_fitzrovia" component={Fitzrovia} />
        <Route path="/restaurants/roxie_food_center" component={Roxie} />
        <Route path="/restaurants" component={Restaurant} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

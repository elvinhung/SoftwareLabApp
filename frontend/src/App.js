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
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={Location} />
        <Route path="/hotels" component={Hotel} />
        <Route path="/restaurants" component={Restaurant} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

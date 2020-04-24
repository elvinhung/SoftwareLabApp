import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Location from './pages/Location';
import Hotel from './pages/Hotel';
import Restaurant from './pages/Restaurant';
import About from './pages/About';
import LocationDetail from "./pages/LocationDetail";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import './App.css';
import RestaurantDetail from "./pages/RestaurantDetail";
import HotelDetail from "./pages/HotelDetail";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchPage} />
          <Route exact path="/locations" component={Location} />
          <Route path="/locations/:id" component={LocationDetail} />
          <Route exact path="/hotels" component={Hotel} />
          <Route path="/hotels/:id" component={HotelDetail} />
          <Route exact path="/restaurants" component={Restaurant} />
          <Route path="/restaurants/:id" component={RestaurantDetail} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

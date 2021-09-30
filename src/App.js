import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import Resturant from './Resturant/Resturant';
import About from './About/About';
import { NotFound } from 'http-errors';
import Header from './Header/Header';
import FoodDetails from './FoodDetails/FoodDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/resturant">
            <Resturant></Resturant>
          </Route>
          <Route path="/Food/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

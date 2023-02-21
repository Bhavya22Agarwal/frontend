import './CSS/App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );  
}

export default App;

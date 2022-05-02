//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Gatways from './components/Gatways';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Gatways" exact component={Gatways} />
            {/* <Route path="/Gatway:id" exact component={Gatway} /> */}

          </Switch>
      </div>
    </Router>
  );
}

export default App;

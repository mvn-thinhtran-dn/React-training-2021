import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Form from './Components/Form'
import FormHook from './Components/FormHooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* <Home /> */}
            {/* <Form /> */}
            <FormHook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

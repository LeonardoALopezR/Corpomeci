import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";

//components
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Navbar from "./components/layout/Navbar";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
    </div>
    </Provider>
  );
}

export default App;

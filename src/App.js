import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import Place from "./places/pages/Place";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/places/new' component={Place} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;

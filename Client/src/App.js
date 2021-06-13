import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "./containers/Payment/UserPayment";
import Main from "./containers/Main/Main";
import Login from "./containers/Login/Login"
import Signin from "./containers/SignIn/Signin";
import Home from "./containers/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Home />    
        </Route>
        <Route path="/login" exact >
          <Login />
        </Route>
        <Route path="/signin" exact >
          <Signin />
        </Route>
        <Route path="/payment" exact >
          <Payment />
        </Route>
        <Route path="/main" exact >
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

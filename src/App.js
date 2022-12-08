import logo from "./logo.svg";
import "./App.css";
// import Login from './component.js/login';
import Forget from "./component.js/forget";
import Login from "./component.js/login";
import ResetPassword from "./component.js/resetPass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./component.js/context/AuthContext";
import Otp from "./component.js/otp";
import HomePage from "./component.js/homePage";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <Forget />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route path="/otp">
            <Otp></Otp>
          </Route>
          <Route path="/homePage">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

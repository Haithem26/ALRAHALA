import { useState } from "react";
import "./App.css";
import { hasAuthenticated } from "./services/AuthApi";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";

//ook
import Services from "./pages/Services";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import SignUpForm from "./components/Log/SignUpForm";
import SignInForm from "./components/Log/SignInForm";
import NewEventForm from "./components/Event/NewEventForm";
import SingleEvent from "./components/Event/SingleEvent";
import UpdateEvent from "./components/Event/UpdateEvent";
import AuthenticatedRoute from "./components/Log/AuthenticatedRoute";
import Auth from "./contexts/Auth";
import Navi from "./components/Navigations/Nav";
import Footer from "./components/Navigations/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <div>
      <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Router>
          <Navi />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <AuthenticatedRoute path="/about_us" exact component={About} />
            <Route path="/list-event" exact component={Events} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/login_password" exact component={SignInForm} />
            <Route path="/sign-up" exact component={SignUpForm} />
            <AuthenticatedRoute
              path="/add-new-event"
              exact
              component={NewEventForm}
            />
            <Route path="/single-event/:id" exact component={SingleEvent} />
            <AuthenticatedRoute
              path="/update-event/:id"
              exact
              component={UpdateEvent}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Footer />
      </Auth.Provider>
    </div>
  );
}

export default App;

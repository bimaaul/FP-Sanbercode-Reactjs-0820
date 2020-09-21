import React, {useContext} from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ChangePassword from "../pages/auth/ChangePassword"
import Movies from "../pages/Movies"
import MoviesCreate from "../pages/user/MoviesCreate"
import MoviesEditor from "../pages/user/MoviesEditor"
import Games from "../pages/Games"
import GamesCreate from "../pages/user/GamesCreate"
import GamesEditor from "../pages/user/GamesEditor"
import {UserContext} from "../context/UserContext"


const Section = () => {

  const [user] = useContext(UserContext);

  const PrivateRoute = ({user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({user, ...props }) =>
  user ? <Redirect to="/" /> : <Route {...props} />;

  return(    
    <section >
      <Switch>
        <Route exact path="/" user={user} component={Home}/>
        <Route exact path="/movie" user={user} component={Movies}/>
        <Route exact path="/game" user={user} component={Games}/>
        <PrivateRoute exact path="/movies-editor" user={user} component={MoviesEditor}/>
        <PrivateRoute exact path="/movies-create" user={user} component={MoviesCreate}/>
        <PrivateRoute exact path="/games-editor" user={user} component={GamesEditor}/>
        <PrivateRoute exact path="/games-create" user={user} component={GamesCreate}/>
        <PrivateRoute exact path="/change-password" user={user} component={ChangePassword}/>
        <LoginRoute exact path="/register" user={user} component={Register}/>
        <LoginRoute exact path="/login" user={user} component={Login}/>
      </Switch>
    </section>
  )
}

export default Section

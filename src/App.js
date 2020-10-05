import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserRegistration from './components/UserRegistration/UserRegistration';
import Admin from './components/Admin/Admin';
import Adminaddevent from './components/Adminaddevent/Adminaddevent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header>
          </Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route exact path="/addevent">
              <Adminaddevent></Adminaddevent>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/registration/:volunteerType">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/registered">
              <UserRegistration></UserRegistration>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

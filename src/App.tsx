import React from 'react';
import {observer} from 'mobx-react-lite';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './assets/App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Tracks } from './components/Tracks';
import { CreateTrack } from './components/CreateTrack';
import { GetTrack } from './components/GetTrack';
import { Login } from './components/Login';
import { Error } from './components/Error';

export const App: React.FC = observer(() => {
  
  const token = localStorage.getItem('token');
  
  
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/tracks" component={Tracks}>
              {token ? <Route exact path="/tracks" component={Tracks} />:<Redirect to="/login" />}
          </Route>
          <Route exact path="/new/track" component={CreateTrack}>
              {token ? <Route exact path="/new/track" component={CreateTrack} />:<Redirect to="/login" />}
          </Route>
          <Route exact path="/tracks/:id" component={GetTrack}>
              {token ? <Route exact path="/tracks/:id" component={GetTrack} />:<Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={Login} />
          <Route component={Error}>
              {token ? <Route component={Error} />:<Redirect to="/login" />}
          </Route>
      </Switch>
      <Footer />
  </Router>
  );
})

import React from 'react';
import {observer} from 'mobx-react-lite';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './assets/App.scss';

import Header from './components/Header';
//import { Footer } from './components/Footer';
import Tracks from './modules/Tracks';
import CreateTrack from './modules/Tracks/components/CreateTrack';
import GetTrack from './modules/Tracks/components/GetTrack';
import Login from './modules/Login';
import Error from './components/Error';
import UpdateTrack from "./modules/Tracks/components/UpdateTrack";
import { Main } from './modules/Main';
import { Profile } from './modules/Profile';

export const App: React.FC = observer(() => {
  
  const token = localStorage.getItem('token');
  
  return (
    <Router>
      {token ? <Header /> : ''}
      <Switch>
        <Route exact path="/" component={token ? Main : Login} />
        <Route exact path="/profile" component={token ? Profile : Login} />
        <Route exact path="/tracks" component={token ? Tracks : Login} />
        <Route exact path="/tracks/new" component={token ? CreateTrack : Login} />
        <Route exact path="/tracks/:id" component={token ? GetTrack : Login} />
        <Route exact path="/tracks/edit/:id" component={token ? UpdateTrack : Login} />
        <Route exact path="/login" component={Login} />
        <Route component={token ? Error : Login} />
      </Switch>
    </Router>
  );
})

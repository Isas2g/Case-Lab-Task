import React, { useCallback, useState } from 'react';
import {observer} from 'mobx-react-lite';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './assets/App.scss';

import Header from './components/Header';
//import { Footer } from './components/Footer';
import Tracks from './modules/Tracks';
import CreateTrack from './modules/Tracks/components/CreateTrack';
import GetTrack from './modules/Tracks/components/GetTrack';
import { Login } from './modules/Login';
import Error from './components/Error';
import UpdateTrack from "./modules/Tracks/components/UpdateTrack";
import { Main } from './modules/Main';
import { Profile } from './modules/Profile';

export const App: React.FC = observer(() => {
  const [token, setToken] = useState('');
  
  const tokenCode = localStorage.getItem('token');
  
  const loginPage = (props: any) => <Login token={token} setToken={setToken} />
  
  return (
    <Router>
      {token ? <Header /> : ''}
      <Switch>
        <Route exact path="/" component={token ? Main : loginPage} />
        <Route exact path="/profile" component={token ? (props: any) => <Profile token={token} setToken={setToken} /> : loginPage} />
        <Route exact path="/tracks" component={token ? Tracks : loginPage} />
        <Route exact path="/tracks/new" component={token ? CreateTrack : loginPage} />
        <Route exact path="/tracks/:id" component={token ? GetTrack : loginPage} />
        <Route exact path="/tracks/edit/:id" component={token ? UpdateTrack : loginPage} />
        <Route exact path="/login" component={loginPage} />
        <Route component={token ? Error : loginPage} />
      </Switch>
    </Router>
  );
})

import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./shared/assets/App.scss";

import { Header } from "./shared/components/Header";
import { Footer } from "./shared/components/Footer";
import Tracks from "./modules/Tracks";
import CreateTrack from "./modules/Tracks/components/CreateTrack";
import GetTrack from "./modules/Tracks/components/GetTrack";
import { Login } from "./modules/Login";
import Error from "./shared/components/Error";
import UpdateTrack from "./modules/Tracks/components/UpdateTrack";
import { Main } from "./modules/MainPage";
import { Profile } from "./modules/Profile";
import { TrackDetailPage } from "./modules/TrackDetails";

export const App: React.FC = observer(() => {
  const [token, setToken]:any = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <main className="flex-shrink-0">
        <Switch>
          <Route exact path="/" component={token ? Main : Login} />
          <Route exact path="/profile" component={token ? Profile : Login} />
          <Route exact path="/tracks" component={token ? (my:boolean) => <Tracks my={false} /> : Login} />
          <Route exact path="/tracks/new" component={token ? CreateTrack : Login} />
          <Route exact path="/tracks/my" component={token ? (my:boolean) => <Tracks my={true} /> : Login} />
          <Route exact path="/tracks/:id" component={token ? GetTrack : Login} />
          <Route exact path="/tracks/edit/:id" component={token ? UpdateTrack : Login} />
          <Route exact path="/tracks/trackDetail/:id" component={token ? TrackDetailPage : Login} />
          <Route exact path="/login" component={token ? Error : Login} />
          <Route component={token ? Error : Login} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
})

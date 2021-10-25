import React from 'react';
import './App.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Error from "../Error";
import LogIn from "../login/LogIn";
import Tracks from "../tracks/Tracks";

import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import GetTrack from "../tracks/GetTrack";
import CreateTrack from "../tracks/CreateTrack";


//const SomeComponent = withRouter(props => <App {...props}/>);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.token = localStorage.getItem('token');
        if (this.token === null) {
            this.token = false;
        }
    }

    render() {
        return (
            <div className="App" ref={this.wrapper}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/tracks" component={Tracks}>
                            {this.token ? <Route exact path="/tracks" component={Tracks} />:<Redirect to="/login" />}
                        </Route>
                        <Route exact path="/new/track" component={CreateTrack}>
                            {this.token ? <Route exact path="/new/track" component={CreateTrack} />:<Redirect to="/login" />}
                        </Route>
                        <Route exact path="/tracks/:id" component={GetTrack}>
                            {this.token ? <Route exact path="/tracks/:id" component={GetTrack} />:<Redirect to="/login" />}
                        </Route>
                        <Route exact path="/login" component={LogIn} />
                        <Route component={Error}>
                            {this.token ? <Route component={Error} />:<Redirect to="/login" />}
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Error from "../Error";
import LogIn from "../login/LogIn";
import Tracks from "../tracks/Tracks";

import {BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter} from "react-router-dom";


const SomeComponent = withRouter(props => <App {...props}/>);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    render() {
        let token = localStorage.getItem('token');
        if (token === null) {
            token = false;
        }
        if (!token) {
            if (window.location.pathname != '/login') {
                return <Router><Redirect to="/login" /></Router>
            }
        }
        return (
            <div className="App" ref={this.wrapper}>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Tracks} />
                        {/*<Route exact path="/tracks" component={TrackCatalog} />*/}
                        {/*<Route exact path="/tracks/owned" component={MyTracks} />*/}
                        <Route exact path="/login" component={LogIn} />
                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;

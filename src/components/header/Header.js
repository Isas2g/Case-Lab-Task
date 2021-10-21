import logo from "./logo.svg";
import './Header.css';
import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    render() {
        return (
            <header className="App-header" ref={this.wrapper}>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        )
    }
}

export default Header
import React, {Component} from 'react';

class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);    
    }
    handleClick(){
        this.setState((prevState) => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            };
        })
    }

    render() {
        let button_text = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
        let logged_text = this.state.isLoggedIn ? "You have logged in already!" : "You must be logged in!";
        return (
            <div className="logIn">
                <button className="log_but" onClick={this.handleClick}>
                    {button_text}
                </button>    
                <div>{logged_text}</div>
            </div>
        );
    }
}

export default LogIn
import React, { Component } from 'react';
import SWAppBar from './components/SWAppBar.js';
import LoginSignup from './pages/LoginSignup.js';
import Dashboard from './pages/Dashboard.js';

//page props ensures the page no
class SplitWise extends Component{
    render(){
        return(
            <div>
                <SWAppBar   page={this.props.page}
                    onTitleClick={this.props.onTitleClick}  signupLogin={this.props.signupLogin}
                    signupPage={this.props.signupPage}      loginPage={this.props.loginPage}
                    signup={this.props.signup}              login={this.props.login}                
                    logged={this.props.logged}              username={this.props.username}
                    logout={this.props.logout}
                />
                {this.props.logged
                ?
                    <Dashboard />
                :
                    <LoginSignup logged={this.props.logged}     signupLogin={this.props.signupLogin}
                        signupPage={this.props.signupPage}      loginPage={this.props.loginPage}
                        signup={this.props.signup}              login={this.props.login}
                        err={this.props.err}
                    />
                }
            </div>
        );
    }
}
//<img src="images/mascot.png" />
export default SplitWise;
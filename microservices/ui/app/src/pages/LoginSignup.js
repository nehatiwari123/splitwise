import React, { Component } from 'react';
import muiTheme from '../muiTheme.js';
import Styles from '../Styles.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

class LoginSignup extends Component{
    constructor(){
        super();
        this.state = {err: 0, errorOpen: false};
        this.newUser  = {username:'', email:'', password:''};
        this.authUser = {email:'', password:''};
    }
    signupUsername(evt) {   this.newUser.username = evt.target.value;   };
    signupEmail(evt)    {   this.newUser.email    = evt.target.value;   };
    signupPassword(evt) {   this.newUser.password = evt.target.value;   };
    
    copyCredentials()   {   this.authUser.email   = this.newUser.email; 
                            this.authUser.password= this.newUser.password;
                        };
    loginEmail(evt)     {   this.authUser.email   = evt.target.value;   };
    loginPassword(evt)  {   this.authUser.password= evt.target.value;   };
    
    handleError1Click = () => {
        this.setState({errorOpen: false});
    };
    handleError2Click = () => {
        this.setState({errorOpen: false});
        alert('Forgotten Password : This functionality is still in development');
    };
    handleErrorRequestClose = () => {
        this.setState({errorOpen: false});
    };
    check(){
        this.state.err = this.props.err;
        if(this.props.err === 1)        {   this.state.err = 1; }
        else if(this.props.err === 2)   {   this.state.err = 2; }
        console.log("check - this.props.err "+this.props.err);
    }
    signup = () => {
        this.props.signup(this.newUser);
        //check for error 1
        this.check();
        this.setState({ errorOpen: true});
        this.copyCredentials();
    };
    login = () => {
        this.props.login(this.authUser);
        //check for error 2
        this.check();
        this.setState({ errorOpen: true});
        //console.log("after check - this.state.err "+this.state.err);
    };
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row'}}>
                {(this.state.err===1)
                ?
                    <Snackbar
                        open={this.state.errorOpen}
                        message="Please enter email in correct format"
                        action="Try Again"
                        autoHideDuration={5000}
                        onActionClick={this.handleError1Click.bind(this)}
                        onRequestClose={this.handleErrorRequestClose.bind(this)}
                    />
                :   <span></span>
                }
                {(this.state.err===2)
                ?
                    <Snackbar
                        open={this.state.errorOpen}
                        message="Whoops! We couldn’t find an account for that email address and password."
                        action="Resolve"
                        autoHideDuration={5000}
                        onActionClick={this.handleError2Click.bind(this)}
                        onRequestClose={this.handleErrorRequestClose.bind(this)}
                    />
                :   <span></span>
                }
                {(this.state.err===3)
                ?
                    <Snackbar
                        open={this.state.errorOpen}
                        message="All fields are required"
                        action="Try Again"
                        autoHideDuration={5000}
                        onActionClick={this.handleError1Click.bind(this)}
                        onRequestClose={this.handleErrorRequestClose.bind(this)}
                    />
                :   <span></span>
                }
                <img style={Styles.LoginSignupImg} src="images/big_logo.png" />
                {(this.props.signupLogin === 0)
                ?
                    <form style={Styles.LoginSignupDiv}>
                        <h4 style={{color:muiTheme.palette.primaryHeaderColor}}>INTRODUCE YOURSELF</h4>
                        <h2 style={Styles.subheader}>Hi there! My name is</h2>
                        <TextField id="signup-username" onChange={this.signupUsername.bind(this)}
                            underlineShow={false} style={Styles.textFieldintro} type="text"/>
                        <h3 style={Styles.subheader}>Here’s my <b>email address:</b></h3>
                        <TextField id="signup-email" onChange={this.signupEmail.bind(this)}
                            underlineShow={false} style={Styles.textFieldother} type="email"/>
                        <h3 style={Styles.subheader}>And here’s <b>my password:</b></h3>
                        <TextField id="signup-password" onChange={this.signupPassword.bind(this)}
                            underlineShow={false} style={Styles.textFieldother} type="password"/><br/><br/>
                        <FlatButton style={Styles.flatSignMeUp} labelStyle={Styles.labelSignMeUp}
                        backgroundColor='#ff6200' hoverColor='#ff4500' rippleColor='#efefef' 
                        label="Sign me up!" onClick={this.signup} />
                        <br/><br/>
                    </form>
                :
                    <form style={Styles.LoginSignupDiv}>
                        <h4 style={{color:muiTheme.palette.primaryHeaderColor}}>WELCOME TO SPLITWISE</h4>
                        <h3 style={Styles.subheader}>Email address</h3>
                        <TextField id="login-email" onChange={this.loginEmail.bind(this)}
                            underlineShow={false} style={Styles.textFieldother} type="email" />
                        <h3 style={Styles.subheader}>Password</h3>
                        <TextField id="login-password" onChange={this.loginPassword.bind(this)}
                            underlineShow={false} style={Styles.textFieldother} type="password"/><br/><br/>
                        <FlatButton style={Styles.flatSignMeUp} labelStyle={Styles.labelSignMeUp}
                            backgroundColor='#ff6200' hoverColor='#ff4500' rippleColor='#efefef' 
                            label=" &nbsp; Log in &nbsp; " onClick={this.login} />
                    </form>
                }
            </div>
        );
    }
}


export default LoginSignup;


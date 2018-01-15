import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme.js';
import SplitWise from './SplitWise.js';

//use SNACKBAR for notifications
//login/signup has a separate 'signupLogin: 0/1' because there is interchangable tabs user can go independent 
//of app state on start up i.e. when user is not logged in

//page 0 default welcome page from where user gets into app login/signup options
//page1 is the base page : Dashboard if logged in or else show login/signup
class App extends Component{
    constructor(){
        super();
        this.state = { page:1 , signupLogin: 0, logged: false, auth: false, err: 0};
        this.user  = { username: '', avatar: ''};
        this.demo  = { username: 'Rounak Polley',email: 'abc@def.ghi', password: 'ijkl'};
        this.err   = { no: 0 };
    }
    //0 : Signup
    //0 : no error, 1 : wrong email format (client side), 2 : wrong email/password, 3 : empty textfields
    onTitleClick(){
        this.setState({page:0});
        console.log(this.state.page);
    }
    signupPage(){   this.setState({signupLogin: 0});    }
    loginPage(){    this.setState({signupLogin: 1});    }
    
    ValidateEmail(mail)   
    {  
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  {  return (true);  }   
        return (false);  
    }  
    error(val){
        this.err.no = val;
        //this.setState({err: val}, function(){console.log("error in app.js - "+this.state.err);});
        if(val === 1)       {alert("You have entered an invalid email address!");                               }
        else if(val ===2)   {alert("Whoops! We couldn’t find an account for that email address and password."); }
        else if(val === 3)  {alert("All fields are required!");                                                 }
    }
    
    signup = (newUser) => {
        console.log(newUser);
        if((newUser.username==='')||(newUser.email==='')||(newUser.password==='')){
            this.error(3);  console.log("error in app.js - "+this.state.err);
        }
        else if(!this.ValidateEmail(newUser.email)){
            this.error(1);  console.log("error in app.js - "+this.state.err);
        }
        else{
            //---// save data
            console.log('saved new-user credentials');
            //goto login page (values are already copied)
            this.setState({signupLogin: 1});   
        }
    };

    login = (authUser) => {        
        console.log(authUser);
        //error : 1 wrong email format
        //---// authenticate user set this.state.auth : true
        if((authUser.email === this.demo.email) && (authUser.password === this.demo.password)){
            this.state.auth = true;
            this.user.username = this.demo.username;
        }
        else{
            //error : 2 wrong username/password
            //this.setState({err: 2}); not working why?
            //console.log("error in app.js - "+this.state.err);
            this.error(2);
            console.log("error in app.js - "+this.state.err);
        }
        if(this.state.auth){
            console.log('authenticated user');
            this.setState({logged: true});
            //get user name and other data and populate the 'this.user'
            
            //page 2
            //this.setState({page: 2});   
        }
    };
    
    logout(){       this.setState({logged: false, signupLogin: 1});     }
    render(){
        return(
            <div className="App">
                <MuiThemeProvider muiTheme={muiTheme}>
                    <SplitWise  page={this.state.page}
                        onTitleClick={this.onTitleClick.bind(this)} signupLogin={this.state.signupLogin}
                        signupPage={this.signupPage.bind(this)}     loginPage={this.loginPage.bind(this)}
                        signup={this.signup.bind(this)}             login={this.login.bind(this)}               
                        logged={this.state.logged}                  username={this.user.username}
                        logout={this.logout.bind(this)}             err={this.err.no}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;

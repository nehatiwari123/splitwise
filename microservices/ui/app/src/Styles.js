import muiTheme from './muiTheme.js';

const Styles = {
    appbarTitle:    {cursor: 'pointer', marginLeft: 200, width: 'wrap-content',
                     fontSize: 16, fontFamily: 'serif', letterSpacing: 4},
    subheader:      {color:muiTheme.palette.subHeaderColor, fontWeight:100},
    appbarAvatar:   {marginRight:130, marginTop:0, width: 300, color: muiTheme.palette.primaryTextColor},
    labelText:      {textTransform: 'none', color: muiTheme.palette.primaryTextColor },
    LoginSignupImg: {height:200, marginLeft:420, marginTop:100, marginRight:60},
    LoginSignupDiv: {marginTop:70},
    flatLogin:      {lineHeight: '25px', height:25, borderRadius:5, marginTop:5, border:'1px solid #06b11a'},
    flatSignup:     {lineHeight: '25px', height:25, borderRadius:5, marginTop:5, border:'1px solid #de0000'},
    
    flatSignMeUp:   {height:50, fontSize:30, borderRadius:5, marginTop:5, border:'1px solid #de0000',
                    boxShadow: '0px 0px 3px #bfbfbf'},
    labelSignMeUp:  {textTransform: 'none', color: muiTheme.palette.primaryTextColor, fontSize:20,
                    textShadow: '0px -1px 0px #5d5d5d'},
    textFieldintro: {border: '1px solid #b1b0b0', borderRadius:5, fontSize: 35, width: 300, height: 50,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3', color:'#acabab',},
    textFieldother: {border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'},
};

export default Styles;
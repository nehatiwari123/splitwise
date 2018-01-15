import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey50, grey500, grey800, lightGreenA700} 
from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette:    {baseColor: lightGreenA700, primaryTextColor: grey50, 
                 primaryHeaderColor: grey500, subHeaderColor: grey800 },
    appBar:     { height: 35, color: lightGreenA700},
    flatButton: { textTransform: 'none', height: 25},
  raisedbutton: {color: grey50, },
    menuitem:   { height:10, backgroundColor: lightGreenA700},
    
});

export default muiTheme;
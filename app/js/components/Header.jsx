import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends React.Component {
  render(){
    this.handleTouchTap = () => {
      
    }
    return (
      <MuiThemeProvider>
        <AppBar 
          title="Title"
          onTitleTouchTap={handleTouchTap}
          style={{flex: 1}}
        />
      </MuiThemeProvider>
    );
  }
};

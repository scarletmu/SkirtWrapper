import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends React.Component {
  render(){
    return (
      <MuiThemeProvider>
        <AppBar title="Title" style={{flex: 1}}/>
      </MuiThemeProvider>
    );
  }
};

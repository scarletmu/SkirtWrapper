import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
  }
  handleDrawerStatus () {
    this.props.handleDrawerStatus(true);
  }
  render () {
    return (
      <MuiThemeProvider>
        <AppBar 
          title="Title"
          onLeftIconButtonTouchTap={this.handleDrawerStatus}
          style={{flex: 1}}
        />
      </MuiThemeProvider>
    );
  }
};

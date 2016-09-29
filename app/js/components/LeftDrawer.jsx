import React from 'React';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LeftDrawer extends React.Component{
  render(){
    let { drawerStatus } = this.props;
    return (
      <MuiThemeProvider>
        <Drawer docked={false} open={drawerStatus}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
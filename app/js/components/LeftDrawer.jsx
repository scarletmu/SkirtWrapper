import React from 'React';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LeftDrawer extends React.Component{
  constructor (props, context) {
    super(props, context);
    this.handleDrawerStatus = this.handleDrawerStatus.bind(this);
  }
  handleDrawerStatus () {
    this.props.handleDrawerStatus(false);
  }
  render(){
    let { drawerStatus } = this.props;
    return (
      <MuiThemeProvider>
        <Drawer 
          docked={false}
          open={drawerStatus}
          onRequestChange={this.handleDrawerStatus}
         >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
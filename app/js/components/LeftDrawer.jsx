import React from 'React';
//MUI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
//React-Router
import {Link} from 'react-router'


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
          <Link to={`/lizlisa`}><MenuItem>Liz Lisa</MenuItem></Link>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
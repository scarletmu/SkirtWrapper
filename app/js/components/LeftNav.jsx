import React from 'react';
import {List, ListItem} from 'material-ui/List';
//ICON
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ViewList from 'material-ui/svg-icons/action/view-list';

export default class LeftNav extends React.Component {
  render(){
    const LeftNavStyle = {
      flex: '0 1 auto',
      margin: "0px 10px",
      minWidth: '200px'
    }
    return (
      <List id="LeftNav" style={LeftNavStyle}>
        <ListItem primaryText="折扣" leftIcon={<ShoppingCart />} />
        <ListItem primaryText="上新" leftIcon={<ShoppingCart />} />
        <ListItem primaryText="总汇" leftIcon={<ViewList />} />
      </List>
    );
  }
};
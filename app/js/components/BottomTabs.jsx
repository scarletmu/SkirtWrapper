import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
//ICON
import FontIcon from 'material-ui/FontIcon';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ViewList from 'material-ui/svg-icons/action/view-list';

export default class BottomTabs extends React.Component{
  render () {
    const bottomStyle = {
      position: 'fixed',
      width: '100%',
      bottom: '0px'
    }
    return (
      <Tabs id="BottomTabs" style={bottomStyle}>
        <Tab
          icon={<ShoppingCart />}
          label="折扣"
        />
        <Tab
          icon={<ShoppingCart />}
          label="上新"
        />
        <Tab
          icon={<ViewList />}
          label="总汇"
        />
      </Tabs>
    )
  }
}
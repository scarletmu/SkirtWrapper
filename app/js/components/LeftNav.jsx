import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class LeftNav extends React.Component {
  render(){
    const LeftNavStyle = {
      flex: '0 1 20%',
      margin: "0px 10px"
    }
    return (
      <List style={LeftNavStyle}>
        <ListItem primaryText="Inbox"/>
        <ListItem primaryText="Starred"/>
        <ListItem primaryText="Sent mail"/>
        <ListItem primaryText="Drafts"/>
        <ListItem primaryText="Inbox"/>
      </List>
    );
  }
};
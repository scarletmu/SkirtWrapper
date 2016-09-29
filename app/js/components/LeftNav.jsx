import React from 'react';
import {List, ListItem} from 'material-ui/List';
//ICON
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

export default class LeftNav extends React.Component {
  render(){
    const LeftNavStyle = {
      flex: '0 1 auto',
      margin: "0px 10px"
    }
    return (
      <List style={LeftNavStyle}>
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      </List>
    );
  }
};
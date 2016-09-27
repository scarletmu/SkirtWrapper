import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'


export default class Test extends React.Component {
  render(){
    return (
      <Link to={`/about`}>About</Link>
    );
  }
};

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class About extends React.Component {
  render () {
    const MainStyle = {
      display: 'flex',
      paddingTop: '10px',
      width: '100%'
    }
    const padding = {
      padding: '5px 5px'
    }
    return (
      <MuiThemeProvider>
      <div id="MainPageCards" style={MainStyle}>
        <Card style={padding}>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
          <img src="http://w2.hoopchina.com.cn/f1/b8/8d/f1b88d90a49f1e22426081608b16d043001.jpg" />
          </CardMedia>
          <CardTitle title="Liz Lisa" subtitle="Card subtitle" />
          <CardText>
              Lizlisa
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
        <Card style={padding}>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
          <img src="http://w2.hoopchina.com.cn/f1/b8/8d/f1b88d90a49f1e22426081608b16d043001.jpg" />
          </CardMedia>
          <CardTitle title="Ank Rouge" subtitle="Card subtitle" />
          <CardText>
              AnkRouge
          </CardText>
          <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
          </CardActions>
        </Card>
        <Card style={padding}>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
          <img src="http://w2.hoopchina.com.cn/f1/b8/8d/f1b88d90a49f1e22426081608b16d043001.jpg" />
          </CardMedia>
          <CardTitle title="Liz Lisa" subtitle="Card subtitle" />
          <CardText>
             Axes
          </CardText>
          <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>   
      </MuiThemeProvider>   
    );
  }
}
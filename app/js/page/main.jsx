import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class About extends React.Component {
  render () {
    const MainStyle = {
      display: 'flex',
      paddingTop: '50px'
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
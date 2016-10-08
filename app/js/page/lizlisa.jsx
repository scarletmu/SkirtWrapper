import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Component
import LeftNav from '../components/LeftNav.jsx';

export default class LizLisa extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <div style={{display: "flex"}}>
                  <LeftNav/>
                  <div style={{
                    'textAlign': 'center'
                  }}>
                    <h1>Hello</h1>
                  </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
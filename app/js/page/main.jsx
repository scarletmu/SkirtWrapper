import React from 'react';
import Test from '../components/Test.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class About extends React.Component {
    render () {
        return (
                <div style={{
                    flex: 1,
                    textAlign: 'center'
                }}>
                <h1>Hello</h1>
                <Test></Test>
                </div>
        );
    }
}
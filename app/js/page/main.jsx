import React from 'react';
import Test from '../compoments/Test.jsx';
export default class About extends React.Component {
    render () {
        return (
            <div style={{
                flex: 1,
                textAlign: 'center',
                paddingTop: 100
            }}>
              <h1>Main</h1>
              <Test></Test>
            </div>
        );
    }
}
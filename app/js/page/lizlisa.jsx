import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Component
import LeftNav from '../components/LeftNav.jsx';
import ItemList from '../components/ItemList.jsx';
import BottomTabs from '../components/BottomTabs.jsx';

export default class LizLisa extends React.Component {
    componentDidMount () {
      this.props.setListsAsync();
    }
    render () {
        let { GridLists } = this.props;
        return (
            <MuiThemeProvider>
                <div id="MainList" style={{display: "flex"}}>
                  <LeftNav/>
                  <ItemList GridLists={ GridLists }/>
                  <BottomTabs />
                </div>
            </MuiThemeProvider>
        );
    }
}
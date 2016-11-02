//React
import React from 'react';
import ReactDOM from 'react-dom';
//Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//ReactRouter && Redux
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
const Action = require('./actions/common.js');
const Store = require('./stores/common.js');
//Tap Event
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
//Fetch
import 'whatwg-fetch';
//Style 
import '../css/main.css';
//Components
import Header from './components/Header.jsx';
import LeftDrawer from './components/LeftDrawer.jsx';
//Page
import Main from './page/main.jsx';
import About from './page/about.jsx';
import LizLisa from  './page/lizlisa.jsx'

export default class App extends React.Component {
  constructor (props, context) {
    super(props, context);
      this.state = {
    };
  }
  //Dispatch function
  handleDrawerStatus (status){
    this.props.dispatch(Action.setDrawer(status));
  }
  handleListType (type){
    this.props.dispatch(Action.setListType(type));
  }
  //Async Dispatch function
  async setListsAsync (brand, type) {
    let res = await fetch('/lizlisa/getsalelist');
    let lists = await res.json();
    this.props.dispatch(Action.setLists(lists));
  }
  //Do Before Mount 
  componentWillMount () {
    this.props.dispatch(Action.setDrawer(false));
  }
  render () {
    const Child = this.props.children;
    const style = {
    }
    let {drawerStatus, GridLists} = this.props.reducer;
    GridLists = GridLists || [];
    const props = {
      '/main': {
      },
      '/lizlisa': {
        setListsAsync: this.setListsAsync.bind(this),
        GridLists
      },
      '/about': {

      }
    }
    return (
      <div>
        <Header style={style} handleDrawerStatus={ this.handleDrawerStatus.bind(this) }/>
        <LeftDrawer drawerStatus={drawerStatus} handleDrawerStatus={ this.handleDrawerStatus.bind(this) }/>
        {Child && React.cloneElement(Child, props[Child.props.route.page || Child.props.route.path])}
      </div>
    );
  }
}
const mapActionToProps = dispatch => {
  return {
    dispatch: dispatch,
  };
};

const ConnectedApp = connect(state => state, mapActionToProps)(App);

ReactDOM.render(
  <Provider store={ Store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ ConnectedApp }>
        <IndexRoute page="/main" component={ Main }/>
        <Route path="/lizlisa" component={ LizLisa }/>
        <Route path="/about" component={ About }/>
      </Route>
    </Router>
  </Provider>, 
  document.querySelector('#container')
);
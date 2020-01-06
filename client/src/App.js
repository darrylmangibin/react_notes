import React, { Component } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from './actions/notes';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';

class App extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" exact component={AboutPage} />
          <Route path="/edit/:id" exact component={EditPage} />
          <Route path="/create" exact component={CreatePage} />
          <Route path="/" exact component={HomePage} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default connect(null, {
  getData
})(App);
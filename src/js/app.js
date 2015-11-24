import React, { PropTypes } from 'react';

import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './header';
import Tweet from './tweet';
import TweetList from './tweet_list';
import Footer from './footer';
import Users from './users'
import AuthForm from './auth-form'


class App extends React.Component {
  render () {
    return(
      <div className="Main">
        <Header/>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    )
  }
};

const routes = (
  <Router>
    <Route path='/' component={App}>
      <Route name='login' path='login' component={AuthForm}></Route>
      <Route path='register' component={AuthForm}></Route>
      <Route path='tweet_list' component={TweetList}></Route>
      <Route path='users' component={Users}></Route>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));

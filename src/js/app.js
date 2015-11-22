import React, { PropTypes } from 'react';

import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';

import Header from './header';
import Tweet from './tweet';
import TweetList from './tweet_list';
import Register from './register';
import Footer from './footer';


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

let routes = (
  <Router>
    <Route path='/' component={App}>
      <Route path='/register' component={Register}></Route>
      <Route path='/tweet_list' component={TweetList}></Route>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));

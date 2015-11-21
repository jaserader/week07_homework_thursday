import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import Header from './header';
import Tweet from './tweet';
import TweetList from './tweet_list';
import Register from './register';


class App extends React.Component {
  render () {
    return(
      <div className="Main">
        <Header/>
        <TweetList/>
        <Register/>
      </div>
    )
  }
};

ReactDOM.render(<App/>,document.getElementById('app'));

export default App;

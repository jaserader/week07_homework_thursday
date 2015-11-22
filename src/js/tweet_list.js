import React from 'react';
import Jquery from 'jquery';

import {Router, Route, Link} from 'react-router';

import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      users: [],
      tweets: []
      };
    }

  componentDidMount(){
    Jquery.ajax("https://twitterapii.herokuapp.com/users.json?include=tweets").then( response => {

      this.setState({
        hasLoaded: true,
        users: response.data,
        tweets: response.included
      });
    })
  }

  render () {
    let email;
    let tweets = this.state.tweets.map(tweet => {
      this.state.users.forEach(user => {
        if (user.id === tweet.relationships.user.data.id){
         email= user.attributes.email;
          }
      });

    return <Tweet key={tweet.id} email={email} tweet={tweet.attributes.body} created={tweet.attributes.created_at}/>
      });

    return(
      <ul className="tweets">
        {tweets}
      </ul>
    )}
}

export default TweetList;

import React from 'react'
import jQuery from 'jquery';

class Tweet extends React.Component{

  render(){
    return(
      <li className="tweet">
        <a href="#">{this.props.email}</a>
        <p>{this.props.tweet}</p>
        <p>{this.props.created}</p>
      </li>
      )
    }
  };

export default Tweet;

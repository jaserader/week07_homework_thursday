import React, { PropTypes } from 'react';

class Header extends React.Component {
  render(){
    return (
      <header>
        <span><i className="fa fa-twitter"></i>twitter</span>
        <a href="#">Home</a>
        <a href="#/tweet_list">Tweet List</a>
        <a href="#/register">Register</a>
        <a href="#/login">Login</a>
      </header>
    )
  }
}

export default Header;

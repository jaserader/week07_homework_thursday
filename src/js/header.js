import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <header>
        <span><i className="fa fa-twitter"></i>twitter</span>
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </header>
    )
  }
}

export default Header;

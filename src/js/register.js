import React from 'react';

class Register extends React.Component {
  constructo

  render(){
    return(
      <form>
        <span>Email:</span>
          <input placeholder="example@email.com"></input>
        <span>Password:</span>
          <input></input>
        <span>Confirm Password:</span>
          <input></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }

}

export default Register;

import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <form>
        <span>Email:</span>
          <input placeholder="example@email.com"></input>
        <span>Password:</span>
          <input></input>
        <input type="submit" value="Login"></input>
      </form>
    )
  }
}

export default Login;

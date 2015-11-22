import React, { PropTypes } from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);

    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

 //  handleSubmitBtn(e) {
 //   // store a reference to the keypress
 //   let key = e.which;
 //   let ENTER_KEY = 13; // we know that the enter key is key 13
 //
 //   // if the key that was pressed was the enter key
 //   // we want to save the task to the server and update our todos list`
 //   if (key === ENTER_KEY) {
 //     let task = this.refs.task.value;
 //     this.saveTask(task);
 //     this.refs.task.value = '';
 //   }
 // }

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

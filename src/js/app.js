import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';


class App extends React.Component {
  constructor(props) {
    // do all the stuff that our react.component's constructor would
    // normally do.
    super(props);

    this.state = {
        hasLoaded: false,
      };
    }

  render() {
    return(
      <div>
        Test
      </div>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;

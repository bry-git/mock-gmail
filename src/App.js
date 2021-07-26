
import './App.css';
import React from "react"
import Inbox from './components/inbox';
//import dataCompose from './components/dataCompose.jsx'
import Compose from './components/compose';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }


  }
  render () {
    return (
      <div className="App">
        <Compose/>
          <Inbox/>
      </div>
    );
  }

};

export default App;

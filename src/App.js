
import './App.css';
import React from "react"
import Inbox from './components/inbox';
import dataCompose from './components/dataCompose.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }


  }
  render () {
    return (
      <div className="App">
        <button onClick={<dataCompose />}>Compose Email</button>
        <ul className=" Emails">
          <Inbox />
        </ul>
      </div>
    );
  }

};

export default App;

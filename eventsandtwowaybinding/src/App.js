import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
        this.state = {
          name: 'sasi'
  } 
  }
  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <br/>
      {/* two way binding */}
      <input type="text" onChange={this.changeNameFromInput} />
      <br/>
      <button onClick={() => this.changeName('dhar:(')}>Change Using Anon Function</button>
      <br/>
      {/* bind is more effiecent */}
      <button onClick={this.changeName.bind(this, 'jonchhe :)')}>Change Using Bind</button>
        <br/><br/><br/>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
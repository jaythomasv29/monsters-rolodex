import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
    console.log('1', 'constructor runs 1st')
    
  }

  // lifecycle method ** WHEN IT FIRST RENDERS -> componentDidMount
  // ran whenever the component mounts
  componentDidMount() {
    console.log('I mounted')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({monsters: data})
      })
  };

  render() {
    console.log('2', 'render method')
    return (
      <div>
      {this.state.monsters.map((monster, idx) => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>))}
      </div>
    );
  }
}

export default App;

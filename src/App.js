import React, { Component } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldValue: ''
    };
    
  }

  // lifecycle method ** WHEN IT FIRST RENDERS -> componentDidMount
  // ran whenever the component mounts
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response => response.json())
      // .then(data => this.setState({ monsters: data }))
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const monsters = await res.json()
      this.setState({ monsters})

  };

  handleSearchChange(e) {
    // set the searchField state to input value
    const searchFieldValue = e.target.value.toLowerCase()
    this.setState({ searchFieldValue })
  }

  render() {
    console.log('render from app');
    const {monsters, searchFieldValue} = this.state
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchFieldValue)
    ))
    return (
      <div>
        <input 
          onChange={ (event) => { this.handleSearchChange(event) } } 
          className="search-box" type="search" placeholder="search monsters"
        />
        <SearchBox />
        <CardList monsters={ filteredMonsters }/>
     
      </div>
    );
  }
}

export default App;

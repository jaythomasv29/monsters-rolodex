import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFieldValue: ''
//     };
//     // this.handleSearchChange = this.handleSearchChange.bind(this)
    
//   }

//   // lifecycle method ** WHEN IT FIRST RENDERS -> componentDidMount
//   // ran whenever the component mounts
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => this.setState({ monsters: data }))
//       // const res = await fetch('https://jsonplaceholder.typicode.com/users')
//       // const monsters = await res.json()
//       // this.setState({ monsters})

//   };

//   handleSearchChange = (event) => {
//     // set the searchField state to input value
//     let searchFieldValue = event.target.value.toLocaleLowerCase()
//     console.log(searchFieldValue);
//     this.setState(() => {
//       return {searchFieldValue: searchFieldValue }
//     })
//   }

//   render() {
//     console.log('render from app');
//     const {handleSearchChange} = this
//     const {monsters, searchFieldValue} = this.state
//     const filteredMonsters = monsters.filter(monster => (
//       monster.name.toLocaleLowerCase().includes(searchFieldValue)
//     ))
//     return (
//       <div>
//         <h1 className="app-title">Monster Phonebook</h1>
//         <SearchBox handleSearchChange={handleSearchChange} className='search-box' placeholder='Search Monsters'/>
//         <CardList monsters={ filteredMonsters }/>
     
//       </div>
//     );
//   }
// }
const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([monsters])

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setMonsters(data)
      } catch (e) {
          console.log(e)
      }
    }
    fetchData()
  }, [])

  const handleSearchChange = (event) => {
    let searchFieldString = event.target.value.toLocaleLowerCase()
    // set the state using useState method
    setSearchFieldValue(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => (
            monster.name.toLocaleLowerCase().includes(searchFieldValue)
    ))
    setFilteredMonsters(newFilteredMonsters)
    console.log('filter effect')
  }, [monsters, searchFieldValue])

  return (
    <div>
      <h1 className="app-title">Monster Phonebook</h1>
      <SearchBox handleSearchChange={handleSearchChange} className='search-box' placeholder='Search Monsters'/>
      <CardList monsters={ filteredMonsters }/>
         
    </div>
  )
}
export default App;

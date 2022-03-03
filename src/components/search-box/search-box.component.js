import './search-box.styles.css'
// class SearchBox extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { handleSearchChange, placeholder, className} = this.props
    
//     return(
//       <input 
//       onChange={handleSearchChange} 
//       className={className} type="search" placeholder={placeholder}
//     />
//     )
//   }
// }

const SearchBox = ({handleSearchChange, placeholder, className}) => {
  return (
    <input 
      onChange={handleSearchChange} 
      className={className} type="search" placeholder={placeholder}
    />
  )
}

export default SearchBox
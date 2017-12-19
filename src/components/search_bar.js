import React , {Component} from 'react'


//const SearchBar  = ()=> <input />

class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {term:''}
  }



  render() {
    return (
      <div className="search-bar">
       <input onChange={event=> this.setState({term:event.target.value}) } />
      // Value of the input: {this.state.term}
       </div>
     )
  }
}
//   onInputChange(event) {
//   }
//

export default SearchBar

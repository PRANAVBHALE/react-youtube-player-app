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
       <input onChange={event=> this.onInputChange(event.target.value) } />
      // Value of the input: {this.state.term}
       </div>
     )
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSeachTermChange(term)
  }
}
//   onInputChange(event) {
//   }
//

export default SearchBar

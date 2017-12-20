import _ from 'lodash'

import React,{Component} from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const Api_Key =' AIzaSyBK2pEmkWAjN_9DVkw9y_yEo6EGHZjMAKo'




//Create a new component.this component should produce some html
class  App extends Component{

  constructor(props){
    super(props)

    this.state = {
      videos : [],
      selectedVideo : null
    }
    this.videoSearch('despacitos')

  }

  videoSearch(term){
      YTSearch({key:Api_Key,term:term, limit: 20},(videos) => {
        //console.log(data);
    //    this.setState({videos:videos})   //key:vidoes value:data this n below are same statements
        this.setState({
          videos:videos,
          selectedVideo:videos[0]
        })
      })
    }

    render(){
      const videoSearch = _.debounce((term) =>{this.videoSearch(term)},300)

      return (
      <div>
       <SearchBar onSeachTermChange = {videoSearch}/>
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList onVideoSelect ={selectedVideo =>this.setState({selectedVideo}) }
        videos={this.state.videos}/>
      </div>
    )
  }
}







// Take this components generated HTML and put it on the page ie in the DOM

//ReactDom.render(App)   // class
//ReactDom.render(<App /> , document.querySelector(container or id))   //instance

ReactDom.render(<App />, document.querySelector('.container'))   //instance

//

import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = (props) => {
//  debugger
  const videoItems = props.videos.map((video)=>{
    return (
      <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video = {video} />
    )
  })

  //const videos = props.videos

  return(
    <ul className="col-md-4 list-group">
    //{props.videos.length}
  //  debugger
    {videoItems}
    </ul>
  )
}

export default VideoList

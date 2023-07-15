import { useDispatch } from "react-redux"
import { youTubeActions } from "../store"

const VideoItem = ({video}) => {
    const dispatch = useDispatch()

    const videoPlayHandler =(video)=>{
      dispatch(youTubeActions.setSelectedVideo(video))
    }

  return (
    <div className="d-flex gap-1"  onClick={()=>{videoPlayHandler(video)}} style={{cursor:'pointer'}}>
        <div className="rounded">
            <img className="rounded" src={video.snippet.thumbnails.medium.url} alt="not found" />
        </div>
        <div>
            <h3>{video.snippet.title}</h3>
            <p className="fw-medium">{video.snippet.description}</p>
            <h5 className="text-start ms-2 mt-5">Channel: {video.snippet.channelTitle}</h5>
        </div>
    </div>
  )
}

export default VideoItem
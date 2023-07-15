import { useSelector } from "react-redux"
import VideoItem from "./VideoItem"

const VideosList = () => {
    const videos = useSelector(state=>state.youtube.videos)
  return (
    <div>
        <ul className="mt-5" style={{listStyle:'none'}}>
        {videos.map(video=>
            <li key={video.id.videoId} className="my-3 border p-2 border-bottom-2 shadow">
                <VideoItem video={video} />
            </li>
        )}
        </ul>
    </div>
  )
}

export default VideosList
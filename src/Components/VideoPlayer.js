import React from 'react'
import { useSelector } from 'react-redux'

const VideoPlayer = () => {
    const selectedVideo = useSelector(state => state.youtube.selectedVideo)

    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    return (
        <div className='m-4 mt-5 border p-3 shadow'>
            <iframe className='rounded' controls width="1150" height="480" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title="ISRO&#39;s AMAZING STORY &amp; Chandrayaan | Fuelling India&#39;s Scientific Temper | Akash Banerjee &amp; Avishrant" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h2>{selectedVideo.snippet.title}</h2>
            <p className='fw-semibold'>{selectedVideo.snippet.description}</p>
        </div>
    )
}

export default VideoPlayer;

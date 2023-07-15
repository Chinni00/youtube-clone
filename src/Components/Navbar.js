import React, { useEffect, useRef } from 'react'

import YTSearch from 'youtube-api-search'
import { useDispatch, useSelector } from 'react-redux';
import { youTubeActions } from '../store';


const key ='AIzaSyBJKSjk-Rnt8UieekTaqQAezdDh4xVMYBc';

const Navbar = () => {
  const videosList = useSelector(state=>state.youtube.videos)
  let term = useSelector(state=>state.youtube.term)
  const dispatch = useDispatch();
  const searchInputRef = useRef();

   const getVideos=()=>{
    const enteredInputSearch = searchInputRef.current.value;
    term = enteredInputSearch;
    YTSearch({key:key,term:term},videos=>{
          dispatch(youTubeActions.setVideos(videos))
        })
      }

  useEffect(()=>{
    YTSearch({key:key,term:term},videos=>{
      dispatch(youTubeActions.setVideos(videos))
    })
  },[])    

console.log(videosList)
console.log(videosList[0])
  return (
    <div>
       <nav className="navbar navbar-expand-lg text-lite bg-dark container-fluid">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 text-white border px-2 rounded" href="">My Tube</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <input className="form-control me-2" type="search" ref={searchInputRef} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" onClick={getVideos} >Search</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
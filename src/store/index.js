import { createSlice } from "@reduxjs/toolkit";

const initialState = {videos:[],term:'telugu news',selectedVideo:null}

const youTubeSlice = createSlice({
    name:'youtube',
    initialState:initialState,
    reducers:{
        setVideos(state,action){
            state.videos = action.payload
            state.selectedVideo= state.videos[0]
        },
        setTerm(state,action){
            state.term = action.payload
        },
        setSelectedVideo(state,action){
              state.selectedVideo = action.payload
        }
    }
})


export const youTubeActions = youTubeSlice.actions;
export default youTubeSlice;
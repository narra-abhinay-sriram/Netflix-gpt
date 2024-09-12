import { useSelector } from "react-redux"
import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
import useNowPlayingMovies from "./useNowPlayingMovies"
import usePopular from "./usePopular"
import usePopularseries from "./usePopularseries"
import useTopRated from "./useTopRated"
import useTopseries from "./useTopseries"
import useUpComing from "./useUpComing"
import React from "react"
import GptSearchbox from "./GptSearchbox"

const Browse = () => {
  
 
 useNowPlayingMovies()
 usePopular()
 useTopRated()
 useUpComing()
 useTopseries()
 usePopularseries()
 const gptstate=useSelector((store)=>store.gpt.gptstate)
 
  
  return (
    <div >
      <div>
       <Header/>
       </div>
      {gptstate ? <React.Fragment>
      <Maincontainer/>
      <Secondarycontainer/>
      </React.Fragment> : <GptSearchbox/>}
      </div>
  )
}

export default Browse

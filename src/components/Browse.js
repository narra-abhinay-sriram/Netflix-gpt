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
import Gptsearch from "./Gptsearch"
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
      {gptstate ? <Gptsearch/> : <React.Fragment>
      <Maincontainer/>
      <Secondarycontainer/>
      </React.Fragment>}
      </div>
  )
}

export default Browse

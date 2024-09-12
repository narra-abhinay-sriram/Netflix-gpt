import React from 'react'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'
import Mainvideo from './Mainvideo'
const Maincontainer = () => {
    const movies=useSelector((store)=>store.movies.nowplayingmovies)
    if(!movies) return
    const num=Math.floor((Math.random()*10))
    const num2=Math.floor((Math.random()*10))
    
    const mainmovie=movies[num+num2]
   // console.log(mainmovie.id)
   // console.log(mainmovie)
  return (
    <div>
     <Videotitle title={mainmovie.original_title} overview={mainmovie.overview} />
     <Mainvideo id={mainmovie.id}/>
    </div>
  )
}

export default Maincontainer

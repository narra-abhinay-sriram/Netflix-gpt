import { useEffect } from "react"
import { useDispatch,  } from "react-redux"
import {  addtoprated } from "../utils/movieslice"
import { Api_opt } from "../utils/constants"

const useTopRated = () => {
    const dispatch=useDispatch()
    useEffect( ()=>{
      // if(!toprated)
        fetchdata()
    },[])

    const fetchdata= async ()=>{

        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Api_opt)

        const datajson=await data.json()
//console.log(datajson.results)
      //  console.log(datajson.results)
        dispatch(addtoprated(datajson.results))
      
    }

}

export default useTopRated

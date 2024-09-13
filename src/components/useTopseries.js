import { useEffect } from "react"
import { useDispatch,  } from "react-redux"
import {   addtopseries } from "../utils/movieslice"
import { Api_opt } from "../utils/constants"

const useTopseries = () => {
    const dispatch=useDispatch()
    useEffect( ()=>{
      //  if(!topseries)
        fetchdata()
    },[])

    const fetchdata= async ()=>{

        const data= await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',Api_opt)

        const datajson=await data.json()
//console.log(datajson.results)
      //  console.log(datajson.results)
        dispatch(addtopseries(datajson.results))
      
    }

}

export default useTopseries

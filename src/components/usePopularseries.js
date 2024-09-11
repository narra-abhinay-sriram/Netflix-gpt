import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {   addpopularseries } from "../utils/movieslice"
import { Api_opt } from "../utils/constants"

const usePopularseries = () => {
    const dispatch=useDispatch()
    useEffect( ()=>{
        fetchdata()
    },[])

    const fetchdata= async ()=>{

        const data= await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',Api_opt)

        const datajson=await data.json()
//console.log(datajson.results)
      //  console.log(datajson.results)
        dispatch(addpopularseries(datajson.results))
      
    }

}

export default usePopularseries

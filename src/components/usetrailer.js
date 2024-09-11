import { useEffect } from "react"
import { Api_opt } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addtrailer } from "../utils/movieslice"

const useTrailer = (id) => {
   
    const dispatch=useDispatch()
    useEffect(()=>{
        fetchdata()
      },[])
      const fetchdata=async()=>{
      
        const data =await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",Api_opt)
        const datajson=await data.json()
        const filtertrailer=datajson.results.filter((item)=>item.type==="Trailer")
        const trailer=filtertrailer?filtertrailer[0]:datajson.results[0]
        //console.log(trailer)
        dispatch(addtrailer(trailer))

       
      }
}

export default useTrailer

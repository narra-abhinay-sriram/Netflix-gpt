import { useEffect } from "react"
import { Api_opt } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addnowplaying } from "../utils/movieslice"


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    useEffect( ()=>{
        fetchdata()
    },[])

    const fetchdata= async ()=>{

        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',Api_opt)
        const datajson=await data.json()

      //  console.log(datajson.results)
        dispatch(addnowplaying(datajson.results))
      
    }



}
export default useNowPlayingMovies
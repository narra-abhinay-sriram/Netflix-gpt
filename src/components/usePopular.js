import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addpopular } from "../utils/movieslice"
import { Api_opt } from "../utils/constants"

const usePopular = () => {
    const dispatch=useDispatch()
    useEffect( ()=>{
        fetchdata()
    },[])

    const fetchdata= async ()=>{

        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',Api_opt)

        const datajson=await data.json()
//console.log(datajson.results)
      //  console.log(datajson.results)
        dispatch(addpopular(datajson.results))
      
    }

}

export default usePopular

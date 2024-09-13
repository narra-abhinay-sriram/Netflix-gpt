import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const GptMovie = () => {

  const {gptmovies,tmdbresults}=useSelector(store=>store.gpt)
  if(!gptmovies)return

 // console.log(gptmovies)
  //console.log(tmdbresults)
  return (
    <div className="pt-48 bg-black text-white bg-opacity-70">
      {gptmovies.map((movie,index)=><Movielist key={movie} title={movie} movies={tmdbresults[index]} />)}
    </div>
  )
}

export default GptMovie

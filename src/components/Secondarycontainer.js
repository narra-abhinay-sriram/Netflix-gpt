import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const Secondarycontainer = () => {
    const movies=useSelector(store=>store.movies)
   // console.log(movies)
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20">
<Movielist title={"Now Playing"} movies={movies?.nowplayingmovies} />
<Movielist title={"Top Rated"} movies={movies?.toprated} />
<Movielist title={"Popular"} movies={movies?.popular} />

<Movielist title={"Now Playing"} movies={movies?.nowplayingmovies} />
<Movielist title={"Now Playing"} movies={movies?.nowplayingmovies} />
<Movielist title={"Now Playing"} movies={movies?.nowplayingmovies} />

      </div>
    </div>
  )
}

export default Secondarycontainer

import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const Secondarycontainer = () => {
    const movies=useSelector(store=>store.movies)
   // console.log(movies)
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20">
<Movielist title={"Top Rated TV Series"} movies={movies?.topseries} />

<Movielist title={"Top Rated Movies"} movies={movies?.toprated} />
<Movielist title={"Trending World Wide Movies"} movies={movies?.nowplayingmovies} />

<Movielist title={"Up Coming Movies"} movies={movies?.upcoming} />
<Movielist title={"Popular Movies"} movies={movies?.popular} />


<Movielist title={"Popular Series To watch"} movies={movies?.popularseries} />

      </div>
    </div>
  )
}

export default Secondarycontainer

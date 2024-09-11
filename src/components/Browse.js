import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
import useNowPlayingMovies from "./useNowPlayingMovies"
import usePopular from "./usePopular"
import useTopRated from "./useTopRated"

const Browse = () => {
 
 useNowPlayingMovies()
 usePopular()
 useTopRated()
 
  
  return (
    <div >
      <div>
       <Header/>
       </div>
      <Maincontainer/>
      <Secondarycontainer/>
      </div>
  )
}

export default Browse

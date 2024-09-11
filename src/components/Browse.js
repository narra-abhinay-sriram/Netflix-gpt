import Header from "./Header"
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
import useNowPlayingMovies from "./useNowPlayingMovies"
import usePopular from "./usePopular"
import usePopularseries from "./usePopularseries"
import useTopRated from "./useTopRated"
import useTopseries from "./useTopseries"
import useUpComing from "./useUpComing"

const Browse = () => {
 
 useNowPlayingMovies()
 usePopular()
 useTopRated()
 useUpComing()
 useTopseries()
 usePopularseries()
 
  
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

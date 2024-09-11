import Header from "./Header"
import Maincontainer from "./Maincontainer"
import useNowPlayingMovies from "./useNowPlayingMovies"

const Browse = () => {
 
 useNowPlayingMovies()
 
  
  return (
    <div >
      <div>
       <Header/>
       </div>
      <Maincontainer/>
      </div>
  )
}

export default Browse

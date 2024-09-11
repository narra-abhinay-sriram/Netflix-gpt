import Header from "./Header"
import useNowPlayingMovies from "./useNowPlayingMovies"

const Browse = () => {
 
 useNowPlayingMovies()
 
  
  return (
    <div >
      <div>
       <Header/>
       </div>
      
      </div>
  )
}

export default Browse

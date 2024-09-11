import { useSelector } from "react-redux"
import useTrailer from "./usetrailer"



const Mainvideo = ({id}) => {
 
  
 useTrailer(id)
 const trailer=useSelector((store)=>store.movies.trailer)
 if(!trailer) return
 
  return (
    <div className="">
     <iframe 
  className="w-screen aspect-video h-[620px]" 
  src={"https://www.youtube.com/embed/" + trailer.key + "?autoplay=1&mute=1&modestbranding=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" + trailer.key}
  title="YouTube video player" 
  allowFullScreen 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin">
</iframe>

    </div>
  )
}

export default Mainvideo

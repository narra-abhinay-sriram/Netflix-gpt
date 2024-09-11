import Moviesdisplay from "./Moviesdisplay"

const Movielist = ({title,movies}) => {
   // console.log(movies)
    if(!movies) return 
  return (
    <div className="px-6 overflow-hidden">
      <div>
        <h1 className="text-2xl py-4 text-white">{title}</h1>
      </div>
      <div className=" flex  scroll ">
      <div className="flex overflow-x-scroll scrollbar-hide m-3 ">
{movies.map((movie)=>
    (<Moviesdisplay key={movie.id} image_id={movie.poster_path} />))}
      </div>
      </div>
    </div>
  )
}

export default Movielist

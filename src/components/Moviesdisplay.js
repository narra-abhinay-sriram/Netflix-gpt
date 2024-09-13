
const Moviesdisplay = ({image_id}) => {
  if(!image_id) return
  return (
    <div>
      <div className="w-[150px] mr-6   ">
        <img className=" hover:cursor-pointer  "
        src={ "https://image.tmdb.org/t/p/w500/"+image_id} 
        alt="movie" />
      </div>
    </div>
  )
}

export default Moviesdisplay

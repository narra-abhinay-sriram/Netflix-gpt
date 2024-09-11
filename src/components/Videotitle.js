import { useState } from "react"

const Videotitle = ({title,overview}) => {
  const [overviews,setover]=useState(true)
  const handleclick=()=>{
    setover(!overviews)
  }
  return (
    <div className="w-screen aspect-video  pt-60 px-16 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-6xl text-balance">{title}</h1>
     {overviews && <p className="w-3/5 mt-2">{overview}</p>}
      <div className="flex mt-2 ">
        <button className="bg-white text-black px-11 py-1  font-semibold mt-1 flex hover:bg-opacity-80 rounded-lg">
           <p className="text-3xl">▷</p>
          <p className="py-2 ml-1">Play</p> 
           </button>
        <button onClick={handleclick} className="bg-stone-500 text-white px-11 py-1 ml-2 mt-1  font-semibold flex rounded-lg opacity-80">
        <p className="text-3xl">ⓘ</p>
        <p className="py-2 ml-1">More Info</p> 
        </button>
      </div>
    </div>
  )
}

export default Videotitle

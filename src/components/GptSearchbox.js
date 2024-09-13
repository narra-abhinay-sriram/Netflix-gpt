import { useRef } from "react"
import { Api_opt, } from "../utils/constants"
import { langs } from "../utils/langconst"
import { useDispatch, useSelector } from "react-redux"
import { client } from "../utils/openai"
import { addgptmovies } from "../utils/gptslice"
const GptSearchbox = () => {
  const language=useSelector((store)=>store.lang.key)
  
  const inputSearch=useRef()
  const dispatch =useDispatch()

  const fetchmovieinfo=async(movie)=>{
   // console.log(movie)
    const data= await fetch( "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",Api_opt)
    const datajson=await data.json()
  //  console.log(datajson)
    return (datajson.results)

  }

  const handleopenai=async ()=>{
    const input ="Recommend only only 5 movies related to (" + inputSearch.current.value + "), separated by commas.no fucking numbering"



    const Gptresults = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });
    
    //console.log(Gptresults.choices[0]?.message?.content);
    const gptmovies=Gptresults.choices[0]?.message?.content.split(",")
  //  console.log(gptmovies)
    const tmdbpromise=gptmovies.map((movie)=>fetchmovieinfo(movie))
    const tmdbmovies=await Promise.all(tmdbpromise)
   // console.log(tmdbmovies)
    dispatch(addgptmovies({movies:gptmovies,movieresults:tmdbmovies}))
    
    
  }
  
  return (
    <div>
     
      <form onSubmit={(e)=>{e.preventDefault()}}>
      <div className="pt-36 w-3/6 text-center ml-72 absolute">
    <div className="bg-black grid grid-cols-12 p-3 rounded-md opacity-90">
    <input ref={inputSearch}
     className="col-span-9 p-3 text-black  rounded-md placeholder-black"
    type="text"
     placeholder={langs[language].placeholder} />
   
    <button onClick={handleopenai}
    className="text-white col-span-3 ml-3  px-5 bg-red-700 rounded-md hover:bg-red-400">
        {langs[language].search}
        </button>
        </div>
</div>
</form>
    </div>
  )
}

export default GptSearchbox

import { login_bg} from "../utils/constants"
import { langs } from "../utils/langconst"
import { useSelector } from "react-redux"
const GptSearchbox = () => {
  const language=useSelector((store)=>store.lang.key)
  
  return (
    <div>
      <div className="absolute">
        <img 
        src={login_bg}
         alt="logo" />
      </div>
      <div className="pt-36 w-3/6 text-center ml-72 absolute">
    <div className="bg-black grid grid-cols-12 p-3 rounded-md opacity-90">
    <input
     className="col-span-9 p-3 text-black  rounded-md placeholder-black"
    type="text"
     placeholder={langs[language].placeholder} />
   
    <button 
    className="text-white col-span-3 ml-3  px-5 bg-red-700 rounded-md hover:bg-red-400">
        {langs[language].search}
        </button>
        </div>
</div>

    </div>
  )
}

export default GptSearchbox

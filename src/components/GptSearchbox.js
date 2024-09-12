import { login_bg} from "../utils/constants"
const GptSearchbox = () => {
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
     className="col-span-9 p-3 text-black place-content-center rounded-md hover:border-blue-900"
    type="text"
     placeholder="What do you like to watch today?" />
   
    <button 
    className="text-white col-span-3 ml-3  px-5 bg-red-700 rounded-md hover:bg-red-400">
        Search
        </button>
        </div>
</div>

    </div>
  )
}

export default GptSearchbox

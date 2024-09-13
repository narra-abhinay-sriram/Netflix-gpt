import GptMovie from "./GptMovie"
import GptSearchbox from "./GptSearchbox"
import { login_bg } from "../utils/constants"

const Gptsearch = () => {
  return (
    <div>
       <div className="fixed -z-10">
        <img 
        src={login_bg}
         alt="logo" />
      </div>
      <GptSearchbox/>
      
      <GptMovie/>
      
    </div>
  )
}

export default Gptsearch

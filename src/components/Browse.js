import Header from "./Header"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeuser } from "../utils/userslice"
import { useSelector } from "react-redux"
const Browse = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  console.log(user)
 // console.log(user)
  const handleclick=()=>{
    dispatch(removeuser())
    navigate("/")

  }
  return (
    <div className="flex justify-between">
      <div>
       <Header/>
       </div>
       {user&&
       <div className="z-20 mr-4">
        <img  className="w-9"
        src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSsxEXDMBJT5sYENtWDVUD_TENcTVl5TzhDE-9NVJl1noYHeT7cgW953NEzODHwYhsyZ5P-15pDIT1RkQc4yEjHcqyW_I0s.png?r=7f1" 
       alt="usericon" />
       <div className="hover:text-lg">
       <button onClick={handleclick} className="mt-1 font-bold  text-white   pr-3">Sign Out</button>
       </div>

       </div>}
      
    </div>
  )
}

export default Browse

import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser,removeuser } from "../utils/userslice";
import { useNavigate } from "react-router-dom";
import { header_icon } from "../utils/constants";
import { useSelector } from "react-redux"
import {  signOut } from "firebase/auth";
import { sign_out_icon } from "../utils/constants";
const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const user=useSelector((store)=>store.user)
  useEffect(()=>{
    //const user=auth.currentUser
   
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName}=user
      dispatch(adduser({uid:uid,email:email,displayName:displayName}))
      navigate("/browse")
       // ...
     } else {
       // User is signed out
       // ...
       dispatch(removeuser())
       navigate("/")
     }
     
   });
   return ()=> unsubscribe()
   
 },[])
 
 const handleclick=()=>{
  dispatch(removeuser())
  
signOut(auth).then(() => {
// Sign-out successful.
}).catch((error) => {
// An error happened.
});


}

  return (
<div className="flex justify-between items-center w-screen py-3 bg-gradient-to-b from-black absolute z-10">
<div className="px-6 ">
      <img className="w-44 " src={header_icon} alt="logo" />
    </div>
    {user&&
       <div className="flex items-center space-x-4 mr-4">
        <img  className="w-9"
        src={sign_out_icon}
       alt="usericon" />
       <div className="hover:text-lg">
       <button onClick={handleclick} className="mt-1 font-bold  text-white   pr-3">Sign Out</button>
       </div>

       </div>}
    </div>
  )
}

export default Header

import { createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { adduser, removeuser } from "../utils/userslice"
import { useEffect } from "react"
import {  onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch=useDispatch()

    const get=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }

    ])
   
    useEffect(()=>{
     //const user=auth.currentUser
    
     onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
       const {uid,email,displayName}=user
       dispatch(adduser({uid:uid,email:email,displayName:displayName}))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser())
      }
    });
    
  },[])
    

  return (
    <div>
      <RouterProvider router={get}/>
    </div>
  )
}

export default Body

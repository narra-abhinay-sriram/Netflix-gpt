import { useState,useRef } from "react"
import Header from "./Header"
import Formvalidate from "./Formvalidate"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { login_bg } from "../utils/constants";

const Login = () => {

const [isSignin,setisSignin]=useState(true)
const email=useRef()
const password=useRef()

const [error,seterror]=useState(null)


const handleclick=()=>{
    setisSignin(!isSignin)
}
const handlerror=()=>{
const messege=  Formvalidate(email.current.value,password.current.value)
 messege?seterror(messege):seterror(null)

 if(!isSignin){
   
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
       // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
     //   const errorMessage = error.message;
       // console.log(errorCode)
        // ..
        seterror(errorCode)
      });
    

 }else{

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
   // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    seterror(errorCode)
  });


 }

}

if(error === "auth/email-already-in-use")

{
    seterror("User-already-exists")

}

  return (
 <div className="">
 <Header/>
 <div className="">
 <img 
 className="absolute bg-gradient-to-r from-black"
  src={login_bg} alt="bg-logo" />
 </div>
      <form onSubmit={(e)=>{e.preventDefault()}}
      className="absolute w-4/12 bg-black  m-auto right-0 left-0 mt-28 text-white opacity-85 py-16 rounded-lg">
        <h1 
        className="font-bold text-3xl ml-14 mr mb-3 py-4">
         {isSignin?"Sign In":"Sign Up"}
         </h1>
        {!isSignin && <input 
        type="text" 
        placeholder="Name" 
        className="p-3 px-16 mb-2 m-2 ml-14 bg-gray-900 rounded-lg border border-white "/>
        }
        <input
        ref={email}
         type="text" 
         placeholder="Email Address" 
         className="p-3 px-16  m-2 ml-14 mb-2 bg-gray-900 rounded-lg border border-white opacity-70 hover:border-l-4"
         />
        <input 
        ref={password}
        type="text" 
        placeholder="Password" 
        className="py-3 m-2  px-16 ml-14 mb-2 bg-gray-900 rounded-lg border border-white opacity-70 hover:border-l-4" 
        />
        <p 
        className="text-center text-red-600">
       {error
       }
       </p>

        <button 
        onClick={handlerror}
        className="p-2 m-2  px-[133px] ml-14 bg-red-600 text-center rounded-lg hover:bg-red-950">
            {isSignin?"SignIn":"SignUp"}
        </button>
        <p 
        className="text-center mt-4 mb-4">
            OR</p>

        <p 
        className="mb-8 p-2 m-2   ml-14 cursor-pointer hover:text-lg" 
        onClick={handleclick}>{isSignin?"New to Netflix? Sign Up Now":"Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login

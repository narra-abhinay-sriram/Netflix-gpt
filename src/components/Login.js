import { useState,useRef } from "react"
import Header from "./Header"
import Formvalidate from "./Formvalidate"

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

}

  return (
 <div>
 <Header/>
 <div className="">
 <img 
 className="absolute"
  src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg
"alt="bg-logo" />
 </div>
      <form onSubmit={(e)=>{e.preventDefault()}}
      className="absolute w-4/12 bg-black  m-auto right-0 left-0 mt-28 text-white opacity-85 py-16 rounded-lg">
        <h1 
        className="font-bold text-3xl ml-14 mr mb-3 py-4">
         {isSignin?"Sign In":"Sign Up"}
         </h1>
        {!isSignin && <input 
        type="text" 
        placeholder="Mobile number" 
        className="p-3 px-16 mb-2 m-2 ml-14 bg-gray-900 rounded-lg border border-white "/>
        }
        <input
        ref={email}
         type="text" 
         placeholder="Email Address" 
         className="p-3 px-16  m-2 ml-14 mb-2 bg-gray-900 rounded-lg border border-white opacity-70"
         />
        <input 
        ref={password}
        type="text" 
        placeholder="Password" 
        className="py-3 m-2  px-16 ml-14 mb-2 bg-gray-900 rounded-lg border border-white opacity-70" 
        />
                <p className="text-center text-red-600">{error}</p>

        <button 
        onClick={handlerror}
        className="p-2 m-2  px-[133px] ml-14 bg-red-600 text-center rounded-lg">
            {isSignin?"SignIn":"SignUp"}
        </button>
        <p 
        className="text-center mt-4 mb-4">
            OR</p>

        <p 
        className="mb-8 p-2 m-2   ml-14 cursor-pointer" 
        onClick={handleclick}>{isSignin?"New to Netflix? Sign Up Now":"Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login

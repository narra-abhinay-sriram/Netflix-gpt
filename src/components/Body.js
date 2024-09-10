import { createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider } from "react-router-dom"
const Body = () => {

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
  return (
    <div>
      <RouterProvider router={get}/>
    </div>
  )
}

export default Body

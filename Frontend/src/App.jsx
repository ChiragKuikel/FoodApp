import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WholePage from "./pages/Home"


const Layout = () =>{
return(
  <>
  <div>
  <Outlet />
  <Footer />
  </div>
  </>

)
}
let router = createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path:'/',
        element:< Home />
      },
      {
        path:'/products',
        element:<Products />
      }
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

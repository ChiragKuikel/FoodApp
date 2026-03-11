import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Footer from "./components/Footer"


const Layout = () =>{
return(
  <>
  <div className="pb-16">
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

import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";


const router = createBrowserRouter([
{
  path:"/",
  Component:Root,
  children:[
    {index: true , Component:Home},
    {path : 'about', Component : About},
    {path : 'product', Component : Product}
  ]

}
])




const App = () => {
 return <RouterProvider  router={router}/>
}

export default App
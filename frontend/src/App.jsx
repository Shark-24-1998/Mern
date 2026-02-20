import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";


const router = createBrowserRouter([
{
  path:"/",
  Component:Root,
  children:[
    {index: true , Component:Home},
    {path : 'about', Component : About},
    {path : 'product', Component : Product},
    {path : '/products/:slug', Component : ProductDetail}
  ]

}
])




const App = () => {
 return <RouterProvider  router={router}/>
}

export default App
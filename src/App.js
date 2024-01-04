import Home from "./UI/Home.jsx"
import Menu, {loader as menuLoader} from "./features/menu/Menu.jsx"
import Cart from "./features/cart/Cart.jsx"
import Order, {loader as orderLoader} from "./features/order/Order.jsx"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder.jsx"
import Error from "./UI/Error.jsx"
import {action as updateOrderAction} from "./features/order/UpdateOrder.jsx"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./UI/AppLayout.jsx"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/menu",
        element: <Menu/>,
        loader: menuLoader,
        errorElement: <Error/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/order/new",
        element: <CreateOrder/>,
        action: createOrderAction
      }
      , 
      {
        path: "/order/:orderId",
        element: <Order/>,
        loader: orderLoader,
        errorElement: <Error/>,
        action: updateOrderAction
      }
    ]
  }
])


export default function App() { 
  return <RouterProvider router={router} />
}
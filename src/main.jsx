import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true, Component:Home,
        loader: ()=> fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      },
      {
        path: '/coffeeDetails/:id',
        loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails
      },

      {
        path:'/updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component:UpdateCoffee
          
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

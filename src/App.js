
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "font-awesome/css/font-awesome.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Basic from './Basic/Basic';

import {RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import About from './About/About';

let routers = createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {path:'About',element:<About/>},
    {index:true,element:<Basic/>},
    {path:'Basic',element:<Basic/>},
    {path:'portofolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>}

  ]}
])



function App() {
  return (
  
    
  <RouterProvider router={routers}></RouterProvider>
  )
}

export default App;

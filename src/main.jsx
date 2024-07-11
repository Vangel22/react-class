import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Login } from './components/Login';
import ErrorPage from './Error';
import { Home } from './pages/Home';
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import App from './App';

const router = createBrowserRouter([
{
  path: "/",
  element: <Login />,
  errorElement: <ErrorPage/>
},
{
  path: "home",
  element: 
    <ProtectedRoutes>
      {/* Some layout wrap also here */}
        <Home />
    </ProtectedRoutes>,
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

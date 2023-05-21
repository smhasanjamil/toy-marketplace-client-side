import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home/Home/Home';
import AllToys from './components/Toys/AllToys/AllToys';
import MyToys from './components/Toys/MyToys/MyToys';
import AddAToy from './components/Toys/AddAToy/AddAToy';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ErrorPage from './ErrorPage/ErrorPage';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './routes/PrivateRoute';
import ViewToyDetails from './components/Toys/ViewToyDetails/ViewToyDetails';
import UpdateToy from './components/Toys/UpdateToy/UpdateToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: "/add-a-toy",
        element: <PrivateRoute><AddAToy /></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateToy /></PrivateRoute>,
        loader: ({params})=> fetch(`https://motor-mart-server.vercel.app/all-cars/${params.id}`)
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><ViewToyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://motor-mart-server.vercel.app/all-cars/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)

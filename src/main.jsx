import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import BooksDetails from './Components/BooksDetails/BooksDetails';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Contact from './Components/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/list_book',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/pages_to_book',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json')
      },
      {
        path: '/book/:id',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('../books.json')

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)

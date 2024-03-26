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
import PagesToBook from './Components/PagesToBook/PagesToBook';
import BooksDetails from './Components/BooksDetails/BooksDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/list_book',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('books.json')
      },
      {
        path: '/pages_to_book',
        element: <PagesToBook></PagesToBook>
      },
      {
        path: '/book/:id',
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch('../books.json')

      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from "./routes/root";
import ErrorPage from "./error-page";

import Notes, { loader as noteLoader, } from "./routes/notes";
import Test, { loader as testLoader, } from './routes/test.jsx';
import EditContact from "./routes/edit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "notes/:noteId",
    element: <Notes />,
    loader: noteLoader,
  }, 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import Index from "./routes/notes/index";
import ErrorPage from "./error-page";
import Note, { loader as noteLoader } from "./routes/notes/note";
import EditNote, { action as editAction } from "./routes/notes/edit";
import CreateNote, { action as createAction } from "./routes/notes/create";
import { action as destroyAction } from "./routes/notes/destroy";
import Signup, {action as userSignUpAction } from "./routes/signup/signup";
import Login, {action as userLoginAction } from "./routes/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "notes/create",
        element: <CreateNote />,
        action: createAction,
      },
      {
        path: "notes/:noteId",
        element: <Note />,
        loader: noteLoader,
      },
      {
        path: "notes/:noteId/edit",
        element: <EditNote />,
        loader: noteLoader,
        action: editAction,
      },
      {
        path: "notes/:noteId/destroy",
        errorElement: <div>Oops! There was an error.</div>,
        action: destroyAction,
      },
    ],
  },{
    path : "/signup",
    element: <Signup/>,
    action:userSignUpAction
  }, {
    path : "/login",
    element: <Login/>,
    action:userLoginAction
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

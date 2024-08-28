import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import Index from "./routes/index";
import ErrorPage from "./error-page";
import Note, { loader as noteLoader } from "./routes/note";
import EditNote, { action as editAction } from "./routes/edit";
import CreateNote, { action as createAction } from "./routes/create";
import { action as destroyAction } from "./routes/destroy";

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
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

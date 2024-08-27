import { Outlet, Link, useLoaderData, Form, redirect } from "react-router-dom";
import { getNotes, createNote } from "../notes";

export async function loader() {
  const notes = await getNotes();
  return { notes };
}

export async function action() {
  return redirect(`/notes/create`);
}

export default function Root() {
  const { notes } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {notes.length ? (
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  <Link to={`notes/${note.id}`}>
                  {note.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No notes</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

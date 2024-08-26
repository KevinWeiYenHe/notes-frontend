import { Form, useLoaderData } from "react-router-dom";
import { getNote } from "../notes";

export async function loader({ params }) {
  const note = await getNote(params.noteId);
  return { note };
}

export default function Note() {
  const { note } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <h1>{note?.title}</h1>
        <p>{note?.content}</p>
        <p>{note?.tags}</p>
      </div>
      <div>
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  );
}

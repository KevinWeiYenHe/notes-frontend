import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";

import { updateNote } from "../notes";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateNote(params.noteId, updates);
  return redirect(`/notes/${params.noteId}`);
}

export default function EditNote() {
  const { note } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Title</span>
        <input
          placeholder="Title"
          aria-label="Title of Note"
          type="text"
          name="title"
          defaultValue={note.title}
        />
      </label>
      <label>
        <span>Content</span>
        <textarea name="content" defaultValue={note.content} rows={20} />
      </label>
      <label>
        <span>Tags</span>
        <input
          placegolder="Tags"
          aria-label="Words associated with the note"
          type="text"
          name="tags"
          defaultValue={note.tags}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}

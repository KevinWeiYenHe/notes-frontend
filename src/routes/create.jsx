import { Form, useLoaderData, redirect } from "react-router-dom";

import { createNote, updateNote } from "../notes"

export async function action({ request }) {
  const formData = await request.formData();
  const newNote = Object.fromEntries(formData);
  const response = await createNote(newNote);
  return redirect(`/notes/${response.note.id}`);
}

export default function CreateNote() {

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Title</span>
        <input
          placeholder="Title"
          aria-label="Title of Note"
          type="text"
          name="title"
        />
      </label>
      <label>
        <span>Content</span>
        <textarea name="content" rows={20} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

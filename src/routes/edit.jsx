import { Form, useLoaderData, redirect } from "react-router-dom";

import { updateNote } from "../notes"

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateNote(params.noteId, updates);
  return redirect(`/notes/${params.noteId}`);
}

export default function EditContact() {
  const { note } = useLoaderData();

  return (
    <Form method="post" id="contact-form">
      <label>
        <span>Title</span>
        <input
          placeholder="Title"
          aria-label="Title of Note"
          type="text"
          name="title"
          defaultValue={note?.title}
        />
      </label>
      <label>
        <span>Content</span>
        <textarea name="content" defaultValue={note?.content} rows={20} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

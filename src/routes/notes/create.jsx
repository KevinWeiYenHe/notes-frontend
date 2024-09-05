import { Form, redirect, useNavigate } from "react-router-dom";

import { createNote } from "../../notes";

export async function action({ request }) {
  const formData = await request.formData();
  const newNote = Object.fromEntries(formData);
  const response = await createNote(newNote);
  return redirect(`/notes/${response.note.id}`);
}

export default function CreateNote() {
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
        />
      </label>
      <label>
        <span>Content</span>
        <textarea name="content" rows={20} />
      </label>
      <label>
        <span>Tags</span>
        <input
          placegolder="Tags"
          aria-label="Words associated with the note"
          type="text"
          name="tags"
          defaultValue={"placeholder"}
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

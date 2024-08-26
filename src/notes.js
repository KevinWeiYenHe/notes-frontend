import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getNotes() {
  const response = await fetch(`http://localhost:4000/v1/notes`);
  if (!response.ok) {
    throw new Response("Failed to fetch user data", {
      status: response.status,
    });
  }

  const data = await response.json();
  return data.notes;
}

export async function createNote() {
  const response = await fetch(`http://localhost:4000/v1/notes/1`);
  if (!response.ok) {
    throw new Response("Failed to fetch user data", {
      status: response.status,
    });
  }

  const note = await response.json();
  return note.note;
}

export async function getNote(id) {
  if (isNaN(id)) {
    throw new Response("Failed to fetch user data", {
      status: 404,
    });
  }

  const response = await fetch(`http://localhost:4000/v1/notes/${id}`);
  if (!response.ok) {
    throw new Response("Failed to fetch user data", {
      status: response.status,
    });
  }

  const note = await response.json();
  return note.note;
}

export async function updateNote(id, updates) {
  const apiUrl = `http://localhost:4000/v1/notes/${id}`;

  const formData = {
    title: updates.title,
    content: updates.content,
    tags: updates.tags,
  };

  fetch(apiUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((newNoteData) => {
      // Process the newly created user data
      console.log("New Note Data:", newNote);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

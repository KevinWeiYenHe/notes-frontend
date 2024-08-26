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
    if(isNaN(id)) {
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
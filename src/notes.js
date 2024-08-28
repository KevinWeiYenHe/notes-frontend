import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getNotes() {
  const apiUrl = `http://localhost:4000/v1/notes`;

  const response = await fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Response("Failed to fetch note data", {
          status: response.status,
        });
      }
      return response.json();
    })
    .then((data) => {
      return data.notes;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
}

export async function createNote(newNote) {
  const apiUrl = `http://localhost:4000/v1/notes`;

  const formData = {
    title: newNote.title,
    content: newNote.content,
    tags: newNote.tags.split(","),
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Response("Failed to fetch note data", {
          status: response.status,
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
}

export async function getNote(id) {
  const apiUrl = `http://localhost:4000/v1/notes/${id}`;

  const response = await fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Response("Failed to fetch note data", {
          status: response.status,
        });
      }
      return response.json();
    })
    .then((data) => {
      return data.note;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
}

export async function updateNote(id, updates) {
  const apiUrl = `http://localhost:4000/v1/notes/${id}`;

  const formData = {
    title: updates.title,
    content: updates.content,
    tags: updates.tags.split(","),
  };

  const response = await fetch(apiUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Response("Failed to fetch note data", {
          status: response.status,
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
}

export async function deleteNote(id) {
  const apiUrl = `http://localhost:4000/v1/notes/${id}`;

  const response = await fetch(apiUrl, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Response("Failed to fetch note data", {
          status: response.status,
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
}

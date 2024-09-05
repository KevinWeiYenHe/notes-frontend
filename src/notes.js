const apiDomain = `http://localhost:4000`

export async function getNotes(query) {
  if (!query) {
    query = ""
  }
  
  const apiEndpoint = `${apiDomain}/v1/notes?title=${query}`;

  const response = await fetch(apiEndpoint)
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
  const apiEndpoint = `${apiDomain}/v1/notes`;

  const formData = {
    title: newNote.title,
    content: newNote.content,
    tags: newNote.tags.split(","),
  };

  const response = await fetch(apiEndpoint, {
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
  const apiEndpoint = `${apiDomain}/v1/notes/${id}`;

  const response = await fetch(apiEndpoint)
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
  const apiEndpoint = `${apiDomain}/v1/notes/${id}`;

  const formData = {
    title: updates.title,
    content: updates.content,
    tags: updates.tags.split(","),
  };

  const response = await fetch(apiEndpoint, {
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
  const apiEndpoint = `${apiDomain}/v1/notes/${id}`;

  const response = await fetch(apiEndpoint, {
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

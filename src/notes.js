const apiDomain = `http://localhost:4000/v2`;

function getCookieByName(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export async function getNotes(query) {
  if (!query) {
    query = "";
  }

  const apiEndpoint = `${apiDomain}/notes?title=${query}`;

  const response = await fetch(apiEndpoint, {
    credentials: "include",
  })
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
  const apiEndpoint = `${apiDomain}/notes`;

  const formData = {
    title: newNote.title,
    content: newNote.content,
    tags: newNote.tags.split(","),
  };

  const response = await fetch(apiEndpoint, {
    method: "POST",
    credentials: "include",
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
  const apiEndpoint = `${apiDomain}/notes/${id}`;

  const response = await fetch(apiEndpoint, {
    credentials: "include",
  })
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
  const apiEndpoint = `${apiDomain}/notes/${id}`;

  const formData = {
    title: updates.title,
    content: updates.content,
    tags: updates.tags.split(","),
  };

  const response = await fetch(apiEndpoint, {
    method: "PATCH",
    credentials: "include",
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
  const apiEndpoint = `${apiDomain}/notes/${id}`;

  const response = await fetch(apiEndpoint, {
    method: "DELETE",
    credentials: "include",
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

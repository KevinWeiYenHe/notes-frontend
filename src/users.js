const apiDomain = `http://localhost:4000/v2`

export async function loginUser(userForm) {
    const apiEndpoint = `${apiDomain}/tokens/authentication`

    const formData = {
        email: userForm.email,
        password: userForm.password
    }

    const response = await fetch(apiEndpoint, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Response("Server Error", {
                status: response.status
            })
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    return response
}

export async function signoutUser() {
    const apiEndpoint = `${apiDomain}/tokens/revoke`

    const response = await fetch(apiEndpoint, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        if (!response.ok) {
            throw new Response("Server Error", {
                status: response.status
            })
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    return response
}
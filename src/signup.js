const apiDomain = `http://localhost:4000/v2`

export async function signupUser(userForm) {
    const apiEndpoint = `${apiDomain}/users`

    const formData = {
        name: userForm.name,
        email: userForm.email,
        password: userForm.password
    }

    const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Response("Failed to create new user", {
                status: response.status
            })
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error:", error);
    })

    return response;
}
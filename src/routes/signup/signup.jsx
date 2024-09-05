import { Form, redirect, useNavigate } from "react-router-dom";
import { signupUser } from "../../signup";

export async function action({ request }) {
    const formData = await request.formData();
    const newUser = Object.fromEntries(formData);
    const response = await signupUser(newUser);
    return redirect(`/`);
}

export default function Signup()  {

    return (
        <Form method="post" id="user-signup-form">
        <label>
            <span>Name</span>
            <input
                placeholder="Name"
                aria-label="Name of user account"
                type="text"
                name="name"
            />
        </label>
            <label>
                <span>email</span>
                <input
                    placeholder="Email"
                    aria-label="Email of user account"
                    type="email"
                    name="email"
                />
            </label>
            <label>
                <span>Password</span>
                <input
                    placeholder="Password"
                    aria-label="Password of user account"
                    type="password"
                    name="password"
                />
            </label>
            <p>
        <button type="submit">Signup</button>
      </p>
        </Form>
    )
}
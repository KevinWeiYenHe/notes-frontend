import { Form, redirect } from "react-router-dom";
import { loginUser } from "../../users";

export async function action({ request }) {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  const response = await loginUser(loginData);
  return redirect(`/`);
}

export default function Login() {
  return (
    <Form method="post" id="user-login-form">
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
        <button type="submit">Login</button>
      </p>
    </Form>
  );
}

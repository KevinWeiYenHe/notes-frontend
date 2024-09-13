import { Form, redirect } from "react-router-dom";
import { signoutUser } from "../../users";

export async function action({ request }) {
  const response = await signoutUser();
  return redirect(`/`);
}

export default function Signout() {
  return (
    <Form method="post" id="user-signout-form">
      <label>
        <span>Would you like to signout?</span>
      </label>
      <p>
        <button type="submit">Signout</button>
        <button
          type="button"
          onClick={() => {
            redirect(`/`);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}

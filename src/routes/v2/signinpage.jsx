import { Form, redirect } from "react-router-dom";
import { loginUser } from "../../users";
import SignIn from "../../../mui/sign-in/SignIn";

export async function action({ request }) {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  const response = await loginUser(loginData);
  return redirect(`/`);
}

export default function SignInPage() {
  return (
    <SignIn/>
  );
}

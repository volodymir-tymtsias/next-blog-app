import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Next App",
};

export default async function Signin() {

  return (
    <div className="stack">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}

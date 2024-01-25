'use client';
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEventHandler } from "react";

export const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })

    if (result && !result.error) {
      router.push('/profile');
    } else {
      console.log(result);
    }
  }

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
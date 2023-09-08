"use client";

import useLoginForm from "@src/app/[locale]/login/lib/hooks/useLoginForm";
import { Button, Input } from "@src/components";

export default function LoginForm() {
  const form = useLoginForm();

  const handleSubmit = () => {
    alert("submitted");
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Input placeholder="Email" />
      <br />
      <br />
      <Input placeholder="Password" />
      <br />
      <br />
      <Button>Login</Button>
    </form>
  );
}

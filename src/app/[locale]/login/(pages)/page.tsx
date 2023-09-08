import Link from "next/link";
import LoginForm from "@src/app/[locale]/login/components/login-form";

export default function Login() {
  return (
    <div>
      <div>
        <Link href="/" style={{ textDecoration: "none", marginRight: 10 }}>
          <span>&#8592;</span> Go Back
        </Link>
      </div>

      <hr />

      <LoginForm />
    </div>
  );
}

import Link from "next/link";
import { Button, Input } from "@src/components";

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none", marginRight: 10 }}>
          <span>&#8592;</span> Go Back
        </Link>

        <h3>Login</h3>
      </div>

      <div>
        <form>
          <Input placeholder="Email" />
          <br />
          <br />
          <Input placeholder="Password" />
          <br />
          <br />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

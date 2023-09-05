import Link from "next/link";
import { Button, Input } from "@src/components";

const Login = () => {
  return (
    <div>
      <div>
        <Link href="/" style={{ textDecoration: "none", marginRight: 10 }}>
          <span>&#8592;</span> Go Back
        </Link>
      </div>

      <hr />

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

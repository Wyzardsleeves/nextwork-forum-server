import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import type { FC } from "react";

interface SignInProps {
  formType?: string;
}

const SignIn: FC<SignInProps> = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm formType="signin" />
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignIn;
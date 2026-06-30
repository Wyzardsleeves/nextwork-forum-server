interface AuthFormProps {
  formType?: string;
}

const AuthForm = ({ formType }: AuthFormProps) => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">{formType === "signup" ? "Sign Up" : "Sign In"}</button>
    </form>
  );
};

export default AuthForm;
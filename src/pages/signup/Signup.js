import { useState } from "react";
import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    signup(email, password, name);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className="btn">Signup</button>}
      {error && <p>{error}</p>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
    </form>
  );
};
export default Signup;

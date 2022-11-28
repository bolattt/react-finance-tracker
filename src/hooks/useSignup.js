import { useState } from "react";
import { projectAuth } from "../firebase/config";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    isPending(true);
    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (e) {
      console.log(e.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

export default useSignup;
import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { toast } from "react-toastify";
import { getAuth, fetchSignInMethodsForEmail } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const passwordRequirements = [
    "Password must include at least one symbol (e.g. !, @, #, $, etc.)",
    "Password must include at least one number",
    "Password must be at least 6 characters long",
  ];

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    return regex.test(password);
  };

  const checkEmailExists = async (email) => {
    const auth = getAuth();
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      return signInMethods.length > 0; // If methods exist, the email is in use
    } catch (error) {
      toast.error("Error checking email existence");
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(password)) {
      toast.error("Password does not meet the required criteria");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsRegistering(true);

      // Check if email already exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        toast.error("Email is already in use");
        return;
      }

      // Create user in Firebase Authentication
      await doCreateUserWithEmailAndPassword(email, password);

      toast.success("Registration successful");
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email is already in use");
      } else {
        toast.error(error.message);
      }
    } finally {
      setIsRegistering(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (userLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <main className="w-full h-screen flex self-center place-content-center place-items-center">
      <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
        <div className="text-center mb-6">
          <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
            Create a New Account
          </h3>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 font-bold">Email</label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-bold">Password</label>
            <input
              disabled={isRegistering}
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border ${
                isPasswordValid(password) ? "focus:border-indigo-600" : "border-red-500"
              } shadow-sm rounded-lg transition duration-300`}
            />
            <ul className="mt-2 text-sm text-gray-600">
              {passwordRequirements.map((requirement, index) => (
                <li key={index} className="flex items-center">
                  <span
                    className={`mr-2 h-4 w-4 ${
                      isPasswordValid(password) ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ✔
                  </span>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="text-sm text-gray-600 font-bold">
              Confirm Password
            </label>
            <input
              disabled={isRegistering}
              type="password"
              autoComplete="off"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
              isRegistering
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
            }`}
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-center text-sm hover:underline font-bold"
            >
              Continue
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;

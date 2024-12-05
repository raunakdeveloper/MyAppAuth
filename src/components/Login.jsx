import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Spinner from "./Spinner"; // Ensure the Spinner component is available

export default function Login() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-44 sm:28 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome to My App
        </h1>

        {loading ? (
          // Display spinner when loading
          <Spinner />
        ) : (
          <button
            onClick={handleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            disabled={loading}
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
}
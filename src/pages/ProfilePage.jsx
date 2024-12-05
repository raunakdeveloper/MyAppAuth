import React from "react";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { Heart } from "lucide-react";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto mt-6 p-4">
      <Link
        to="/"
        className="max-w-6xl md:hidden inline-flex items-center text-sm text-gray-600 hover:text-gray-800 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Profile
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "/default.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 shadow-sm"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {user.displayName}
          </h2>
          <p className="text-gray-500 mb-4">{user.email}</p>
        </div>
      </div>
      <p className="text-center mt-16 text-gray-600 text-sm flex items-center justify-center">
        Made with{" "}
        <Heart className="text-red-500 mx-1 animate-pulse" size={18} /> by{" "}
        <span className="font-medium ml-1">Raunak Kaushal</span>
      </p>
    </div>
  );
};

export default ProfilePage;

import React from "react";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="container max-w-4xl mx-auto mt-8 p-4 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <ul className="list-disc text-base list-inside mb-6">
        <li className="mb-2">
          Logged in as: <strong>{user.displayName}</strong>
        </li>
        <li className="mb-2">This app uses Google Authentication with Firebase.</li>
        <li className="mb-2">LocalStorage is used to manage the login state.</li>
        <li className="mb-2">There are only two routes in the app:</li>
        <ul className="list-circle list-inside pl-6">
          <li><code>/home</code> - Your personalized home page.</li>
          <li><code>/profile</code> - Your profile page.</li>
        </ul>
        <li>You can log in using Google and log out anytime.</li>
      </ul>
      <p className="text-sm text-gray-500">
        This app is a simple demo project to explore Firebase Google Authentication and basic routing in React.
      </p>
    </div>
  );
};

export default HomePage;

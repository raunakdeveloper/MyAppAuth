import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            My App
          </Link>

          {/* Navigation */}
          {user && (
            <nav className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors group"
              >
                <LogOut size={20} className="shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-gray-700 group-hover:text-red-600">
                  Logout
                </span>
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

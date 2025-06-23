import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-black">
              NDSC studio
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-roboto transition-colors duration-200 ${
                location.pathname === "/"
                  ? "text-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/bloodtech"
              className={`font-roboto transition-colors duration-200 ${
                location.pathname === "/bloodtech"
                  ? "text-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              bloodtech.exe
            </Link>
          </nav>

          {/* Auth Buttons - только для разработчиков */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Icon name="Mail" size={16} />
              <span className="font-roboto text-sm">Email</span>
            </Button>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-gray-800 font-roboto"
            >
              <Icon name="User" size={16} className="mr-2" />
              Gmail
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

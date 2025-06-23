import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-montserrat font-bold text-6xl text-black mb-4">
          404
        </h1>
        <p className="font-roboto text-xl text-gray-600 mb-8">
          Страница не найдена
        </p>
        <Link to="/">
          <Button className="bg-black text-white hover:bg-gray-800 font-roboto">
            <Icon name="Home" size={18} className="mr-2" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

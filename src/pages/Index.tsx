import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-black mb-6">
          NDSC
        </h1>
        <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Инди-студия разработки игр. Создаем киберпанк-шутер bloodtech.exe с
          элементами хакинга и биотехнологий
        </p>
        <Link to="/bloodtech">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-roboto">
            <Icon name="Gamepad2" size={18} className="mr-2" />
            Узнать о bloodtech.exe
          </Button>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                85%
              </div>
              <div className="font-roboto text-gray-600">Готовности игры</div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                2.5k+
              </div>
              <div className="font-roboto text-gray-600">
                Подписчиков ждут релиз
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                18
              </div>
              <div className="font-roboto text-gray-600">
                Месяцев разработки
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

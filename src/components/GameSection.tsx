import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-black mb-4">
          bloodtech.exe
        </h1>
        <p className="font-roboto text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Киберпанк-шутер с элементами хакинга и биотехнологий. Погрузитесь в
          мир будущего, где технологии сливаются с человеческим организмом.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-50 p-6 rounded-lg">
          <Icon name="Gamepad2" size={32} className="mb-4 text-black" />
          <h3 className="font-montserrat font-bold text-xl mb-2">Геймплей</h3>
          <p className="font-roboto text-gray-600">
            Динамичные перестрелки с уникальной системой хакинга противников
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <Icon name="Cpu" size={32} className="mb-4 text-black" />
          <h3 className="font-montserrat font-bold text-xl mb-2">Технологии</h3>
          <p className="font-roboto text-gray-600">
            Современный движок с реалистичной физикой и продвинутой графикой
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <Icon name="Users" size={32} className="mb-4 text-black" />
          <h3 className="font-montserrat font-bold text-xl mb-2">Команда</h3>
          <p className="font-roboto text-gray-600">
            Опытные разработчики с багажом знаний в области игровой индустрии
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-roboto">
          <Icon name="Download" size={18} className="mr-2" />
          Скоро в раннем доступе
        </Button>
      </div>
    </div>
  );
};

export default GameSection;

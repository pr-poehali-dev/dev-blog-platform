import Header from "@/components/Header";
import BlogGrid from "@/components/BlogGrid";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredPosts = [
    {
      id: "1",
      title: "Внедрение нейронных сетей в биомедицинские системы",
      excerpt:
        "Исследование применения машинного обучения для анализа биологических данных и создания персонализированных медицинских решений.",
      date: "15 дек 2024",
      readTime: "8 мин",
      tags: ["AI", "биотех", "медицина"],
      category: "bloodtech.exe",
    },
    {
      id: "2",
      title: "Архитектура систем реального времени для мониторинга",
      excerpt:
        "Разработка высокопроизводительных систем для непрерывного анализа биометрических показателей с минимальной задержкой.",
      date: "12 дек 2024",
      readTime: "12 мин",
      tags: ["архитектура", "realtime", "мониторинг"],
      category: "bloodtech.exe",
    },
    {
      id: "3",
      title: "Криптографическая защита медицинских данных",
      excerpt:
        "Обзор современных методов шифрования и обеспечения приватности в биомедицинских информационных системах.",
      date: "10 дек 2024",
      readTime: "6 мин",
      tags: ["security", "encryption", "privacy"],
      category: "bloodtech.exe",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-black mb-6">
          NDSC studio
        </h1>
        <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Технический блог о разработке биомедицинских систем, анализе данных и
          инновационных решениях в области цифрового здравоохранения
        </p>
        <Link to="/bloodtech">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-roboto">
            <Icon name="ArrowRight" size={18} className="mr-2" />
            Перейти к bloodtech.exe
          </Button>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                24+
              </div>
              <div className="font-roboto text-gray-600">
                Технических статей
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                1.2k+
              </div>
              <div className="font-roboto text-gray-600">
                Разработчиков читают
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-black mb-2">
                3
              </div>
              <div className="font-roboto text-gray-600">Года экспертизы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <BlogGrid
        posts={featuredPosts}
        title="Последние публикации"
        description="Избранные материалы из раздела bloodtech.exe"
      />
    </div>
  );
};

export default Index;

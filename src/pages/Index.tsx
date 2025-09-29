import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Music" className="text-primary" size={28} />
            <h1 className="text-2xl font-playfair font-bold text-primary">Твой хit</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
            Заказать песню
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/752df8bc-118c-486b-9507-bcf4c0cb4c19.jpg" 
            alt="Musical background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-6 leading-tight">
              Музыка для <span className="text-secondary">торжеств</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-inter">
              Создайте незабываемые моменты с помощью авторских песен для ваших торжеств. 
              Позвольте нам воплотить ваши истории в жизнь в этот праздничный сезон.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold">
                <Icon name="Play" className="mr-2" size={20} />
                Послушать примеры
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold">
                <Icon name="Phone" className="mr-2" size={20} />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-scale-in">
            <h3 className="text-4xl font-playfair font-bold text-primary mb-6">
              Создание запоминающихся песен для Ваших торжеств
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-inter">
              "Твой хit" - это лучшее место в Нижнем Новгороде, где можно создать песни на заказ, 
              которые сделают любое торжество незабываемым. Наши опытные авторы песен тесно 
              сотрудничают с каждым клиентом, чтобы передать суть его праздника, гарантируя, 
              что каждое стихотворение найдет отклик в его личном и эмоциональном плане. 
              Будь то свадьба, день рождения или корпоративное мероприятие, мы преобразуем 
              ваши истории и эмоции в мелодии, которые останутся в сердце надолго после 
              окончания торжества. Позвольте нам создать ваш идеальный хит для вашего особенного дня!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair font-bold text-primary mb-4">
              Музыкальное мастерство
            </h3>
            <p className="text-xl text-gray-700 font-inter">
              Профессиональное написание песен для праздников
            </p>
            <p className="text-lg text-gray-600 mt-2 font-inter">
              Наши опытные авторы песен создают индивидуальные песни для каждого торжества, 
              запечатлевая уникальные истории с помощью музыки для запоминающихся моментов.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Cake" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-primary">
                  Песни на день рождения на заказ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter">
                  Празднуйте с помощью персонализированных песен, созданных для 
                  незабываемых моментов дня рождения.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-primary">
                  Уникальные свадебные мелодии
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter">
                  Создайте незабываемые впечатления с помощью специально подобранных 
                  песен для вашей торжественной церемонии.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-primary">
                  Гимны для корпоративных мероприятий
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter">
                  Украсьте свои мероприятия профессиональными гимнами, написанными 
                  на заказ для любого корпоративного мероприятия.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-playfair font-bold mb-6">Мелодичные торжества</h3>
          <p className="text-xl mb-4 font-inter">Празднуйте с помощью авторских песен на заказ</p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto font-inter">
            Наши услуги по написанию песен, которым доверяют ведущие бренды Нижнего Новгорода, 
            воплощают в жизнь торжества с творческим подходом и страстью, обеспечивая 
            незабываемые музыкальные впечатления для любого случая.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair font-bold text-primary mb-4">Отзывы</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg bg-gradient-to-r from-blue-50 to-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-4 font-inter italic">
                      "Они сделали свадьбу моей двоюродной сестры незабываемой благодаря своей авторской песне! 
                      Текст песни идеально передавал эмоции, а мелодия была прекрасной. Команда была 
                      профессиональной и внимательной к нашим потребностям. Настоятельно рекомендую для любого особого случая!"
                    </p>
                    <p className="font-semibold text-primary font-playfair">— Елена Иванова</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Создайте свою идеальную композицию
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-inter">
            Позвольте нашим профессионалам создать уникальную и запоминающуюся композицию 
            для вашего особого случая. Отмечайте дни рождения, свадьбы или юбилеи с индивидуальным подходом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (831) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Music" className="text-secondary" size={24} />
            <h4 className="text-xl font-playfair font-bold">Твой хit</h4>
          </div>
          <p className="text-gray-400 font-inter">© 2024 Твой хit. Все права защищены.</p>
          <p className="text-gray-400 mt-2 font-inter">Нижний Новгород | Создаем музыку для ваших торжеств</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
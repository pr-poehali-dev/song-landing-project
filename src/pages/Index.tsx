import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-creative-pink via-creative-blue to-creative-green">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Music" className="text-primary animate-bounce-slow" size={28} />
            <h1 className="text-3xl font-caveat font-bold text-primary animate-wiggle">Твой хit</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors hover:scale-110 transform duration-300">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors hover:scale-110 transform duration-300">О нас</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors hover:scale-110 transform duration-300">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors hover:scale-110 transform duration-300">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-300 font-semibold shadow-lg">
            Заказать песню
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/img/69bcfc31-4f6b-4659-9360-43b036af5c3d.jpg" 
            alt="Creative musical background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-accent/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-40 w-6 h-6 bg-secondary/40 rounded-full animate-wiggle"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-dancing font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Музыка для <span className="text-accent animate-bounce-slow">торжеств</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-inter drop-shadow-lg">
              Создайте незабываемые моменты с помощью авторских песен для ваших торжеств. 
              Позвольте нам воплотить ваши истории в жизнь в этот праздничный сезон.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-white hover:from-primary hover:to-accent transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-2xl animate-float">
                <Icon name="Play" className="mr-2" size={20} />
                Послушать примеры
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-sm transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-2xl">
                <Icon name="Phone" className="mr-2" size={20} />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-white via-creative-pink/20 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-scale-in relative z-10">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-slow"></div>
            
            <h3 className="text-5xl font-caveat font-bold text-primary mb-6 transform hover:scale-105 transition-transform duration-300">
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
      <section id="services" className="py-16 bg-gradient-to-br from-creative-blue via-creative-purple to-creative-orange relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-dancing font-bold text-white mb-4 drop-shadow-lg animate-wiggle">
              Музыкальное мастерство
            </h3>
            <p className="text-xl text-white/90 font-inter drop-shadow-md">
              Профессиональное написание песен для праздников
            </p>
            <p className="text-lg text-white/80 mt-2 font-inter drop-shadow-md">
              Наши опытные авторы песен создают индивидуальные песни для каждого торжества, 
              запечатлевая уникальные истории с помощью музыки для запоминающихся моментов.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 bg-white/90 backdrop-blur-md transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow shadow-xl">
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

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 bg-white/90 backdrop-blur-md transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-float shadow-xl">
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

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 bg-white/90 backdrop-blur-md transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-wiggle shadow-xl">
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
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-wiggle"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-5xl font-dancing font-bold mb-6 animate-wiggle drop-shadow-2xl">Мелодичные торжества</h3>
          <p className="text-xl mb-4 font-inter drop-shadow-lg">Празднуйте с помощью авторских песен на заказ</p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto font-inter drop-shadow-md">
            Наши услуги по написанию песен, которым доверяют ведущие бренды Нижнего Новгорода, 
            воплощают в жизнь торжества с творческим подходом и страстью, обеспечивая 
            незабываемые музыкальные впечатления для любого случая.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-br from-white via-creative-green/10 to-creative-pink/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-dancing font-bold text-primary mb-4 animate-bounce-slow">Отзывы</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl bg-gradient-to-r from-creative-pink via-white to-creative-blue transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0 animate-wiggle shadow-xl">
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
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/20 rounded-full animate-bounce-slow"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-5xl md:text-6xl font-dancing font-bold mb-6 animate-bounce-slow drop-shadow-2xl">
            Создайте свою идеальную композицию
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-inter drop-shadow-lg">
            Позвольте нашим профессионалам создать уникальную и запоминающуюся композицию 
            для вашего особого случая. Отмечайте дни рождения, свадьбы или юбилеи с индивидуальным подходом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-primary backdrop-blur-md transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-2xl animate-float">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (831) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-creative-pink transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-2xl animate-bounce-slow">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-primary/80 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Music" className="text-secondary animate-bounce-slow" size={24} />
            <h4 className="text-2xl font-caveat font-bold animate-wiggle">Твой хit</h4>
          </div>
          <p className="text-gray-400 font-inter">© 2024 Твой хit. Все права защищены.</p>
          <p className="text-gray-400 mt-2 font-inter">Нижний Новгород | Создаем музыку для ваших торжеств</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
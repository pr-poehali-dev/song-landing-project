import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-rose via-romantic-pearl to-romantic-lavender">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-romantic-rose/30 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="Music" className="text-primary animate-heart-beat" size={28} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-romantic-rose rounded-full animate-soft-glow"></div>
            </div>
            <h1 className="text-3xl font-dancing font-bold text-primary">Твой хit</h1>
            <div className="flex space-x-1">
              <div className="text-lg animate-gentle-float">💕</div>
              <div className="text-lg animate-gentle-float" style={{animationDelay: '1s'}}>🌸</div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary font-medium transition-all duration-300 hover:scale-105 transform relative group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romantic-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary font-medium transition-all duration-300 hover:scale-105 transform relative group">
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romantic-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-primary font-medium transition-all duration-300 hover:scale-105 transform relative group">
              Отзывы
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romantic-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary font-medium transition-all duration-300 hover:scale-105 transform relative group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-romantic-rose transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-300 font-medium shadow-lg animate-soft-glow px-6 py-2 rounded-full">
            💕 Заказать песню
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="/img/9a409d82-f685-44d0-992d-207605271659.jpg" 
            alt="Romantic wedding background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-romantic-rose/20 via-white/30 to-romantic-lavender/20"></div>
        
        {/* Floating romantic elements */}
        <div className="absolute top-20 left-20 text-romantic-rose text-3xl animate-gentle-float">🌸</div>
        <div className="absolute top-40 right-20 text-secondary text-2xl animate-gentle-float" style={{animationDelay: '1s'}}>💕</div>
        <div className="absolute bottom-40 left-1/4 text-romantic-lavender text-xl animate-gentle-float" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-romantic-rose text-2xl animate-gentle-float" style={{animationDelay: '0.5s'}}>🌹</div>
        <div className="absolute top-1/3 right-10 text-romantic-lavender text-xl animate-heart-beat">💫</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center space-x-4">
              <span className="text-4xl animate-heart-beat">🎵</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '0.5s'}}>💕</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '1s'}}>🌸</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-dancing font-bold text-primary mb-6 leading-tight drop-shadow-lg">
              Музыка для 
              <br/>
              <span className="text-secondary animate-soft-glow">торжеств</span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-romantic-rose/30 mb-10 transform hover:scale-105 transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-700 font-playfair leading-relaxed">
                Создайте незабываемые моменты с помощью авторских песен для ваших торжеств 💕
                <br/>
                <span className="text-base text-gray-600 mt-3 block font-inter">
                  Позвольте нам воплотить ваши истории в жизнь в этот праздничный сезон
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-medium shadow-xl animate-soft-glow rounded-full">
                <Icon name="Play" className="mr-2" size={20} />
                🎵 Послушать примеры
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white backdrop-blur-sm transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-medium shadow-xl rounded-full">
                <Icon name="Phone" className="mr-2" size={20} />
                💕 Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-white via-romantic-rose/10 to-white relative overflow-hidden">
        {/* Romantic decorative elements */}
        <div className="absolute top-10 left-10 text-romantic-lavender text-2xl animate-gentle-float">🌸</div>
        <div className="absolute bottom-10 right-10 text-romantic-rose text-3xl animate-heart-beat">💕</div>
        <div className="absolute top-1/2 left-20 text-secondary text-xl animate-gentle-float">✨</div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-scale-in relative z-10">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-romantic-rose/20">
              <div className="mb-6 flex justify-center space-x-3">
                <span className="text-3xl animate-heart-beat">🎤</span>
                <span className="text-3xl animate-heart-beat" style={{animationDelay: '0.3s'}}>🎸</span>
                <span className="text-3xl animate-heart-beat" style={{animationDelay: '0.6s'}}>💕</span>
              </div>
              
              <h3 className="text-4xl font-dancing font-bold text-primary mb-6">
                Создание запоминающихся песен
              </h3>
              <h4 className="text-2xl font-playfair font-bold text-secondary mb-6">
                для Ваших торжеств 🌸
              </h4>
              
              <p className="text-base text-gray-700 leading-relaxed font-inter">
                <strong>"Твой хit"</strong> - это лучшее место в Нижнем Новгороде, где можно создать песни на заказ, 
                которые сделают любое торжество незабываемым 🌟 Наши опытные авторы песен тесно 
                сотрудничают с каждым клиентом, чтобы передать суть его праздника, гарантируя, 
                что каждое стихотворение найдет отклик в его личном и эмоциональном плане. 
                Будь то свадьба 💒, день рождения 🎂 или корпоративное мероприятие 🏢, мы преобразуем 
                ваши истории и эмоции в мелодии, которые останутся в сердце надолго после 
                окончания торжества! Позвольте нам создать ваш идеальный хит для вашего особенного дня! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-br from-romantic-lavender/30 via-romantic-rose/20 to-romantic-sage/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center space-x-4">
              <span className="text-4xl animate-heart-beat">🌸</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '0.5s'}}>💕</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '1s'}}>✨</span>
            </div>
            
            <h3 className="text-5xl font-dancing font-bold text-primary mb-4 drop-shadow-lg">
              Музыкальное мастерство
            </h3>
            <p className="text-xl text-gray-700 font-playfair font-medium mb-2">
              🎵 Профессиональное написание песен для праздников 🎵
            </p>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Наши опытные авторы песен создают индивидуальные песни для каждого торжества, 
              запечатлевая уникальные истории с помощью музыки для запоминающихся моментов ✨
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 bg-white/80 backdrop-blur-md transform hover:scale-105 border border-romantic-rose/20 rounded-3xl">
              <CardHeader className="text-center pb-4">
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-secondary to-romantic-rose rounded-full flex items-center justify-center mx-auto mb-4 animate-soft-glow shadow-xl">
                  <Icon name="Cake" className="text-white" size={28} />
                  <div className="absolute -top-1 -right-1 text-xl animate-heart-beat">🎂</div>
                </div>
                <CardTitle className="text-xl font-dancing font-bold text-primary">
                  Песни на день рождения
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter leading-relaxed">
                  🎉 Празднуйте с помощью персонализированных песен, созданных для 
                  незабываемых моментов дня рождения 🎈
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 bg-white/80 backdrop-blur-md transform hover:scale-105 border border-romantic-rose/20 rounded-3xl">
              <CardHeader className="text-center pb-4">
                <div className="relative w-20 h-20 bg-gradient-to-br from-romantic-lavender via-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-heart-beat shadow-xl">
                  <Icon name="Heart" className="text-white" size={28} />
                  <div className="absolute -top-1 -right-1 text-xl animate-gentle-float">💒</div>
                </div>
                <CardTitle className="text-xl font-dancing font-bold text-primary">
                  Свадебные мелодии
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter leading-relaxed">
                  💕 Создайте незабываемые впечатления с помощью специально подобранных 
                  песен для вашей торжественной церемонии 💍
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 bg-white/80 backdrop-blur-md transform hover:scale-105 border border-romantic-rose/20 rounded-3xl">
              <CardHeader className="text-center pb-4">
                <div className="relative w-20 h-20 bg-gradient-to-br from-secondary via-romantic-sage to-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-gentle-float shadow-xl">
                  <Icon name="Building" className="text-white" size={28} />
                  <div className="absolute -top-1 -right-1 text-xl animate-heart-beat">🏢</div>
                </div>
                <CardTitle className="text-xl font-dancing font-bold text-primary">
                  Корпоративные гимны
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter leading-relaxed">
                  🌟 Украсьте свои мероприятия профессиональными гимнами, написанными 
                  на заказ для любого корпоративного мероприятия ✨
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-16 bg-gradient-to-r from-primary/80 via-secondary/80 to-romantic-lavender/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        {/* Floating romantic elements */}
        <div className="absolute top-10 left-10 text-white text-4xl animate-gentle-float">🌸</div>
        <div className="absolute bottom-10 right-10 text-white text-3xl animate-heart-beat">💕</div>
        <div className="absolute top-1/2 left-1/4 text-white text-2xl animate-gentle-float">✨</div>
        <div className="absolute top-20 right-1/4 text-white text-xl animate-heart-beat">🌹</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center space-x-6">
            <span className="text-5xl animate-heart-beat">💕</span>
            <span className="text-5xl animate-heart-beat" style={{animationDelay: '0.3s'}}>🌸</span>
            <span className="text-5xl animate-heart-beat" style={{animationDelay: '0.6s'}}>✨</span>
          </div>
          
          <h3 className="text-5xl font-dancing font-bold mb-6 animate-soft-glow drop-shadow-lg">
            Мелодичные торжества
          </h3>
          <p className="text-2xl mb-4 font-playfair font-medium drop-shadow-md">
            🎵 Празднуйте с помощью авторских песен на заказ 🎵
          </p>
          <p className="text-lg opacity-95 max-w-3xl mx-auto font-inter drop-shadow-sm leading-relaxed">
            Наши услуги по написанию песен, которым доверяют ведущие бренды Нижнего Новгорода, 
            воплощают в жизнь торжества с творческим подходом и страстью, обеспечивая 
            незабываемые музыкальные впечатления для любого случая! ✨💕🌸
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-br from-white via-romantic-sage/10 to-romantic-rose/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center space-x-4">
              <span className="text-4xl animate-heart-beat">⭐</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '0.5s'}}>💫</span>
              <span className="text-4xl animate-heart-beat" style={{animationDelay: '1s'}}>✨</span>
            </div>
            <h3 className="text-4xl font-dancing font-bold text-primary mb-4 animate-soft-glow">
              Отзывы наших клиентов
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-r from-white via-romantic-rose/10 to-white transform hover:scale-105 transition-all duration-300 border border-romantic-rose/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-secondary to-romantic-rose rounded-full flex items-center justify-center flex-shrink-0 animate-soft-glow shadow-xl">
                    <Icon name="Quote" className="text-white" size={24} />
                    <div className="absolute -top-1 -right-1 text-xl animate-heart-beat">💎</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 mb-4 font-playfair italic leading-relaxed">
                      "Они сделали свадьбу моей двоюродной сестры незабываемой благодаря своей авторской песне! 💒✨
                      Текст песни идеально передавал эмоции, а мелодия была прекрасной. Команда была 
                      профессиональной и внимательной к нашим потребностям. Настоятельно рекомендую для любого особого случая! 🎉💕"
                    </p>
                    <p className="font-bold text-primary font-dancing text-xl">— Елена Иванова ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-romantic-lavender to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Romantic decorations */}
        <div className="absolute top-10 left-20 text-3xl animate-gentle-float">🌸</div>
        <div className="absolute bottom-20 right-20 text-4xl animate-heart-beat">💕</div>
        <div className="absolute top-1/3 right-10 text-2xl animate-gentle-float">✨</div>
        <div className="absolute bottom-1/3 left-10 text-3xl animate-heart-beat">🌹</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-10 flex justify-center space-x-6">
            <span className="text-6xl animate-heart-beat">🎵</span>
            <span className="text-6xl animate-heart-beat" style={{animationDelay: '0.5s'}}>💕</span>
            <span className="text-6xl animate-heart-beat" style={{animationDelay: '1s'}}>🌸</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-dancing font-bold mb-8 animate-soft-glow drop-shadow-lg">
            Создайте свою<br/>
            идеальную композицию
          </h3>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-10 border border-white/20">
            <p className="text-xl font-playfair font-medium drop-shadow-md leading-relaxed">
              💕 Позвольте нашим профессионалам создать уникальную и запоминающуюся композицию 
              для вашего особого случая 💕
              <br/>
              <span className="text-lg mt-4 block font-inter">
                Отмечайте дни рождения 🎂, свадьбы 💒 или юбилеи 🏆 с индивидуальным подходом!
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-md transform hover:scale-110 transition-all duration-300 px-10 py-4 text-lg font-medium shadow-xl animate-soft-glow bg-white/20 rounded-full">
              <Icon name="Phone" className="mr-2" size={20} />
              📞 +7 (831) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-romantic-rose hover:text-white transform hover:scale-110 transition-all duration-300 px-10 py-4 text-lg font-medium shadow-xl animate-heart-beat rounded-full">
              <Icon name="Mail" className="mr-2" size={20} />
              💌 Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-primary/60 to-gray-800 text-white py-10 border-t border-romantic-rose/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Icon name="Music" className="text-romantic-rose animate-heart-beat" size={28} />
            <h4 className="text-3xl font-dancing font-bold">Твой хit</h4>
            <div className="flex space-x-2">
              <span className="text-xl animate-heart-beat">💕</span>
              <span className="text-xl animate-heart-beat" style={{animationDelay: '0.5s'}}>🌸</span>
            </div>
          </div>
          <p className="text-gray-300 font-inter">© 2024 Твой хit. Все права защищены ✨</p>
          <p className="text-gray-300 mt-2 font-inter">Нижний Новгород | Создаем музыку для ваших торжеств 💕🌸✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
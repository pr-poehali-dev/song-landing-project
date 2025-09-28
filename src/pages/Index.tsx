import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-festive-gold/20 via-white to-festive-red/20">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b-4 border-festive-gold sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Icon name="Music" className="text-primary animate-sparkle" size={32} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-festive-gold rounded-full animate-glow"></div>
            </div>
            <h1 className="text-4xl font-oswald font-bold text-primary tracking-wider">Твой хit</h1>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-festive-red rounded-full animate-sparkle"></div>
              <div className="w-2 h-2 bg-festive-gold rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 hover:scale-110 transform relative group">
              Услуги
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-festive-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 hover:scale-110 transform relative group">
              О нас
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-festive-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 hover:scale-110 transform relative group">
              Отзывы
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-festive-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-semibold transition-all duration-300 hover:scale-110 transform relative group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-festive-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-primary via-festive-gold to-primary text-white hover:from-festive-gold hover:via-primary hover:to-festive-gold transform hover:scale-105 transition-all duration-300 font-bold shadow-2xl animate-glow px-6 py-3">
            🎵 Заказать песню
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="/img/20e8f6f1-bd88-4cb5-b518-424b7f50912f.jpg" 
            alt="Festive celebration background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-festive-gold/30 to-accent/40"></div>
        
        {/* Confetti elements */}
        <div className="absolute top-10 left-10 text-festive-gold text-2xl animate-confetti">🎊</div>
        <div className="absolute top-20 right-20 text-festive-red text-3xl animate-confetti" style={{animationDelay: '1s'}}>🎉</div>
        <div className="absolute top-40 left-1/4 text-accent text-xl animate-confetti" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-festive-gold text-2xl animate-confetti" style={{animationDelay: '0.5s'}}>🎈</div>
        <div className="absolute top-1/3 right-10 text-festive-purple text-xl animate-sparkle">⭐</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="mb-8 flex justify-center space-x-4">
              <span className="text-6xl animate-bounce-slow">🎶</span>
              <span className="text-6xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>🎵</span>
              <span className="text-6xl animate-bounce-slow" style={{animationDelay: '1s'}}>🎼</span>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-oswald font-black text-white mb-8 leading-tight drop-shadow-2xl tracking-wider">
              МУЗЫКА ДЛЯ <br/>
              <span className="text-festive-gold animate-glow text-8xl md:text-10xl">ТОРЖЕСТВ</span>
            </h2>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-4 border-festive-gold/50 mb-10 transform hover:scale-105 transition-all duration-300">
              <p className="text-xl md:text-2xl text-gray-800 font-merriweather font-bold leading-relaxed">
                🎊 Создайте незабываемые моменты с помощью авторских песен для ваших торжеств! 🎊
                <br/>
                <span className="text-lg text-gray-600 mt-4 block">
                  Позвольте нам воплотить ваши истории в жизнь в этот праздничный сезон
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-festive-red via-festive-gold to-festive-red text-white hover:from-festive-gold hover:via-festive-red hover:to-festive-gold transform hover:scale-110 transition-all duration-300 px-10 py-6 text-xl font-bold shadow-2xl animate-glow">
                <Icon name="Play" className="mr-3" size={24} />
                🎵 Послушать примеры
              </Button>
              <Button variant="outline" size="lg" className="border-4 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transform hover:scale-110 transition-all duration-300 px-10 py-6 text-xl font-bold shadow-2xl bg-white/20">
                <Icon name="Phone" className="mr-3" size={24} />
                📞 Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-white via-festive-gold/10 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-festive-red text-4xl animate-float">🎭</div>
        <div className="absolute bottom-10 right-10 text-festive-gold text-5xl animate-sparkle">🏆</div>
        <div className="absolute top-1/2 left-20 text-accent text-3xl animate-wiggle">🎪</div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-scale-in relative z-10">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-4 border-festive-gold/30">
              <div className="mb-6 flex justify-center space-x-3">
                <span className="text-4xl animate-bounce-slow">🎤</span>
                <span className="text-4xl animate-bounce-slow" style={{animationDelay: '0.3s'}}>🎸</span>
                <span className="text-4xl animate-bounce-slow" style={{animationDelay: '0.6s'}}>🥳</span>
              </div>
              
              <h3 className="text-6xl font-oswald font-black text-primary mb-8 tracking-wide">
                СОЗДАНИЕ ЗАПОМИНАЮЩИХСЯ ПЕСЕН
              </h3>
              <h4 className="text-3xl font-merriweather font-bold text-festive-gold mb-6">
                ДЛЯ ВАШИХ ТОРЖЕСТВ 🎊
              </h4>
              
              <p className="text-lg text-gray-700 leading-relaxed font-inter">
                <strong>"Твой хit"</strong> - это лучшее место в Нижнем Новгороде, где можно создать песни на заказ, 
                которые сделают любое торжество незабываемым! 🌟 Наши опытные авторы песен тесно 
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
      <section id="services" className="py-20 bg-gradient-to-br from-festive-red/80 via-festive-orange/80 to-festive-purple/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center space-x-4">
              <span className="text-5xl animate-sparkle">🎪</span>
              <span className="text-5xl animate-sparkle" style={{animationDelay: '0.5s'}}>🎊</span>
              <span className="text-5xl animate-sparkle" style={{animationDelay: '1s'}}>🎉</span>
            </div>
            
            <h3 className="text-7xl font-oswald font-black text-white mb-6 drop-shadow-2xl tracking-wider animate-glow">
              МУЗЫКАЛЬНОЕ МАСТЕРСТВО
            </h3>
            <p className="text-2xl text-white/95 font-merriweather font-bold drop-shadow-lg mb-4">
              🎵 Профессиональное написание песен для праздников 🎵
            </p>
            <p className="text-xl text-white/90 font-inter drop-shadow-md max-w-4xl mx-auto">
              Наши опытные авторы песен создают индивидуальные песни для каждого торжества, 
              запечатлевая уникальные истории с помощью музыки для запоминающихся моментов! ✨
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 hover:rotate-3 bg-white/95 backdrop-blur-md transform hover:scale-110 border-4 border-festive-gold/50">
              <CardHeader className="text-center pb-6">
                <div className="relative w-24 h-24 bg-gradient-to-br from-festive-red via-festive-gold to-festive-orange rounded-full flex items-center justify-center mx-auto mb-6 animate-glow shadow-2xl">
                  <Icon name="Cake" className="text-white" size={36} />
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce-slow">🎂</div>
                </div>
                <CardTitle className="text-2xl font-oswald font-bold text-primary tracking-wide">
                  ПЕСНИ НА ДЕНЬ РОЖДЕНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter text-lg leading-relaxed">
                  🎉 Празднуйте с помощью персонализированных песен, созданных для 
                  незабываемых моментов дня рождения! 🎈
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 hover:rotate-3 bg-white/95 backdrop-blur-md transform hover:scale-110 border-4 border-festive-gold/50">
              <CardHeader className="text-center pb-6">
                <div className="relative w-24 h-24 bg-gradient-to-br from-festive-purple via-festive-red to-festive-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-sparkle shadow-2xl">
                  <Icon name="Heart" className="text-white" size={36} />
                  <div className="absolute -top-2 -right-2 text-2xl animate-float">💒</div>
                </div>
                <CardTitle className="text-2xl font-oswald font-bold text-primary tracking-wide">
                  СВАДЕБНЫЕ МЕЛОДИИ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter text-lg leading-relaxed">
                  💕 Создайте незабываемые впечатления с помощью специально подобранных 
                  песен для вашей торжественной церемонии! 💍
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-6 hover:rotate-3 bg-white/95 backdrop-blur-md transform hover:scale-110 border-4 border-festive-gold/50">
              <CardHeader className="text-center pb-6">
                <div className="relative w-24 h-24 bg-gradient-to-br from-accent via-festive-orange to-festive-red rounded-full flex items-center justify-center mx-auto mb-6 animate-wiggle shadow-2xl">
                  <Icon name="Building" className="text-white" size={36} />
                  <div className="absolute -top-2 -right-2 text-2xl animate-sparkle">🏢</div>
                </div>
                <CardTitle className="text-2xl font-oswald font-bold text-primary tracking-wide">
                  КОРПОРАТИВНЫЕ ГИМНЫ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-700 font-inter text-lg leading-relaxed">
                  🎪 Украсьте свои мероприятия профессиональными гимнами, написанными 
                  на заказ для любого корпоративного мероприятия! 🏆
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-20 bg-gradient-to-r from-festive-gold via-festive-orange to-festive-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Floating celebration elements */}
        <div className="absolute top-10 left-10 text-6xl animate-confetti">🎊</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-sparkle">🎭</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-float">🎪</div>
        <div className="absolute top-20 right-1/4 text-3xl animate-wiggle">🏆</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center space-x-6">
            <span className="text-7xl animate-bounce-slow">🎉</span>
            <span className="text-7xl animate-bounce-slow" style={{animationDelay: '0.3s'}}>🎊</span>
            <span className="text-7xl animate-bounce-slow" style={{animationDelay: '0.6s'}}>🎈</span>
          </div>
          
          <h3 className="text-7xl font-oswald font-black mb-8 animate-glow drop-shadow-2xl tracking-wider">
            МЕЛОДИЧНЫЕ ТОРЖЕСТВА
          </h3>
          <p className="text-3xl mb-6 font-merriweather font-bold drop-shadow-lg">
            🎵 Празднуйте с помощью авторских песен на заказ! 🎵
          </p>
          <p className="text-xl opacity-95 max-w-4xl mx-auto font-inter drop-shadow-md leading-relaxed">
            Наши услуги по написанию песен, которым доверяют ведущие бренды Нижнего Новгорода, 
            воплощают в жизнь торжества с творческим подходом и страстью, обеспечивая 
            незабываемые музыкальные впечатления для любого случая! ✨🎪🎊
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-white via-festive-gold/10 to-festive-red/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center space-x-4">
              <span className="text-5xl animate-sparkle">⭐</span>
              <span className="text-5xl animate-sparkle" style={{animationDelay: '0.5s'}}>💫</span>
              <span className="text-5xl animate-sparkle" style={{animationDelay: '1s'}}>✨</span>
            </div>
            <h3 className="text-6xl font-oswald font-black text-primary mb-4 animate-glow tracking-wider">
              ОТЗЫВЫ НАШИХ КЛИЕНТОВ
            </h3>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-2xl bg-gradient-to-r from-white via-festive-gold/20 to-white transform hover:scale-105 transition-all duration-300 border-4 border-festive-gold/50">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-festive-red via-festive-gold to-accent rounded-full flex items-center justify-center flex-shrink-0 animate-glow shadow-2xl">
                    <Icon name="Quote" className="text-white" size={28} />
                    <div className="absolute -top-2 -right-2 text-2xl animate-sparkle">💎</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 mb-6 font-merriweather italic leading-relaxed">
                      "Они сделали свадьбу моей двоюродной сестры незабываемой благодаря своей авторской песне! 💒✨
                      Текст песни идеально передавал эмоции, а мелодия была прекрасной. Команда была 
                      профессиональной и внимательной к нашим потребностям. Настоятельно рекомендую для любого особого случая! 🎉💕"
                    </p>
                    <p className="font-bold text-primary font-oswald text-xl tracking-wide">— Елена Иванова ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-festive-red via-festive-purple to-festive-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
        {/* Celebration decorations */}
        <div className="absolute top-10 left-20 text-4xl animate-confetti">🎊</div>
        <div className="absolute bottom-20 right-20 text-5xl animate-sparkle">🎭</div>
        <div className="absolute top-1/3 right-10 text-3xl animate-float">🎪</div>
        <div className="absolute bottom-1/3 left-10 text-4xl animate-wiggle">🏆</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-10 flex justify-center space-x-6">
            <span className="text-8xl animate-bounce-slow">🎵</span>
            <span className="text-8xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>✨</span>
            <span className="text-8xl animate-bounce-slow" style={{animationDelay: '1s'}}>🎶</span>
          </div>
          
          <h3 className="text-6xl md:text-8xl font-oswald font-black mb-8 animate-glow drop-shadow-2xl tracking-wider">
            СОЗДАЙТЕ СВОЮ<br/>
            ИДЕАЛЬНУЮ КОМПОЗИЦИЮ
          </h3>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-10 border-4 border-festive-gold/50">
            <p className="text-2xl font-merriweather font-bold drop-shadow-lg leading-relaxed">
              🎊 Позвольте нашим профессионалам создать уникальную и запоминающуюся композицию 
              для вашего особого случая! 🎊
              <br/>
              <span className="text-xl mt-4 block">
                Отмечайте дни рождения 🎂, свадьбы 💒 или юбилеи 🏆 с индивидуальным подходом!
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-primary backdrop-blur-md transform hover:scale-110 transition-all duration-300 px-12 py-6 text-xl font-bold shadow-2xl animate-glow bg-white/20">
              <Icon name="Phone" className="mr-3" size={24} />
              📞 +7 (831) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-festive-gold hover:text-white transform hover:scale-110 transition-all duration-300 px-12 py-6 text-xl font-bold shadow-2xl animate-sparkle">
              <Icon name="Mail" className="mr-3" size={24} />
              ✉️ Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-festive-red/60 to-gray-900 text-white py-12 border-t-4 border-festive-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Icon name="Music" className="text-festive-gold animate-sparkle" size={32} />
            <h4 className="text-4xl font-oswald font-bold tracking-wider">Твой хit</h4>
            <div className="flex space-x-2">
              <span className="text-2xl animate-bounce-slow">🎵</span>
              <span className="text-2xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>🎶</span>
            </div>
          </div>
          <p className="text-gray-300 font-inter text-lg">© 2024 Твой хit. Все права защищены. ✨</p>
          <p className="text-gray-300 mt-2 font-inter text-lg">Нижний Новгород | Создаем музыку для ваших торжеств 🎊🎭🎪</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
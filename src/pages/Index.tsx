import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    tariff: '500',
    hours: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTelegramBanner, setShowTelegramBanner] = useState(false);

  useEffect(() => {
    const bannerShown = localStorage.getItem('telegramBannerShown');
    if (!bannerShown) {
      const timer = setTimeout(() => {
        setShowTelegramBanner(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeTelegramBanner = () => {
    setShowTelegramBanner(false);
    localStorage.setItem('telegramBannerShown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '', tariff: '500', hours: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {showTelegramBanner && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-md w-full relative animate-scale-in">
            <button
              onClick={closeTelegramBanner}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={20} />
            </button>
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Send" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Подпишитесь на наш Telegram!</h3>
                <p className="text-gray-600 mb-6">
                  Получайте эксклюзивные новости о новых проектах, скидки и полезные советы по 3D печати
                </p>
                <a
                  href="https://t.me/dmd3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold text-lg flex items-center justify-center gap-2 mb-3"
                  onClick={() => localStorage.setItem('telegramBannerShown', 'true')}
                >
                  <Icon name="Send" size={24} />
                  Перейти в Telegram
                </a>
                <button
                  onClick={closeTelegramBanner}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  Возможно, позже
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B.G.V.</span>
              </div>
              <span className="text-2xl font-bold hidden sm:block">3D ПРИНТИНГ</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://t.me/dmd3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
              >
                <Icon name="Send" size={18} />
                <span>Telegram</span>
              </a>
              <Button onClick={() => scrollToSection('contact')} className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Заказать
              </Button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Цены
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 mt-2"
              >
                Заказать
              </Button>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Инновационные технологии
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Превращаем ваши идеи в реальность с помощью современной 3D-печати
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Получить консультацию
              </Button>
              <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="text-lg px-8">
                Смотреть работы
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/f788e3ec-b78a-424f-8b2f-534238ed0696/files/8497b96c-7e44-4937-b558-56336cc3e47a.jpg" 
              alt="3D печать" 
              className="relative rounded-2xl shadow-2xl mx-auto max-w-2xl w-full animate-float"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный спектр услуг 3D-печати для любых задач</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Box" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Прототипирование</h3>
                <p className="text-gray-600 leading-relaxed">
                  Быстрое создание прототипов для тестирования концепций и презентаций. Высокая точность и детализация.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Layers" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Мелкосерийное производство</h3>
                <p className="text-gray-600 leading-relaxed">
                  Печать малых и средних партий изделий. Идеально для стартапов и небольших производств.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Инженерные решения</h3>
                <p className="text-gray-600 leading-relaxed">
                  Разработка и печать функциональных деталей, инструментов и приспособлений для промышленности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Проектов выполнено</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">200+</div>
              <p className="text-lg opacity-90">Довольных клиентов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">7</div>
              <p className="text-lg opacity-90">Лет опыта</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">99%</div>
              <p className="text-lg opacity-90">Успешных заказов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Примеры наших проектов</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/09b68303-7b69-464a-89ff-38eb21f52c67.jpg" 
                  alt="Корпусные детали" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Корпусные детали</h4>
                    <p className="text-sm">Промышленные компоненты</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: ABS</span>
                  <span className="text-sm font-semibold text-primary">SLA печать</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/3ff3a67d-87de-479b-9270-de602aa6b45c.jpg" 
                  alt="Автомобильная деталь" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Автодетали</h4>
                    <p className="text-sm">Корпус дроссельной заслонки</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: ABS</span>
                  <span className="text-sm font-semibold text-primary">SLA печать</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/a2c5b08c-f255-4cf8-a63a-9b926bc640fa.jpg" 
                  alt="Автомобильная деталь вид 2" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Сложная геометрия</h4>
                    <p className="text-sm">Детали с внутренними каналами</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: ABS</span>
                  <span className="text-sm font-semibold text-primary">SLA печать</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/65236c36-f437-413b-8eff-d6acd6b23e49.jpg" 
                  alt="Механические компоненты" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Механические узлы</h4>
                    <p className="text-sm">Функциональные компоненты</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: PETG</span>
                  <span className="text-sm font-semibold text-primary">FDM печать</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/447ee674-04af-45ed-9c72-9e352efb97c6.jpg" 
                  alt="Белая деталь" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Дизайнерские изделия</h4>
                    <p className="text-sm">Эстетичная форма и функциональность</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: ASA</span>
                  <span className="text-sm font-semibold text-primary">FDM печать</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/687b1171-a88b-4525-a3e5-e873c3b38c98.jpg" 
                  alt="Шестерня" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">Зубчатые передачи</h4>
                    <p className="text-sm">Точная геометрия зубьев</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Материал: ABS</span>
                  <span className="text-sm font-semibold text-primary">FDM печать</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Что говорят о нас наши клиенты</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Отличное качество печати! Прототип получился именно таким, как мы задумывали. Сроки соблюдены, цена адекватная. Обязательно обратимся снова."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    АК
                  </div>
                  <div>
                    <p className="font-semibold">Алексей Кузнецов</p>
                    <p className="text-sm text-gray-500">Основатель стартапа</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Профессиональный подход на всех этапах работы. Помогли оптимизировать модель под печать, подсказали лучший материал. Результат превзошёл ожидания!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    МС
                  </div>
                  <div>
                    <p className="font-semibold">Мария Смирнова</p>
                    <p className="text-sm text-gray-500">Архитектор</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Заказывали серию деталей для производства. Всё выполнено качественно и в срок. Особенно понравилась оперативная связь и готовность идти навстречу."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    ДП
                  </div>
                  <div>
                    <p className="font-semibold">Дмитрий Петров</p>
                    <p className="text-sm text-gray-500">Инженер-технолог</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены и тарифы</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Прозрачное ценообразование без скрытых платежей</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Эконом</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">от 4₽ гр. ₽150</span>
                  <span className="text-gray-600">/час</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Базовое качество</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>PLA/ PETG пластик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Без постобработки</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Базовый</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">от 5₽ гр.  ₽350</span>
                  <span className="text-gray-600">/час</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Стандартное качество</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>PLA/PETG/ABS/TPU/SBS/ пластик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Базовая постобработка</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 border-4 border-primary scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Профессиональный</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">от 8₽ гр. ₽500</span>
                  <span className="text-gray-600">/час</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Высокое качество</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Премиум материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Полная постобработка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Консультация инженера</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-primary to-secondary">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Премиум</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₽800</span>
                  <span className="text-gray-600">/час</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Максимальное качество</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Любые материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Профессиональная обработка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Срочное изготовление</span>
                  </li>
                </ul>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Ответим на все вопросы и рассчитаем стоимость вашего проекта</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="Calculator" size={24} className="text-primary" />
                  Калькулятор стоимости
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Тариф</label>
                    <select 
                      className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.tariff}
                      onChange={(e) => setFormData({...formData, tariff: e.target.value})}
                    >
                      <option value="150">Эконом - ₽150/час</option>
                      <option value="350">Базовый - ₽350/час</option>
                      <option value="500">Профессиональный - ₽500/час</option>
                      <option value="800">Премиум - ₽800/час</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Количество часов</label>
                    <Input 
                      type="number" 
                      min="1"
                      placeholder="Введите количество часов" 
                      value={formData.hours}
                      onChange={(e) => setFormData({...formData, hours: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  
                  {formData.hours && (
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary">
                      <p className="text-sm text-gray-600 mb-2">Примерная стоимость:</p>
                      <p className="text-4xl font-bold text-primary">
                        ₽{(parseInt(formData.tariff) * parseInt(formData.hours)).toLocaleString('ru-RU')}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {formData.hours} {parseInt(formData.hours) === 1 ? 'час' : parseInt(formData.hours) < 5 ? 'часа' : 'часов'} × ₽{parseInt(formData.tariff).toLocaleString('ru-RU')}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    * Расчет является ориентировочным. Точная стоимость определяется после обсуждения деталей проекта.
                  </p>
                </div>
              </CardContent>
            </Card>
          
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                  Форма обратной связи
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-14">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <a href="mailto:dmd.3D@yandex.ru" className="hover:text-primary transition-colors">dmd.3D@yandex.ru</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <a href="tel:+79957939821" className="hover:text-primary transition-colors">+7 995 793-98-21</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Домодедово, ул. 1 Коммунистическая, 28а</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold mb-3 text-gray-700">Быстрая связь:</p>
                <div className="flex gap-3">
                  <a 
                    href="https://wa.me/79957939821" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <Icon name="MessageCircle" size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="https://t.me/dmd3d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                  >
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">B.G.V.</span>
            </div>
            <span className="text-2xl font-bold">3D ПРИНТИНГ</span>
          </div>
          <p className="text-gray-400 mb-6">Инновационные технологии 3D-печати</p>
          <p className="text-gray-500 text-sm">© 2024 3D ПРИНТИНГ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
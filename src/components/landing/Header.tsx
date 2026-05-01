import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = ({ onBookingClick, onQuizClick }: { onBookingClick: () => void; onQuizClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center">
            <span className="font-serif text-xl text-black font-bold">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-wider text-foreground">AURUM</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Motors Moscow</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            { id: 'catalog', label: 'Каталог' },
            { id: 'calc', label: 'Калькулятор' },
            { id: 'advantages', label: 'Преимущества' },
            { id: 'reviews', label: 'Отзывы' },
            { id: 'contacts', label: 'Контакты' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <div className="text-right">
            <a href="tel:+74951234567" className="text-foreground text-sm font-medium tracking-wide hover:text-gold transition-colors">
              +7 (495) 123-45-67
            </a>
            <div className="text-[10px] text-gold flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              открыто до 22:00 · 3 слота сегодня
            </div>
          </div>
          <Button
            onClick={onQuizClick}
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black tracking-wide"
          >
            Подобрать автомобиль
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-dark mt-3 mx-6 p-6 rounded">
          <div className="flex flex-col gap-4">
            {['catalog', 'calc', 'advantages', 'reviews', 'contacts'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-foreground hover:text-gold"
              >
                {{ catalog: 'Каталог', calc: 'Калькулятор', advantages: 'Преимущества', reviews: 'Отзывы', contacts: 'Контакты' }[id as 'catalog']}
              </button>
            ))}
            <a href="tel:+74951234567" className="text-gold mt-3">+7 (495) 123-45-67</a>
            <Button onClick={onQuizClick} className="bg-gold text-black hover:bg-gold/90">
              Подобрать автомобиль
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

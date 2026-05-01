import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center">
                <span className="font-serif text-xl text-black font-bold">A</span>
              </div>
              <div>
                <div className="font-serif text-xl tracking-wider text-foreground">AURUM</div>
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Motors Moscow</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Премиум-автомобили в Москве с 2014 года. Подбор, проверка, юридическое сопровождение,
              доставка по всей России. 1 800+ довольных клиентов.
            </p>
            <div className="flex gap-3 mt-5">
              {['Send', 'MessageCircle', 'Youtube', 'Instagram'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded border border-border hover:border-gold hover:text-gold flex items-center justify-center text-muted-foreground transition-colors"
                >
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-foreground mb-4">Навигация</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#catalog" className="block hover:text-gold">Каталог</a>
              <a href="#calc" className="block hover:text-gold">Калькулятор</a>
              <a href="#advantages" className="block hover:text-gold">Преимущества</a>
              <a href="#reviews" className="block hover:text-gold">Отзывы</a>
              <a href="#contacts" className="block hover:text-gold">Контакты</a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-foreground mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+74951234567" className="block hover:text-gold">+7 (495) 123-45-67</a>
              <div>info@aurum-motors.ru</div>
              <div>Кутузовский пр-т, 36, стр. 2</div>
              <div>Пн–Вс 09:00–22:00</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 AURUM Motors Moscow. Все права защищены.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold">Договор оферты</a>
            <a href="#" className="hover:text-gold">Согласие на обработку данных</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

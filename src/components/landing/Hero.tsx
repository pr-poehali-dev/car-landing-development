import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { toast } from 'sonner';

const Hero = ({ onCatalogClick, onQuizClick }: { onCatalogClick: () => void; onQuizClick: () => void }) => {
  const [budget, setBudget] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Подборка отправляется в Telegram', { description: 'Получите 3 варианта в течение 17 минут' });
    setName('');
    setPhone('');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/613772c7-b4d6-4f97-9ae0-4d7739c1c200.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></span>
              <span className="text-xs tracking-[0.2em] text-gold uppercase">Премиум-сегмент с 2014 года</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Автомобиль<br />
              <span className="gold-text-gradient italic">вашего уровня</span> —<br />
              без визитов в десять салонов
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Подбираем, проверяем и доставляем премиум-авто в Москве за 3 дня.
              Более <span className="text-gold">280 проверенных автомобилей</span> в наличии — от Mercedes до Bentley.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'Award', text: '11 лет на рынке' },
                { icon: 'ShieldCheck', text: 'Гарантия 5 млн ₽' },
                { icon: 'Repeat', text: 'Trade-in за 1 час' },
                { icon: 'Truck', text: 'Доставка бесплатно' },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Icon name={m.icon} size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-xs text-muted-foreground leading-snug">{m.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                onClick={onQuizClick}
                className="gold-gradient text-black hover:opacity-90 px-8 h-14 text-base tracking-wide shadow-2xl shadow-gold/20"
              >
                Подобрать автомобиль за 2 минуты
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onCatalogClick}
                className="border-foreground/30 text-foreground hover:bg-foreground hover:text-black px-8 h-14 text-base tracking-wide"
              >
                Смотреть каталог
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end w-full max-w-md">
            <div className="glass-dark rounded p-7 gold-border-gradient float">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Sparkles" size={16} className="text-gold" />
                <span className="text-xs tracking-[0.25em] text-gold uppercase">Персональный подбор</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-1">Узнайте свой автомобиль</h3>
              <p className="text-sm text-muted-foreground mb-6">3 варианта в Telegram за 17 минут</p>

              <form onSubmit={submit} className="space-y-4">
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="bg-secondary border-border h-12 text-foreground">
                    <SelectValue placeholder="Бюджет" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="3-7">от 3 до 7 млн ₽</SelectItem>
                    <SelectItem value="7-15">от 7 до 15 млн ₽</SelectItem>
                    <SelectItem value="15-30">от 15 до 30 млн ₽</SelectItem>
                    <SelectItem value="30-50">от 30 до 50 млн ₽</SelectItem>
                    <SelectItem value="50+">свыше 50 млн ₽</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="bg-secondary border-border h-12 text-foreground">
                    <SelectValue placeholder="Тип кузова" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="sedan">Седан</SelectItem>
                    <SelectItem value="suv">Внедорожник</SelectItem>
                    <SelectItem value="coupe">Купе</SelectItem>
                    <SelectItem value="cabrio">Кабриолет</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border h-12 text-foreground"
                />
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-secondary border-border h-12 text-foreground"
                />

                <Button
                  type="submit"
                  className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Получить 3 варианта в Telegram
                </Button>

                <p className="text-[11px] text-muted-foreground text-center leading-snug">
                  Отправим подборку за 17 минут.<br />Без спама и навязчивых звонков.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <Icon name="ChevronDown" size={28} />
      </div>
    </section>
  );
};

export default Hero;
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const videoReviews = [
  { name: 'Андрей', role: 'владелец строительной компании', car: 'Range Rover Autobiography 2023', term: '4 дня' },
  { name: 'Михаил', role: 'управляющий партнёр юр. фирмы', car: 'Mercedes-Benz S 580 2024', term: '3 дня' },
  { name: 'Дмитрий', role: 'основатель IT-компании', car: 'Porsche 911 Turbo S 2024', term: '5 дней' },
  { name: 'Олег', role: 'предприниматель', car: 'Bentley Continental GT 2023', term: '6 дней' },
  { name: 'Сергей', role: 'инвестор', car: 'BMW M8 Competition 2024', term: '4 дня' },
];

const textReviews = [
  {
    source: 'Яндекс.Карты',
    rating: 4.9,
    text: 'Покупал S-класс. Поразила скорость работы — 3 варианта в Telegram через 12 минут. Приехал, осмотрел, оформил за день. Юрист прямо при мне проверил все документы.',
    name: 'Алексей В.',
    date: 'март 2026',
  },
  {
    source: 'Авто.ру',
    rating: 4.8,
    text: 'Меняли Cayenne на Range Rover. Trade-in оценили честно, без занижений как у дилеров. Доплата ушла на спортпакет. Очень понравился закрытый формат шоурума.',
    name: 'Ирина К.',
    date: 'февраль 2026',
  },
  {
    source: '2GIS',
    rating: 4.9,
    text: 'Брали авто для жены — Audi Q8. Менеджер записал персональный видеообзор по моему запросу за 1 час. Это решило вопрос — приехали и забрали. Сервис на уровне.',
    name: 'Виктор П.',
    date: 'январь 2026',
  },
];

const Reviews = ({ onBookingClick, onQuizClick }: { onBookingClick: () => void; onQuizClick: () => void }) => {
  return (
    <section id="reviews" className="py-24 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Социальное доказательство</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            1 800 клиентов с 2014 года.<br />
            <span className="italic gold-text-gradient">Вот что они говорят</span>
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xs tracking-[0.3em] text-gold uppercase mb-5">Видео-отзывы</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
            {videoReviews.map((v, i) => (
              <div
                key={i}
                className="shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded overflow-hidden bg-secondary border border-border group-hover:border-gold/40 transition-all">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.95) 100%), url(https://images.unsplash.com/photo-${
                        ['1568605114967-8130f3a36994', '1542362567-b07e54358753', '1606664515524-ed2f786a0bd6', '1606664515424-89f1c1c1ee6d', '1503376780353-7e6692767b70'][i]
                      }?w=600)`,
                    }}
                  />
                  <div className="absolute top-4 right-4 glass px-2 py-1 rounded text-[10px] text-gold tracking-wider">
                    {v.term}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name="Play" size={24} className="text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-serif text-lg text-foreground">{v.name}</div>
                    <div className="text-[11px] text-muted-foreground">{v.role}</div>
                    <div className="text-xs text-gold mt-2">{v.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {textReviews.map((r, i) => (
            <div key={i} className="bg-card border border-border rounded p-7">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs tracking-[0.2em] text-gold uppercase">{r.source}</div>
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={14} className="text-gold fill-gold" />
                  <span className="text-sm text-foreground">{r.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">«{r.text}»</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-xs text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gold-border-gradient rounded p-8 mb-12">
          {[
            { num: '1 800+', text: 'проданных автомобилей' },
            { num: '4.9', text: 'средняя оценка на Яндексе' },
            { num: '68%', text: 'клиентов возвращаются' },
            { num: '11 лет', text: 'в премиум-сегменте' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-4xl gold-text-gradient mb-1">{s.num}</div>
              <div className="text-xs text-muted-foreground tracking-wide">{s.text}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onBookingClick}
            className="gold-gradient text-black hover:opacity-90 px-8 h-13 tracking-wide"
          >
            Посмотреть автомобили в наличии
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onQuizClick}
            className="border-gold text-gold hover:bg-gold hover:text-black px-8 h-13 tracking-wide"
          >
            Подобрать свой
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

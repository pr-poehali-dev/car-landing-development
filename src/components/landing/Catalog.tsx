import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: string;
  engine: string;
  price: number;
  oldPrice?: number;
  monthly: number;
  image: string;
  badge?: { text: string; type: 'new' | 'sale' | 'reserved' };
  watching: number;
}

const cars: Car[] = [
  {
    id: 1,
    brand: 'Mercedes-Benz',
    model: 'S 500 4MATIC Long',
    year: 2024,
    mileage: '12 400 км',
    engine: '4.0 V8 · AT',
    price: 18750000,
    oldPrice: 19200000,
    monthly: 187400,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/613772c7-b4d6-4f97-9ae0-4d7739c1c200.jpg',
    badge: { text: '−450 000 ₽ до 5 мая', type: 'sale' },
    watching: 4,
  },
  {
    id: 2,
    brand: 'Range Rover',
    model: 'Autobiography LWB',
    year: 2024,
    mileage: '8 900 км',
    engine: '4.4 V8 · AT',
    price: 24900000,
    monthly: 248600,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/74ceec69-4935-4d1e-b2bc-3d01229cda2c.jpg',
    badge: { text: 'NEW', type: 'new' },
    watching: 7,
  },
  {
    id: 3,
    brand: 'Bentley',
    model: 'Continental GT V8',
    year: 2023,
    mileage: '15 200 км',
    engine: '4.0 V8 · AT',
    price: 32500000,
    oldPrice: 33800000,
    monthly: 324800,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/d0a31e50-ac3d-484c-8bc1-f61ad9780d99.jpg',
    badge: { text: 'Бронь до 18:00', type: 'reserved' },
    watching: 3,
  },
  {
    id: 4,
    brand: 'Porsche',
    model: '911 Turbo S',
    year: 2024,
    mileage: '5 100 км',
    engine: '3.7 H6 · PDK',
    price: 27800000,
    monthly: 277400,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/23bdb5e1-71d2-45bf-880c-f97d067d0726.jpg',
    badge: { text: 'NEW', type: 'new' },
    watching: 5,
  },
  {
    id: 5,
    brand: 'BMW',
    model: '760i xDrive M Sport',
    year: 2024,
    mileage: '9 800 км',
    engine: '4.4 V8 · AT',
    price: 21200000,
    monthly: 211800,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/6ecaa494-5a3a-4b7a-9a28-9a6bd2843419.jpg',
    watching: 2,
  },
  {
    id: 6,
    brand: 'Audi',
    model: 'RS Q8 Performance',
    year: 2023,
    mileage: '18 700 км',
    engine: '4.0 V8 · Tiptronic',
    price: 16400000,
    oldPrice: 17100000,
    monthly: 163800,
    image: 'https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/45651fdb-e227-4733-b52a-5309c4e627bd.jpg',
    badge: { text: '−700 000 ₽', type: 'sale' },
    watching: 6,
  },
];

const Catalog = ({ onBookCar }: { onBookCar: (car: Car) => void }) => {
  const [filter, setFilter] = useState<'all' | 'new' | 'used'>('all');

  return (
    <section id="catalog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-xs tracking-[0.3em] text-gold uppercase">Шоурум</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              В наличии на <span className="italic gold-text-gradient">Кутузовском</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Все автомобили проверены по 137 пунктам диагностики. Можно забрать сегодня.
            </p>
          </div>

          <div className="flex items-center gap-2 glass rounded p-1">
            {[
              { id: 'all', label: 'Все' },
              { id: 'new', label: 'Новые' },
              { id: 'used', label: 'С пробегом' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id as 'all' | 'new' | 'used')}
                className={`px-5 py-2 rounded text-sm tracking-wide transition-all ${
                  filter === t.id ? 'gold-gradient text-black' : 'text-muted-foreground hover:text-gold'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-card rounded overflow-hidden border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {car.badge && (
                  <Badge
                    className={`absolute top-4 left-4 tracking-wide border-0 ${
                      car.badge.type === 'new'
                        ? 'gold-gradient text-black'
                        : car.badge.type === 'sale'
                        ? 'bg-red-600/90 text-white'
                        : 'glass text-gold'
                    }`}
                  >
                    {car.badge.text}
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 glass px-3 py-1 rounded-full">
                  <Icon name="Eye" size={12} className="text-gold" />
                  <span className="text-[11px] text-foreground">смотрят {car.watching}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs tracking-[0.2em] text-gold uppercase mb-1">{car.brand}</div>
                <h3 className="font-serif text-2xl text-foreground mb-2 leading-tight">{car.model}</h3>
                <div className="text-sm text-muted-foreground mb-5">
                  {car.year} · {car.mileage} · {car.engine}
                </div>

                <div className="flex items-end justify-between mb-5 pb-5 border-b border-border">
                  <div>
                    {car.oldPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {car.oldPrice.toLocaleString('ru')} ₽
                      </div>
                    )}
                    <div className="font-serif text-2xl text-foreground">
                      {car.price.toLocaleString('ru')} ₽
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-muted-foreground">в кредит от</div>
                    <div className="text-sm text-gold">{car.monthly.toLocaleString('ru')} ₽/мес</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => onBookCar(car)}
                    className="gold-gradient text-black hover:opacity-90 tracking-wide text-sm h-11"
                  >
                    Забронировать
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary hover:text-gold hover:border-gold/40 tracking-wide text-sm h-11"
                  >
                    Полный отчёт
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black px-10 h-13 tracking-wide"
          >
            Показать все 284 автомобиля
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Не нашли нужный? <span className="text-gold">Привезём под заказ из Европы или ОАЭ за 14–21 день</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
export type { Car };

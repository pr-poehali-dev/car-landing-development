import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import type { Car } from './Catalog';

const carOptions = [
  'Mercedes-Benz S 500 4MATIC Long',
  'Range Rover Autobiography LWB',
  'Bentley Continental GT V8',
  'Porsche 911 Turbo S',
  'BMW 760i xDrive M Sport',
  'Audi RS Q8 Performance',
  'Подберите для меня',
];

const timeSlots = [
  '10:00', '10:40', '11:20', '12:00', '12:40', '13:20',
  '14:00', '14:40', '15:20', '16:00', '16:40', '17:20',
  '18:00', '18:40', '19:20', '20:00', '20:40', '21:20',
];

const busySlots = ['10:40', '12:00', '14:00', '15:20', '17:20', '20:00'];

const monthRu = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const dayRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const Booking = ({ preselectedCar }: { preselectedCar: Car | null }) => {
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState<'tg' | 'wa'>('tg');
  const [needTradeIn, setNeedTradeIn] = useState(false);
  const [needTestDrive, setNeedTestDrive] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (preselectedCar) {
      setSelectedCar(`${preselectedCar.brand} ${preselectedCar.model}`);
    }
  }, [preselectedCar]);

  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCar || selectedDate === null || !selectedTime || !name || !phone) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    toast.success('Бронь принята!', {
      description: `Подтвердим в течение 7 минут в ${contact === 'tg' ? 'Telegram' : 'WhatsApp'}`,
    });
    setSelectedCar('');
    setSelectedDate(null);
    setSelectedTime('');
    setName('');
    setPhone('');
    setComment('');
  };

  return (
    <section id="booking" className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Бронирование</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Забронируйте <span className="italic gold-text-gradient">просмотр</span> автомобиля
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Шоурум на Кутузовском, 36. Без других клиентов в зале — только вы и менеджер.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <form onSubmit={submit} className="lg:col-span-3 glass-dark rounded p-8 space-y-7">
            <div>
              <label className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold uppercase mb-3">
                <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-[11px] text-black">1</span>
                Выберите автомобиль
              </label>
              <Select value={selectedCar} onValueChange={setSelectedCar}>
                <SelectTrigger className="bg-secondary border-border h-12 text-foreground">
                  <SelectValue placeholder="Выберите из списка" />
                </SelectTrigger>
                <SelectContent>
                  {carOptions.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold uppercase mb-3">
                <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-[11px] text-black">2</span>
                Выберите дату
              </label>
              <div className="grid grid-cols-7 gap-2">
                {days.map((d, i) => {
                  const isSelected = selectedDate === i;
                  const isHot = i === 0;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(i)}
                      className={`p-2 rounded text-center transition-all border ${
                        isSelected
                          ? 'gold-gradient text-black border-transparent'
                          : 'bg-secondary border-border text-foreground hover:border-gold/40'
                      }`}
                    >
                      <div className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-black/70' : 'text-muted-foreground'}`}>
                        {dayRu[d.getDay()]}
                      </div>
                      <div className="font-serif text-lg leading-tight">{d.getDate()}</div>
                      <div className={`text-[9px] ${isSelected ? 'text-black/70' : 'text-muted-foreground'}`}>
                        {monthRu[d.getMonth()]}
                      </div>
                      {isHot && !isSelected && (
                        <div className="w-1 h-1 bg-gold rounded-full mx-auto mt-1"></div>
                      )}
                    </button>
                  );
                })}
              </div>
              {selectedDate === 0 && (
                <div className="text-[11px] text-gold mt-2">⚡ Доступно сегодня · свободно 3 слота</div>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold uppercase mb-3">
                <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-[11px] text-black">3</span>
                Выберите время
              </label>
              <div className="grid grid-cols-6 gap-2">
                {timeSlots.map((t) => {
                  const isBusy = busySlots.includes(t);
                  const isSelected = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={isBusy}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 rounded text-sm border transition-all ${
                        isBusy
                          ? 'bg-secondary/30 border-border/40 text-muted-foreground/50 line-through cursor-not-allowed'
                          : isSelected
                          ? 'gold-gradient text-black border-transparent'
                          : 'bg-secondary border-border text-foreground hover:border-gold/40'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] text-muted-foreground mt-2">Слоты по 40 минут · вычеркнутые — заняты</div>
            </div>

            <div className="pt-4 border-t border-border space-y-4">
              <label className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold uppercase">
                <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-[11px] text-black">4</span>
                Ваши контакты
              </label>

              <div className="grid md:grid-cols-2 gap-3">
                <Input
                  placeholder="Имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border h-12"
                />
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__ *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-secondary border-border h-12"
                />
              </div>

              <div>
                <div className="text-xs text-muted-foreground mb-2">Куда отправить подтверждение?</div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setContact('tg')}
                    className={`flex-1 py-3 rounded border flex items-center justify-center gap-2 transition-all ${
                      contact === 'tg' ? 'border-gold text-gold bg-gold/5' : 'border-border text-muted-foreground hover:border-gold/40'
                    }`}
                  >
                    <Icon name="Send" size={16} />
                    Telegram
                  </button>
                  <button
                    type="button"
                    onClick={() => setContact('wa')}
                    className={`flex-1 py-3 rounded border flex items-center justify-center gap-2 transition-all ${
                      contact === 'wa' ? 'border-gold text-gold bg-gold/5' : 'border-border text-muted-foreground hover:border-gold/40'
                    }`}
                  >
                    <Icon name="MessageCircle" size={16} />
                    WhatsApp
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={needTradeIn}
                    onCheckedChange={(v) => setNeedTradeIn(v === true)}
                    className="border-gold data-[state=checked]:bg-gold data-[state=checked]:text-black mt-0.5"
                  />
                  <span className="text-sm text-foreground">Нужен trade-in моего авто на этой же встрече</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={needTestDrive}
                    onCheckedChange={(v) => setNeedTestDrive(v === true)}
                    className="border-gold data-[state=checked]:bg-gold data-[state=checked]:text-black mt-0.5"
                  />
                  <span className="text-sm text-foreground">Хочу тест-драйв (потребуются права кат. B)</span>
                </label>
              </div>

              <Textarea
                placeholder="Что важно показать или спросить? (необязательно)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="bg-secondary border-border min-h-[80px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gold-gradient text-black hover:opacity-90 h-14 tracking-wide text-base shadow-2xl shadow-gold/20"
            >
              Забронировать просмотр
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>

            <div className="text-center space-y-1">
              <p className="text-xs text-muted-foreground">
                Подтвердим бронь в течение 7 минут в {contact === 'tg' ? 'Telegram' : 'WhatsApp'}
              </p>
              <p className="text-xs text-muted-foreground">
                Бронирование бесплатное и ни к чему не обязывает
              </p>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="gold-border-gradient rounded p-7">
              <div className="flex items-center gap-2 mb-5">
                <Icon name="Sparkles" size={18} className="text-gold" />
                <h3 className="font-serif text-xl text-foreground">На встрече вы получите:</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Закрытый осмотр авто (без других клиентов)',
                  'Тест-драйв до 40 минут по согласованному маршруту',
                  'Полный отчёт по 137 пунктам диагностики на руки',
                  'Проверку юридической чистоты при вас',
                  'Расчёт кредита/лизинга от 5 банков за 1 час',
                  'Оценку вашего trade-in за 40 минут',
                  'Espresso, чай, обед — за наш счёт',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name="Check" size={16} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-foreground">Москва, Кутузовский пр-т, 36, стр. 2</div>
                  <div className="text-xs text-muted-foreground">метро Парк Победы · 5 мин пешком</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Car" size={18} className="text-gold shrink-0" />
                <div className="text-sm text-foreground">Бесплатная закрытая парковка</div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-gold shrink-0" />
                <a href="tel:+74951234567" className="text-sm text-foreground hover:text-gold">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

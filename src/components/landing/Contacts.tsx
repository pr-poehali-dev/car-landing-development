import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Заявка принята', { description: 'Перезвоним в течение 3 минут' });
    setName('');
    setPhone('');
    setTime('');
  };

  return (
    <section id="contacts" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Контакты</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Шоурум на <span className="italic gold-text-gradient">Кутузовском</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="glass-dark rounded p-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded gold-gradient flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-xs text-gold tracking-[0.2em] uppercase mb-1">Адрес</div>
                  <div className="text-foreground">Москва, Кутузовский пр-т, 36, стр. 2</div>
                  <div className="text-sm text-muted-foreground mt-1">метро Парк Победы · 5 мин пешком · бесплатная закрытая парковка</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded gold-gradient flex items-center justify-center shrink-0">
                  <Icon name="Clock" size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-xs text-gold tracking-[0.2em] uppercase mb-1">Часы работы</div>
                  <div className="text-foreground">Пн–Вс 09:00–22:00</div>
                  <div className="text-sm text-muted-foreground mt-1">Без выходных и праздников</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded gold-gradient flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={20} className="text-black" />
                </div>
                <div>
                  <div className="text-xs text-gold tracking-[0.2em] uppercase mb-1">Отдел продаж</div>
                  <a href="tel:+74951234567" className="text-foreground hover:text-gold text-lg">+7 (495) 123-45-67</a>
                  <div className="text-sm text-muted-foreground mt-1">corporate@aurum-motors.ru — для юрлиц</div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1 border-gold text-gold hover:bg-gold hover:text-black h-12">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" className="flex-1 border-gold text-gold hover:bg-gold hover:text-black h-12">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="glass-dark rounded p-7">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PhoneCall" size={18} className="text-gold" />
                <h3 className="font-serif text-xl text-foreground">Перезвоним за 3 минуты</h3>
              </div>
              <form onSubmit={submit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-secondary border-border h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-secondary border-border h-12"
                  />
                </div>
                <Input
                  placeholder="Удобное время для звонка (необязательно)"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-secondary border-border h-12"
                />
                <Button type="submit" className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide">
                  Жду звонка
                </Button>
              </form>
            </div>
          </div>

          <div className="rounded overflow-hidden border border-border min-h-[500px] relative">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.534540%2C55.738697&z=15&pt=37.534540,55.738697,pm2dgl"
              className="w-full h-full min-h-[500px] grayscale"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 right-4 glass-dark p-4 rounded">
              <div className="text-xs text-gold tracking-[0.2em] uppercase mb-1">Шоурум AURUM</div>
              <div className="text-sm text-foreground">Кутузовский пр-т, 36, стр. 2</div>
              <Button size="sm" className="mt-3 gold-gradient text-black hover:opacity-90 text-xs h-8">
                <Icon name="Navigation" size={12} className="mr-1.5" />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

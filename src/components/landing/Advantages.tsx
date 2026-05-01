import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const advantages = [
  {
    icon: 'ShieldCheck',
    number: '5 000 000 ₽',
    title: 'Финансовая гарантия чистоты сделки',
    text: 'Если найдём проблему с документами после покупки — возвращаем стоимость авто. Прописано в договоре.',
  },
  {
    icon: 'ScanLine',
    number: '137 пунктов',
    title: 'Диагностика на стенде Bosch',
    text: 'Проверка ЛКП толщиномером, компьютерная диагностика 14 систем, проверка на залог в реестре нотариусов и базе ФССП.',
  },
  {
    icon: 'Lock',
    number: '5 000 ₽',
    title: 'Бронирование за возвратные',
    text: 'Закрепили авто за вами на 72 часа. Не подошёл — деньги возвращаем в день обращения.',
  },
  {
    icon: 'Truck',
    number: 'По всей РФ',
    title: 'Доставка за наш счёт',
    text: 'Подача автовоза с закрытым кузовом. Передача по акту в вашем городе.',
  },
  {
    icon: 'Eye',
    number: 'Только вы',
    title: 'Закрытый шоурум без других клиентов',
    text: 'Слот на просмотр — только для вас. Кофе, договор, тест-драйв в спокойной обстановке.',
  },
  {
    icon: 'PhoneCall',
    number: '24/7',
    title: 'Личный менеджер после покупки',
    text: 'Сервис, ТО, страховка, продажа через 2 года — всё через одно окно.',
  },
];

const Advantages = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carInterest, setCarInterest] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Видеообзор готовим', { description: 'Менеджер запишет персональное видео и пришлёт в Telegram в течение 2 часов' });
    setName('');
    setPhone('');
    setCarInterest('');
  };

  return (
    <section id="advantages" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Почему мы</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-4xl mx-auto">
            Почему 1 800 клиентов выбрали <span className="italic gold-text-gradient">нас</span>,<br className="hidden md:block" />
            а не дилерский центр
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((a, i) => (
            <div
              key={i}
              className="group bg-card border border-border hover:border-gold/40 rounded p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name={a.icon} size={26} className="text-black" />
              </div>
              <div className="font-serif text-3xl text-gold mb-2">{a.number}</div>
              <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="gold-border-gradient rounded p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Video" size={20} className="text-gold" />
                <span className="text-xs tracking-[0.25em] text-gold uppercase">Эксклюзивно</span>
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-3 leading-tight">
                Хотите увидеть конкретный автомобиль изнутри?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Менеджер запишет персональное видео авто (5–7 минут): экстерьер, салон, под капотом,
                голосом озвучит ответы на ваши вопросы. Пришлём в Telegram в течение 2 часов.
              </p>
            </div>
            <form onSubmit={submit} className="space-y-3">
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
              <Input
                placeholder="Какой автомобиль интересует?"
                value={carInterest}
                onChange={(e) => setCarInterest(e.target.value)}
                className="bg-secondary border-border h-12"
              />
              <Button type="submit" className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide">
                <Icon name="Video" size={16} className="mr-2" />
                Запросить видеообзор от менеджера
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;

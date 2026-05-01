import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Calculator = () => {
  const [price, setPrice] = useState([15000000]);
  const [down, setDown] = useState([30]);
  const [term, setTerm] = useState([60]);
  const [withKasko, setWithKasko] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const monthly = useMemo(() => {
    const loan = price[0] * (1 - down[0] / 100);
    const rate = 0.049 / 12;
    const n = term[0];
    const m = (loan * rate) / (1 - Math.pow(1 + rate, -n));
    return Math.round(m + (withKasko ? 18000 : 0));
  }, [price, down, term, withKasko]);

  const overpay = Math.round(monthly * term[0] - price[0] * (1 - down[0] / 100));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Запрос отправлен в 5 банков', { description: 'Одобрение придёт в течение 1 часа' });
    setName('');
    setPhone('');
  };

  return (
    <section id="calc" className="py-24 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Расчёт за 30 секунд</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Рассчитайте свой <span className="italic gold-text-gradient">автомобиль</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Кредит, лизинг, trade-in вашего текущего авто — всё в одном окне
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="credit" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto bg-secondary border border-border">
              <TabsTrigger value="credit" className="data-[state=active]:bg-gold data-[state=active]:text-black tracking-wide">
                Кредит / Лизинг
              </TabsTrigger>
              <TabsTrigger value="tradein" className="data-[state=active]:bg-gold data-[state=active]:text-black tracking-wide">
                Trade-in
              </TabsTrigger>
            </TabsList>

            <TabsContent value="credit" className="mt-8">
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 glass-dark rounded p-8 space-y-7">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm text-muted-foreground tracking-wide">Стоимость автомобиля</label>
                      <span className="font-serif text-xl text-gold">{price[0].toLocaleString('ru')} ₽</span>
                    </div>
                    <Slider value={price} onValueChange={setPrice} min={1000000} max={80000000} step={500000} className="[&_[role=slider]]:bg-gold [&_[role=slider]]:border-gold" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm text-muted-foreground tracking-wide">Первоначальный взнос</label>
                      <span className="font-serif text-xl text-gold">{down[0]}%</span>
                    </div>
                    <Slider value={down} onValueChange={setDown} min={0} max={70} step={5} />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm text-muted-foreground tracking-wide">Срок кредита</label>
                      <span className="font-serif text-xl text-gold">{term[0]} мес</span>
                    </div>
                    <Slider value={term} onValueChange={setTerm} min={12} max={84} step={6} />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer pt-2">
                    <Checkbox
                      checked={withKasko}
                      onCheckedChange={(v) => setWithKasko(v === true)}
                      className="border-gold data-[state=checked]:bg-gold data-[state=checked]:text-black"
                    />
                    <span className="text-sm text-foreground">Включить КАСКО в платёж</span>
                  </label>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">Банки-партнёры:</span>
                    {['Газпромбанк', 'Тинькофф', 'Альфа', 'Райффайзен', 'ВТБ'].map((b) => (
                      <span key={b} className="text-xs text-foreground/80">{b}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 gold-border-gradient rounded p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs tracking-[0.25em] text-gold uppercase mb-2">Ежемесячный платёж</div>
                    <div className="font-serif text-5xl text-foreground mb-6">
                      {monthly.toLocaleString('ru')} <span className="text-2xl text-muted-foreground">₽/мес</span>
                    </div>

                    <div className="space-y-3 pb-6 border-b border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Переплата</span>
                        <span className="text-foreground">{overpay.toLocaleString('ru')} ₽</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ставка</span>
                        <span className="text-gold">от 4.9% годовых</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={submit} className="space-y-3 mt-6">
                    <Input
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-secondary border-border h-11"
                    />
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-secondary border-border h-11"
                    />
                    <Button type="submit" className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide">
                      Получить одобрение за 1 час
                    </Button>
                    <p className="text-[11px] text-muted-foreground text-center">
                      Запрос мягкий — не влияет на кредитную историю
                    </p>
                  </form>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tradein" className="mt-8">
              <div className="glass-dark rounded p-8 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Repeat" size={24} className="text-gold" />
                  <h3 className="font-serif text-2xl text-foreground">Оценим ваш автомобиль</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Марка" className="bg-secondary border-border h-12" />
                  <Input placeholder="Модель" className="bg-secondary border-border h-12" />
                  <Input placeholder="Год выпуска" type="number" className="bg-secondary border-border h-12" />
                  <Input placeholder="Пробег, км" type="number" className="bg-secondary border-border h-12" />
                  <Select>
                    <SelectTrigger className="bg-secondary border-border h-12 md:col-span-2">
                      <SelectValue placeholder="Состояние автомобиля" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Отличное — без сколов и ДТП</SelectItem>
                      <SelectItem value="good">Хорошее — мелкие косметические дефекты</SelectItem>
                      <SelectItem value="medium">Среднее — есть видимые дефекты</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-3 mt-6">
                  <Input placeholder="Имя" className="bg-secondary border-border h-12" />
                  <Input placeholder="+7 (___) ___-__-__" type="tel" className="bg-secondary border-border h-12" />
                </div>

                <Button className="w-full gold-gradient text-black hover:opacity-90 h-13 mt-5 tracking-wide">
                  Узнать оценку
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ориентировочная оценка — за 5 минут на телефон.
                  Точная цена — после 40-минутной диагностики в шоуруме.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

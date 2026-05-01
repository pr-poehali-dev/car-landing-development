import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { toast } from 'sonner';

const steps = [
  {
    title: 'Какой бюджет рассматриваете?',
    options: ['до 7 млн ₽', '7–15 млн ₽', '15–30 млн ₽', '30–50 млн ₽', 'свыше 50 млн ₽'],
  },
  {
    title: 'Какой тип кузова предпочитаете?',
    options: ['Седан', 'Внедорожник / SUV', 'Купе', 'Кабриолет', 'Не определился'],
  },
  {
    title: 'Когда планируете покупку?',
    options: ['В ближайшие дни', 'В этом месяце', 'В течение 2–3 месяцев', 'Просто изучаю рынок'],
  },
  {
    title: 'Нужен ли trade-in вашего текущего авто?',
    options: ['Да, есть авто на обмен', 'Нет, оплата деньгами', 'Рассматриваю кредит/лизинг'],
  },
];

const QuizDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isContact = step === steps.length;

  const select = (opt: string) => {
    const next = [...answers];
    next[step] = opt;
    setAnswers(next);
    setTimeout(() => setStep(step + 1), 200);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Заполните имя и телефон');
      return;
    }
    toast.success('Подборка готовится!', { description: 'Получите 3 варианта в Telegram за 17 минут' });
    onOpenChange(false);
    setTimeout(() => {
      setStep(0);
      setAnswers([]);
      setName('');
      setPhone('');
    }, 300);
  };

  const progress = ((isContact ? steps.length : step) / steps.length) * 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
            <Icon name="Sparkles" size={20} className="text-gold" />
            Подберём идеальный автомобиль
          </DialogTitle>
        </DialogHeader>

        <div className="h-1 bg-secondary rounded overflow-hidden">
          <div
            className="h-full gold-gradient transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-xs text-muted-foreground tracking-wide">
          Шаг {Math.min(step + 1, steps.length + 1)} из {steps.length + 1}
        </div>

        {!isContact ? (
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-foreground">{steps[step].title}</h3>
            <div className="grid gap-2">
              {steps[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => select(opt)}
                  className={`p-4 rounded border text-left transition-all ${
                    answers[step] === opt
                      ? 'gold-border-gradient text-gold'
                      : 'bg-secondary border-border text-foreground hover:border-gold/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {step > 0 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-muted-foreground hover:text-gold">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
            )}
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <h3 className="font-serif text-xl text-foreground">Куда отправить подборку?</h3>
            <p className="text-sm text-muted-foreground">3 варианта под ваш запрос — в Telegram за 17 минут</p>

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

            <Button type="submit" className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide">
              <Icon name="Send" size={16} className="mr-2" />
              Получить подборку в Telegram
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              Без спама и навязчивых звонков. Свяжемся только по делу.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuizDialog;

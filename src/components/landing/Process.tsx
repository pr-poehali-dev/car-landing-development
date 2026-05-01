import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const steps = [
  {
    day: 'День 1',
    icon: 'MessageSquare',
    title: 'Заявка → подборка',
    text: 'За 17 минут отправляем 3 варианта под ваш бюджет и задачи. В Telegram или WhatsApp.',
  },
  {
    day: 'День 1–2',
    icon: 'Car',
    title: 'Закрытый просмотр',
    text: 'Назначаем удобное время. Тест-драйв до 40 минут по согласованному маршруту.',
  },
  {
    day: 'День 2',
    icon: 'ScanLine',
    title: 'Бронь + диагностика',
    text: 'Бронь 5 000 ₽. Полная диагностика при вас. Юрист проверяет документы за 30 минут.',
  },
  {
    day: 'День 3',
    icon: 'Key',
    title: 'Сделка и выдача',
    text: 'Договор по форме, оплата, постановка на учёт под ключ. Торжественная выдача с фото.',
  },
];

const Process = ({ onQuizClick }: { onQuizClick: () => void }) => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Процесс</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Покупка за <span className="italic gold-text-gradient">4 шага</span> — без сюрпризов
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full bg-card border border-gold/40 flex items-center justify-center relative z-10">
                    <Icon name={s.icon} size={32} className="text-gold" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black text-sm font-bold z-20">
                    {i + 1}
                  </div>
                </div>
                <div className="text-xs tracking-[0.25em] text-gold uppercase mb-2">{s.day}</div>
                <h3 className="font-serif text-xl text-foreground mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Button
            size="lg"
            onClick={onQuizClick}
            className="gold-gradient text-black hover:opacity-90 px-10 h-13 tracking-wide"
          >
            Начать с шага 1 — получить подборку
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;

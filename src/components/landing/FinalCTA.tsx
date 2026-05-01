import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const FinalCTA = ({ onBookingClick, onQuizClick }: { onBookingClick: () => void; onQuizClick: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/2dcc6bde-b05e-4875-8fa8-cdd12358c770/files/d0a31e50-ac3d-484c-8bc1-f61ad9780d99.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-xs tracking-[0.3em] text-gold uppercase">Время выбрать</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] mb-6">
            Ваш следующий автомобиль<br />
            <span className="italic gold-text-gradient">уже в нашем шоуруме</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Запишитесь на закрытый просмотр сегодня — и заберите ключи в течение 72 часов.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button
              size="lg"
              onClick={onBookingClick}
              className="gold-gradient text-black hover:opacity-90 px-8 h-14 text-base tracking-wide shadow-2xl shadow-gold/30"
            >
              Забронировать просмотр
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onQuizClick}
              className="border-gold text-gold hover:bg-gold hover:text-black px-8 h-14 text-base tracking-wide"
            >
              Получить подборку в Telegram
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Сегодня свободно <span className="text-gold">3 слота</span> · Завтра — <span className="text-gold">7 слотов</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background gold-gradient flex items-center justify-center text-xs text-black font-bold">
                    {['А', 'М', 'Д', 'И', 'С'][i - 1]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Ответим лично в течение 7 минут</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

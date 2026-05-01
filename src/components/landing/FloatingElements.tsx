import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const FloatingElements = ({ onBookingClick }: { onBookingClick: () => void }) => {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitShown, setExitShown] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShowStickyCta(scrolled > 0.4 && scrolled < 0.92);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitShown) {
        setShowExitIntent(true);
        setExitShown(true);
      }
    };
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, [exitShown]);

  const submitExit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      toast.error('Введите номер телефона');
      return;
    }
    toast.success('Подборка отправляется', { description: '3 авто под ваш запрос — в Telegram через 17 минут' });
    setShowExitIntent(false);
    setPhone('');
  };

  return (
    <>
      <a
        href="https://t.me/aurum_motors"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-40 flex items-center gap-2 glass-dark gold-border-gradient pl-4 pr-5 py-3 rounded-full hover:scale-105 transition-transform group"
      >
        <div className="relative">
          <Icon name="Send" size={20} className="text-gold" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
        </div>
        <div className="hidden sm:block">
          <div className="text-xs text-foreground leading-tight">Менеджер онлайн</div>
          <div className="text-[10px] text-gold leading-tight">ответим за 7 минут</div>
        </div>
      </a>

      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-30 glass-dark border-t border-gold/20 py-3 px-6 animate-in slide-in-from-bottom">
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <div className="text-sm text-foreground">Понравился автомобиль?</div>
              <div className="text-xs text-gold">Забронируйте просмотр сейчас</div>
            </div>
            <div className="flex-1 md:flex-none">
              <Button
                onClick={onBookingClick}
                className="gold-gradient text-black hover:opacity-90 w-full md:w-auto tracking-wide"
              >
                Забронировать
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showExitIntent} onOpenChange={setShowExitIntent}>
        <DialogContent className="bg-card border-gold/30 max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Sparkles" size={18} className="text-gold" />
              <span className="text-xs tracking-[0.25em] text-gold uppercase">Подождите</span>
            </div>
            <DialogTitle className="font-serif text-2xl text-foreground leading-tight">
              Не уходите без подборки
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Оставьте номер — пришлём в Telegram <span className="text-gold">3 авто под ваш запрос</span>.
            Без звонков менеджеров и спама.
          </p>
          <form onSubmit={submitExit} className="space-y-3 mt-2">
            <Input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-secondary border-border h-12"
            />
            <Button type="submit" className="w-full gold-gradient text-black hover:opacity-90 h-12 tracking-wide">
              <Icon name="Send" size={16} className="mr-2" />
              Получить подборку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingElements;

import { useState } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Catalog, { type Car } from '@/components/landing/Catalog';
import Calculator from '@/components/landing/Calculator';
import Advantages from '@/components/landing/Advantages';
import Reviews from '@/components/landing/Reviews';
import Process from '@/components/landing/Process';
import Booking from '@/components/landing/Booking';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/landing/Footer';
import QuizDialog from '@/components/landing/QuizDialog';
import FloatingElements from '@/components/landing/FloatingElements';

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [preselectedCar, setPreselectedCar] = useState<Car | null>(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookCar = (car: Car) => {
    setPreselectedCar(car);
    setTimeout(scrollToBooking, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBookingClick={scrollToBooking} onQuizClick={() => setQuizOpen(true)} />
      <Hero onCatalogClick={scrollToCatalog} onQuizClick={() => setQuizOpen(true)} />
      <Catalog onBookCar={handleBookCar} />
      <Calculator />
      <Advantages />
      <Reviews onBookingClick={scrollToBooking} onQuizClick={() => setQuizOpen(true)} />
      <Process onQuizClick={() => setQuizOpen(true)} />
      <Booking preselectedCar={preselectedCar} />
      <FAQ />
      <FinalCTA onBookingClick={scrollToBooking} onQuizClick={() => setQuizOpen(true)} />
      <Contacts />
      <Footer />

      <QuizDialog open={quizOpen} onOpenChange={setQuizOpen} />
      <FloatingElements onBookingClick={scrollToBooking} />
    </div>
  );
};

export default Index;

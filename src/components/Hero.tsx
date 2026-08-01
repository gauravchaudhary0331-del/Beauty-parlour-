import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-soft via-white to-blush/60">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] rounded-full bg-blush/80 blur-[80px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary mb-6 leading-[1.1] pb-2 drop-shadow-sm">
              Looks Herbal Beauty Parlour
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-dark mt-3">& Makeup Studio</span>
            </h1>
            
            <p className="text-lg text-muted font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Where beauty meets care. Experience premium herbal treatments and expert makeup artistry tailored for your natural glow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto bg-white text-primary border-2 border-border-pink px-8 py-4 rounded-full text-base font-bold hover:bg-soft hover:border-primary/30 transition-all text-center shadow-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg mt-12 lg:mt-0">
            {/* Main Image in an elegant rounded container */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl z-10 bg-soft">
              <img
                id="hero-image"
                src="/images/parlour-hero.jpg"
                alt="Looks Herbal Beauty Parlour - Premium beauty treatments"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay to soften */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>

            {/* Decorative blobs behind the image */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blush rounded-full -z-0 blur-xl opacity-90"></div>
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary/30 rounded-full -z-0 blur-2xl opacity-80"></div>
            
            {/* Floating badge */}
            <div className="absolute top-24 -left-8 lg:-left-16 bg-white p-4 rounded-2xl shadow-xl border border-border-pink z-20 hidden md:flex items-center space-x-4">
              <div className="w-12 h-12 bg-soft rounded-full flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-dark">5.0</p>
                <p className="text-xs text-muted font-medium uppercase tracking-wide">Top Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

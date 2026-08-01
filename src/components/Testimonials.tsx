import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      quote: 'The bridal makeup was absolutely stunning. It felt so light and natural, yet looked flawless in every photograph. Thank you for making my day so special.',
    },
    {
      name: 'Anita Desai',
      quote: 'I love their herbal facials! The ambience is so relaxing, and my skin has never felt better. Highly recommend their personalized care.',
    },
    {
      name: 'Neha Kapoor',
      quote: 'Professional, warm, and extremely talented. They really listen to what you want and deliver beautifully. The best salon experience I\'ve had.',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-dark mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-border-pink shadow-sm"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted italic mb-6 leading-relaxed">"{t.quote}"</p>
              <p className="font-heading text-xl font-medium text-dark">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

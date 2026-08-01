import React from 'react';
import { Sparkles, Scissors, Droplets, Flower2, HandMetal, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: 'Bridal Makeup',
      description: 'Flawless, long-lasting radiance for your most special day.',
      icon: Sparkles,
    },
    {
      name: 'Party Makeup',
      description: 'Elegant looks tailored for evenings, events, and celebrations.',
      icon: Heart,
    },
    {
      name: 'Hair Styling',
      description: 'Modern cuts, elegant updos, and deeply nourishing treatments.',
      icon: Scissors,
    },
    {
      name: 'Facials & Herbal Treatments',
      description: 'Rejuvenating natural therapies to restore your skin\'s natural glow.',
      icon: Flower2,
    },
    {
      name: 'Waxing & Threading',
      description: 'Gentle, precise hair removal for smooth, flawless skin.',
      icon: HandMetal,
    },
    {
      name: 'Skin & Hair Care',
      description: 'Customized regimens using premium herbal formulations.',
      icon: Droplets,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blush mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white border border-border-pink rounded-2xl hover:shadow-[0_8px_30px_rgb(247,217,223,0.4)] transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-soft rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-heading text-2xl font-medium text-dark mb-3">{service.name}</h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

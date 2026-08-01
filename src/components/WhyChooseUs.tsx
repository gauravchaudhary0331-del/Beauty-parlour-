import React from 'react';
import { Leaf, Award, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Herbal & Skin-Friendly Products',
      description: 'We prioritize your well-being with gentle, natural, and premium botanical formulations.',
      icon: Leaf,
    },
    {
      title: 'Certified Makeup Artists',
      description: 'Expert professionals dedicated to enhancing your natural beauty with precision and care.',
      icon: Award,
    },
    {
      title: 'Warm & Relaxing Ambience',
      description: 'Step into a serene environment designed to help you unwind, refresh, and feel pampered.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-soft rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-heading text-2xl font-medium text-dark mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-dark mb-6">Visit Us</h2>
            <p className="text-muted mb-12 text-lg">
              We'd love to help you look and feel your absolute best. Reach out to book your appointment or inquire about our services.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-soft rounded-full flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-medium text-dark mb-1">Address</h4>
                  <p className="text-muted">[ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-soft rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Phone className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-medium text-dark mb-1">Phone</h4>
                  <p className="text-muted">[PHONE NUMBER]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-soft rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Mail className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-medium text-dark mb-1">Email</h4>
                  <p className="text-muted">[EMAIL]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-soft rounded-full flex items-center justify-center shrink-0 mr-6">
                  <Clock className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-medium text-dark mb-1">Business Hours</h4>
                  <p className="text-muted whitespace-pre-line">[BUSINESS HOURS]</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all shadow-sm">
                Book Now
              </button>
              <a 
                href={`https://instagram.com/[INSTAGRAM HANDLE]`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border-pink flex items-center justify-center text-dark hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Image/Map Area */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-soft">
             <img
                id="contact-image"
                src="/images/parlour-interior.jpg"
                alt="Looks Herbal Beauty Parlour Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
          </div>

        </div>
      </div>
    </section>
  );
}

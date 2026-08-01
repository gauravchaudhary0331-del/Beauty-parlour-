import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-soft pt-16 pb-8 border-t border-border-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary stroke-[1.5] shrink-0" />
              <span className="font-heading text-xl font-semibold text-dark tracking-wide leading-tight">
                Looks Herbal Beauty Parlour
                <span className="block text-primary text-base">& Makeup Studio</span>
              </span>
            </div>
            <p className="text-muted max-w-sm mb-6">
              Enhancing your natural beauty with premium care and expert artistry.
            </p>
            <a 
                href={`https://instagram.com/[INSTAGRAM HANDLE]`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-dark hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5 stroke-[1.5]" />
                <span className="font-medium">Follow us on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-medium text-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-muted hover:text-primary transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-muted hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-muted hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-medium text-dark mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-muted">
              <li>[ADDRESS]</li>
              <li>[PHONE NUMBER]</li>
              <li>[EMAIL]</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border-pink text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Looks Herbal Beauty Parlour & Makeup Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

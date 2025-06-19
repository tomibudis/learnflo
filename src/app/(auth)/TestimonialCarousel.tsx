'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from './constants';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="absolute inset-0 bg-gray-900 rounded-l-4xl overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="400" height="600" fill="url(%23grad1)"/><circle cx="200" cy="200" r="100" fill="rgba(255,255,255,0.1)"/><circle cx="300" cy="400" r="80" fill="rgba(255,255,255,0.05)"/></svg>\')',
        }}
      />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-12">
        <div className="text-white">
          <blockquote className="text-2xl font-medium leading-8 mb-6">
            &quot;{testimonials[currentSlide].quote}&quot;
          </blockquote>
          <div className="mb-8">
            <div className="text-lg font-semibold">{testimonials[currentSlide].author}</div>
            <div className="text-gray-300 text-sm">{testimonials[currentSlide].title}</div>
            <div className="text-gray-400 text-sm">{testimonials[currentSlide].company}</div>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="cursor-pointer w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex space-x-2 mt-4">
          {testimonials.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

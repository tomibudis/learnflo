import TestimonialCarousel from '@/app/(non-auth)/TestimonialCarousel';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Learnflo</span>
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        {/* Optionally, you can add a carousel or illustration here */}
        <TestimonialCarousel />
      </div>
    </div>
  );
}

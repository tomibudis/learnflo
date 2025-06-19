'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

// Mock shadcn/ui components
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}> = ({ children, variant = 'default', size = 'md', className = '', onClick, type = 'button' }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700',
    ghost: 'hover:bg-gray-100 text-gray-700',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2.5 text-sm',
    lg: 'h-11 px-8',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Input: React.FC<{
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ type = 'text', placeholder, value, onChange, className = '' }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

const Checkbox: React.FC<{
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}> = ({ id, checked = false, onChange, className = '' }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onChange?.(e.target.checked)}
    className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${className}`}
  />
);

const LoginInterface: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "We've been using Untitled to kick start every new project and can't imagine working without it.",
      author: 'Amélie Laurent',
      title: 'Lead Designer, Layers',
      company: 'Web Development Agency',
      image: '/api/placeholder/400/600', // This would be replaced with actual image
    },
    {
      quote:
        'The design system has completely transformed how our team approaches product development.',
      author: 'Sarah Chen',
      title: 'Design Director, Pixel Perfect',
      company: 'Digital Design Studio',
      image: '/api/placeholder/400/600',
    },
    {
      quote: 'Untitled UI saved us months of development time and helped us maintain consistency.',
      author: 'Marcus Johnson',
      title: 'Frontend Lead, TechFlow',
      company: 'Software Company',
      image: '/api/placeholder/400/600',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = () => {
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Untitled UI</span>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Welcome back! Please enter your details.</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" checked={rememberMe} onChange={setRememberMe} />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember for 30 days
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Forgot password
              </button>
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Sign in
            </Button>

            <Button variant="outline" className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <button className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <p className="text-xs text-gray-500">© Untitled UI 2077</p>
        </div>
      </div>

      {/* Right Panel - Testimonial Carousel */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gray-900 rounded-l-3xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="400" height="600" fill="url(%23grad1)"/><circle cx="200" cy="200" r="100" fill="rgba(255,255,255,0.1)"/><circle cx="300" cy="400" r="80" fill="rgba(255,255,255,0.05)"/></svg>')`,
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
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Simplified */}
      <div className="lg:hidden fixed top-0 right-0 left-0 z-10">
        <div className="bg-indigo-600 text-white p-4 text-center">
          <p className="text-sm">&quot;{testimonials[currentSlide].quote}&quot;</p>
          <p className="text-xs mt-2 opacity-80">— {testimonials[currentSlide].author}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginInterface;

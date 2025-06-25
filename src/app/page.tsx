'use client';
import React, { useState } from 'react';
import {
  Video,
  HelpCircle,
  Brain,
  Users,
  TrendingUp,
  ShoppingCart,
  CheckCircle,
  Sparkles,
  Star,
} from 'lucide-react';
import { HeroSection } from '@/components/ui/hero-section-dark';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { BackgroundCircles } from '@/components/ui/background-circle';
import { Features } from '@/components/blocks/features-11';

const HomePage = () => {
  const navItems = [
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'Pricing',
      link: '#pricing',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <div className="z-50">
                <ThemeToggle />
              </div>
              <NavbarButton variant="primary">Login</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      <div className="min-h-screen">
        {/* Navigation */}

        {/* Hero Section */}
        <HeroSection
          title="#Indonesia's Fastest-Growing EdTech Platform 🇮🇩"
          subtitle={{
            regular: 'Transform your knowledge into ',
            gradient: 'beautiful digital experiences',
          }}
          description="create yours own - your personal course platform. Build you own path, guide your own students and grow your own brand."
          ctaText="Start Creating Now"
          ctaHref="/signup"
          bottomImage={{
            light: '/dashboard-page-light.png',
            dark: '/dashboard-page-dark.png',
          }}
        />

        {/* About Section */}
        <BackgroundCircles variant="lime" title="Empower Individual Educators" />

        {/* <div className="container flex justify-center items-center mx-auto py-48"> */}
        <Features />
        {/* </div> */}
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need. Nothing You Don&apos;t.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Video,
                  title: 'Easy Video Uploads',
                  description: 'Drag-and-drop lessons',
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  icon: HelpCircle,
                  title: 'Quizzes & Assessments',
                  description: 'Custom knowledge tests',
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  icon: Brain,
                  title: 'Auto Summarize Lessons',
                  description: 'AI-generated key points',
                  color: 'from-teal-500 to-teal-600',
                },
                {
                  icon: Users,
                  title: 'Flexible Student Paths',
                  description: 'Personalized learning journeys',
                  color: 'from-green-500 to-green-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Progress Tracking',
                  description: 'Visual dashboards',
                  color: 'from-orange-500 to-orange-600',
                },
                {
                  icon: ShoppingCart,
                  title: 'Monetization Ready',
                  description: 'Sell your course easily',
                  color: 'from-pink-500 to-pink-600',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Independent Educators Like You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                'Creators launching their first course',
                'Coaches mentoring small groups',
                'Teachers modernizing their approach',
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Sign up and create a profile',
                  description: 'Get started in minutes with our simple onboarding',
                },
                {
                  step: '2',
                  title: 'Upload lessons and structure your modules',
                  description: 'Organize your content exactly how you envision it',
                },
                {
                  step: '3',
                  title: 'Add quizzes and summaries',
                  description: 'Create engaging assessments and AI-powered summaries',
                },
                {
                  step: '4',
                  title: 'Share with your students and start teaching',
                  description: 'Launch your course and begin making an impact',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-12 border border-blue-100">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 italic">
                  &quot;I wanted something lightweight, flexible, and mine. This gave me freedom I
                  never had on other platforms.&quot;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Alex</p>
                    <p className="text-gray-600">Mindfulness Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Students. Your Curriculum. Your Platform.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of independent educators who&apos;ve chosen freedom over limitations.
            </p>
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
              <Sparkles className="w-5 h-5" />
              <span>Start Creating Now</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold">Your Brand Name</span>
              </div>
              <p className="text-gray-400">Create Yours Own</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;

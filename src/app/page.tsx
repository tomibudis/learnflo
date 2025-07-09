'use client';
import React, { useState } from 'react';
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
import { LearnfloFeaturesSteps } from '@/components/features';
import { PricingCard } from '@/components/ui/pricing';
import { AnimatedTestimonials } from '@/components/blocks/animated-testimonials';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Footer7 } from '@/components/ui/footer-7';

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
        {/* <section className="py-20 bg-gray-50">
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
        </section> */}
        <LearnfloFeaturesSteps />

        <section className="py-16 md:py-32" id="pricing">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
              <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                Plans made for every inbox
              </h2>
              <p className="text-muted-foreground lg:text-lg mb-6 md:mb-8 lg:mb-12">
                Start managing all your email accounts in one place. Upgrade anytime as your needs
                grow.
              </p>
            </div>

            <div className="rounded-xl flex flex-col justify-between border p-1">
              <div className="flex flex-col gap-4 md:flex-row">
                <PricingCard
                  title="Free"
                  price="$0 / mo"
                  description="Ideal to test the unified inbox experience"
                  buttonVariant="outline"
                  features={[
                    'Connect up to 2 email accounts',
                    'Unified inbox interface',
                    'Read & search emails',
                    'Basic spam filtering',
                    'Email support',
                  ]}
                />

                <PricingCard
                  title="Pro"
                  price="$19 / mo"
                  description="For professionals managing multiple accounts"
                  buttonVariant="default"
                  highlight
                  features={[
                    'Connect unlimited email accounts',
                    'Send emails from any connected address',
                    'Smart labels & filters',
                    'Real-time sync with Gmail, Outlook, iCloud',
                    'Advanced search & filters',
                    'Mobile app access',
                    'Priority email support',
                    'Custom signatures per account',
                    'Attachment previews',
                    'Daily backup of inboxes',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <AnimatedTestimonials
          testimonials={[
            {
              id: 1,
              name: 'Alex Johnson',
              role: 'Full Stack Developer',
              company: 'TechFlow',
              content:
                'This starter template saved me weeks of setup time. The Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!',
              rating: 5,
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
            {
              id: 2,
              name: 'Sarah Miller',
              role: 'Frontend Engineer',
              company: 'DesignHub',
              content:
                "I've used many starter templates, but this one stands out for its clean architecture and attention to detail. The TypeScript support is excellent, and the documentation is comprehensive.",
              rating: 5,
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              id: 3,
              name: 'Michael Chen',
              role: 'Product Manager',
              company: 'InnovateLabs',
              content:
                'Our team was able to launch our MVP in record time thanks to this template. The authentication flow and user management features worked right out of the box. Highly recommended!',
              rating: 5,
              avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
            },
          ]}
          trustedCompanies={['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Netflix']}
        />

        <div className="h-[30rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-3xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-medium">
              Ready to build your course?
            </h1>
            <p></p>
            <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to Learnflo, Join thousands of independent educators who&apos;ve chosen
              freedom over limitations.
            </p>
            <div className="mt-10 items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bef264_0%,#84cc16_50%,#bef264_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <a className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-lime-200/20 via-lime-400/30 to-transparent dark:from-lime-300/5 dark:via-lime-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-lime-300/30 hover:via-lime-500/40 hover:to-transparent dark:hover:from-lime-400/10 dark:hover:via-lime-500/30 transition-all sm:w-auto py-4 px-10">
                    Start Creating Now
                  </a>
                </div>
              </span>
            </div>
          </div>
          <BackgroundBeams />
        </div>

        {/* Footer */}
        <Footer7 />
      </div>
    </>
  );
};

export default HomePage;

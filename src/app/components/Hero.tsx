import { Phone, Award, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { heroData } from '../data/heroData';
import { siteConfig } from '../data/siteData';
import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-10 py-16 sm:py-24 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content */}
          <div className="order-1 text-center lg:text-left">
            <div className="absolute inset-0 w-full h-full lg:hidden">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 lg:hidden" />
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-4xl sm:text-5xl lg:text-6xl text-neutral-100 lg:text-neutral-900 mb-6 leading-tight tracking-tighter"
            >
              {heroData.headline} <span className="text-blue-400 lg:text-blue-600">{heroData.headlineHighlight}</span>{heroData.headlineEnd}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 text-lg text-neutral-300 lg:text-neutral-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 whitespace-pre-line">
              {heroData.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-semibold text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.cta.primary}
              </a>
              <a
                href="#classes"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
              >
                수업 과정 보기
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-10 flex flex-wrap gap-8 justify-center lg:justify-start">
              {heroData.stats.map((stat) => {
                const icons = [Award, Users, TrendingUp];
                const index = heroData.stats.indexOf(stat);
                const Icon = icons[index];
                return (
                  <div key={stat.label} className="flex items-center gap-3 text-left">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-100 lg:text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-400 lg:text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="relative hidden lg:block h-full">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
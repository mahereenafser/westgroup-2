'use client';

import React from 'react';
import CardSwapNew, { CardNew } from '@/components/ui/card-swap-new';
import { StackedCardsInteraction } from '@/components/ui/stacked-cards-interaction';

function CardSwapDemo() {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="w-full space-y-8 lg:space-y-24">
      {/* First Row: Card Stack + Image */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* First Card Stack - Using StackedCardsInteraction */}
        <div
          className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-1"
          style={{ minHeight: '450px' }}
        >
          <StackedCardsInteraction
            cards={[
              {
                title: "Wealth Management",
                description: "Sophisticated investment portfolio management with tax-efficient strategies designed to preserve and grow your wealth across market cycles.",
                features: [
                  "Portfolio diversification and rebalancing",
                  "Tax-loss harvesting strategies",
                  "Risk management and asset protection"
                ],
                link: "/services#wealth-management",
                icon: (
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-400 rounded-xl shadow-lg">
                    <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                )
              },
              {
                title: "Investment Management",
                description: "Professional investment management with diversified portfolios, risk assessment, and performance monitoring.",
                features: [
                  "Portfolio construction and rebalancing",
                  "Risk management strategies",
                  "Performance analysis and reporting"
                ],
                link: "/investment-management",
                icon: (
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                )
              },
              {
                title: "Estate Planning Strategies",
                description: "Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.",
                features: [
                  "Trust structure optimization",
                  "Estate tax minimization",
                  "Charitable giving strategies"
                ],
                link: "/services#estate-planning",
                icon: (
                  <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                )
              },
            ]}
          />
        </div>

        {/* Image 1 */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2">
          <img
            src="/images/image-1.webp"
            alt="Financial Planning"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[700px]"
          />
        </div>
      </div>

      {/* Second Row: Card Stack + Image 2 */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* Image 2 - Desktop first (order-1), Mobile last (order-2) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
          <img
            src="/images/image-2.webp"
            alt="Financial Advisory"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[700px]"
          />
        </div>

        {/* Second Card Stack - Desktop second (order-2), Mobile first (order-1) */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2" style={{ minHeight: '600px' }}>
          <CardSwapNew
            width={400}
            height={450}
            cardDistance={50}
            verticalDistance={60}
            delay={4000}
            pauseOnHover={true}
            easing="power"
          >
            {/* Retirement Planning */}
            <CardNew onClick={() => handleCardClick('/retirement-planning')}>
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-gradient-to-r from-accent-600 to-accent-500 rounded-xl mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Retirement Income Planning</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Strategic retirement planning to ensure you maintain your lifestyle while minimizing tax burden throughout your retirement years.
              </p>
              <ul className="space-y-1.5 mb-3 text-xs text-gray-400">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  RRSP/RRIF optimization strategies
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Pension maximization planning
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Healthcare and long-term care planning
                </li>
              </ul>
              <a href="/retirement-planning" className="text-accent-400 hover:text-accent-300 text-xs font-medium inline-flex items-center group">
                Learn More
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </CardNew>

            {/* Mortgage Advisory */}
            <CardNew onClick={() => handleCardClick('/mortgage-services-vancouver')}>
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-gradient-to-r from-green-600 to-green-500 rounded-xl mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Mortgage Advisory</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Strategic mortgage planning and refinancing advice to optimize real estate investments and cash flow.
              </p>
              <ul className="space-y-1.5 mb-3 text-xs text-gray-400">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Mortgage structure optimization
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Refinancing strategies
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Investment property planning
                </li>
              </ul>
              <a href="/mortgage-services-vancouver" className="text-green-400 hover:text-green-300 text-xs font-medium inline-flex items-center group">
                Learn More
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </CardNew>

            {/* Tax Strategies */}
            <CardNew onClick={() => handleCardClick('/tax-planning-vancouver')}>
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Tax-Efficient Strategies</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Advanced tax planning and optimization strategies to minimize your tax burden while maximizing after-tax investment returns.
              </p>
              <ul className="space-y-1.5 mb-3 text-xs text-gray-400">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Corporate tax structure optimization
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Capital gains tax minimization
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Income splitting strategies
                </li>
              </ul>
              <a href="/tax-planning-vancouver" className="text-primary-400 hover:text-primary-300 text-xs font-medium inline-flex items-center group">
                Learn More
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </CardNew>

            {/* Business Succession */}
            <CardNew onClick={() => handleCardClick('/business-services-vancouver')}>
              <div className="flex items-center mb-3">
                <div className="p-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl mr-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Business Succession Planning</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                Strategic planning for business owners to ensure smooth transitions, maximize value, and minimize tax implications during business succession.
              </p>
              <ul className="space-y-1.5 mb-3 text-xs text-gray-400">
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Business valuation and exit planning
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Key person insurance strategies
                </li>
                <li className="flex items-start">
                  <span className="w-1 h-1 bg-accent-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  Family succession coordination
                </li>
              </ul>
              <a href="/business-services-vancouver" className="text-accent-400 hover:text-accent-300 text-xs font-medium inline-flex items-center group">
                Learn More
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </CardNew>
          </CardSwapNew>
        </div>
      </div>
    </div>
  );
}

export default CardSwapDemo;

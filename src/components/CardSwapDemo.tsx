'use client';

import React from 'react';
import CardSwap, { Card } from '@/components/ui/card-swap';
import { StackedCardsInteraction } from '@/components/ui/stacked-cards-interaction';

function CardSwapDemo() {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="w-full space-y-16 lg:space-y-24">
      {/* First Row: Card Stack + Image */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* First Card Stack - Using StackedCardsInteraction */}
        <div
          className="relative w-full lg:w-1/2 flex items-center justify-center"
          style={{ height: '500px' }}
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
                link: "/services#wealth-management"
              },
              {
                title: "Investment Management",
                description: "Professional investment management with diversified portfolios, risk assessment, and performance monitoring.",
                features: [
                  "Portfolio construction and rebalancing",
                  "Risk management strategies",
                  "Performance analysis and reporting"
                ],
                link: "/investment-management"
              },
              {
                title: "Estate Planning Strategies",
                description: "Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.",
                features: [
                  "Trust structure optimization",
                  "Estate tax minimization",
                  "Charitable giving strategies"
                ],
                link: "/services#estate-planning"
              },
            ]}
          />
        </div>

        {/* Image 1 */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/images/image-1.webp"
            alt="Financial Planning"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[600px]"
          />
        </div>
      </div>

      {/* Second Row: Image + Card Stack */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* Image 2 */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
          <img
            src="/images/image-2.webp"
            alt="Financial Advisory"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover max-h-[600px]"
          />
        </div>

        {/* Second Card Stack */}
        <div
          className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2"
          style={{ height: '500px' }}
        >
          <CardSwap
            width={750}
            height={280}
            cardDistance={50}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            easing="power"
            visibleCards={4}
          >
            {/* Retirement Planning */}
            <Card
              className="cursor-pointer hover:border-accent-400/60"
              onClick={() => handleCardClick('/services#retirement-planning')}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-accent-600 to-accent-500 rounded-xl mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Retirement Planning</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Strategic retirement planning to maintain your lifestyle while minimizing tax burden throughout retirement.
              </p>
            </Card>

            {/* Tax Strategies */}
            <Card
              className="cursor-pointer hover:border-primary-400/60"
              onClick={() => handleCardClick('/services#tax-planning')}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Tax Strategies</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Advanced tax planning and optimization to minimize tax burden while maximizing after-tax returns.
              </p>
            </Card>

            {/* Business Succession */}
            <Card
              className="cursor-pointer hover:border-primary-400/60"
              onClick={() => handleCardClick('/services#business-succession')}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Business Succession</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Strategic planning for smooth business transitions, maximizing value and minimizing tax implications.
              </p>
            </Card>

            {/* Mortgage Advisory */}
            <Card
              className="cursor-pointer hover:border-green-400/60"
              onClick={() => handleCardClick('/mortgage-services-vancouver')}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-green-600 to-green-500 rounded-xl mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Mortgage Advisory</h3>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Strategic mortgage planning and refinancing advice to optimize real estate investments and cash flow.
              </p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
}

export default CardSwapDemo;

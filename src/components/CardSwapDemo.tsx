'use client';

import React from 'react';
import CardSwap, { Card } from '@/components/ui/card-swap';

function CardSwapDemo() {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-4">
      <div
        className="relative w-full max-w-6xl mx-auto"
        style={{ height: '500px' }}
      >
        <CardSwap
          width={650}
          height={280}
          cardDistance={50}
          verticalDistance={50}
          delay={4000}
          pauseOnHover={true}
          easing="power"
          visibleCards={4}
        >
          {/* Wealth Management */}
          <Card
            className="cursor-pointer hover:border-primary-400/60"
            onClick={() => handleCardClick('/services#wealth-management')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl mr-4 shadow-lg">
                <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Wealth Management</h3>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Sophisticated investment portfolio management with tax-efficient strategies to preserve and grow your wealth.
            </p>
          </Card>

          {/* Investment Management */}
          <Card
            className="cursor-pointer hover:border-accent-400/60"
            onClick={() => handleCardClick('/investment-management')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Investment Management</h3>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Professional investment management with diversified portfolios, risk assessment, and performance monitoring.
            </p>
          </Card>

          {/* Insurance Planning */}
          <Card
            className="cursor-pointer hover:border-primary-400/60"
            onClick={() => handleCardClick('/insurance-planning-vancouver')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Insurance Planning</h3>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Comprehensive insurance strategies to protect your family, assets, and business interests.
            </p>
          </Card>

          {/* Estate Planning */}
          <Card
            className="cursor-pointer hover:border-accent-400/60"
            onClick={() => handleCardClick('/services#estate-planning')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-accent-600 to-primary-500 rounded-xl mr-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Estate Planning</h3>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.
            </p>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}

export default CardSwapDemo;

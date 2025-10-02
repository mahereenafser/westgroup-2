'use client';

import React from 'react';
import CardSwap, { Card } from '@/components/ui/card-swap';

function CardSwapDemo() {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-4 mt-8">
      <div
        className="relative w-full max-w-6xl mx-auto"
        style={{ height: '600px' }}
      >
        <CardSwap
          width={450}
          height={350}
          cardDistance={50}
          verticalDistance={60}
          delay={4000}
          pauseOnHover={true}
          easing="power"
          visibleCards={4}
        >
          {/* Wealth Management */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30 cursor-pointer hover:border-primary-400/50 transition-all"
            onClick={() => handleCardClick('/services#wealth-management')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg mr-4">
                <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Wealth Management</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sophisticated investment portfolio management with tax-efficient strategies designed to preserve and grow your wealth across market cycles.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Portfolio diversification and rebalancing
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Tax-loss harvesting strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Risk management and asset protection
              </li>
            </ul>
          </Card>

          {/* Retirement Planning */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-accent-500/30 cursor-pointer hover:border-accent-400/50 transition-all"
            onClick={() => handleCardClick('/services#retirement-planning')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Retirement Planning</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strategic retirement planning to ensure you maintain your lifestyle while minimizing tax burden throughout your retirement years.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                RRSP/RRIF optimization strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Pension maximization planning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Healthcare and long-term care planning
              </li>
            </ul>
          </Card>

          {/* Tax-Efficient Strategies */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30 cursor-pointer hover:border-primary-400/50 transition-all"
            onClick={() => handleCardClick('/services#tax-planning')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Tax-Efficient Strategies</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Advanced tax planning and optimization strategies to minimize your tax burden while maximizing after-tax investment returns.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Corporate tax structure optimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Capital gains tax minimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Income splitting strategies
              </li>
            </ul>
          </Card>

          {/* Risk Management */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-purple-500/30 cursor-pointer hover:border-purple-400/50 transition-all"
            onClick={() => handleCardClick('/services')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Risk Management</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Comprehensive risk assessment and mitigation strategies to protect your wealth and financial goals from market volatility.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Portfolio risk analysis
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Asset protection strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Diversification planning
              </li>
            </ul>
          </Card>

          {/* Estate Planning */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-accent-500/30 cursor-pointer hover:border-accent-400/50 transition-all"
            onClick={() => handleCardClick('/services#estate-planning')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-accent-600 to-primary-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Estate Planning</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Trust structure optimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Estate tax minimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Charitable giving strategies
              </li>
            </ul>
          </Card>

          {/* Business Succession Planning */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30 cursor-pointer hover:border-primary-400/50 transition-all"
            onClick={() => handleCardClick('/services#business-succession')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Business Succession</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strategic planning for business owners to ensure smooth transitions, maximize value, and minimize tax implications during business succession.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Business valuation and exit planning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Key person insurance strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Family succession coordination
              </li>
            </ul>
          </Card>

          {/* Investment Management */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-accent-500/30 cursor-pointer hover:border-accent-400/50 transition-all"
            onClick={() => handleCardClick('/investment-management')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Investment Management</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional investment management with diversified portfolios, risk assessment, and performance monitoring.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Portfolio construction and rebalancing
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Risk management strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Performance analysis and reporting
              </li>
            </ul>
          </Card>

          {/* Insurance Planning */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30 cursor-pointer hover:border-primary-400/50 transition-all"
            onClick={() => handleCardClick('/insurance-planning-vancouver')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Insurance Planning</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Comprehensive insurance strategies to protect your family, assets, and business interests.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Life and disability insurance
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Business insurance planning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Long-term care planning
              </li>
            </ul>
          </Card>

          {/* Debt Management */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-red-500/30 cursor-pointer hover:border-red-400/50 transition-all"
            onClick={() => handleCardClick('/services')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Debt Management</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strategic debt consolidation and repayment planning to optimize cash flow and reduce interest costs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Debt consolidation strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Payment optimization plans
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Credit improvement guidance
              </li>
            </ul>
          </Card>

          {/* Education Funding */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-blue-500/30 cursor-pointer hover:border-blue-400/50 transition-all"
            onClick={() => handleCardClick('/services')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Education Funding</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strategic planning for children's education expenses with tax-efficient savings and investment strategies.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                RESP optimization strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Education cost planning
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Grant maximization
              </li>
            </ul>
          </Card>

          {/* Mortgage Advisory */}
          <Card
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-green-500/30 cursor-pointer hover:border-green-400/50 transition-all"
            onClick={() => handleCardClick('/mortgage-services-vancouver')}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-600 to-green-500 rounded-lg mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Mortgage Advisory</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Strategic mortgage planning and refinancing advice to optimize real estate investments and cash flow.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Mortgage structure optimization
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Refinancing strategies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mr-2"></span>
                Investment property planning
              </li>
            </ul>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
}

export default CardSwapDemo;

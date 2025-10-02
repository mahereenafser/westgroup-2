'use client';

import React from 'react';
import CardSwap, { Card } from '@/components/ui/card-swap';

function CardSwapDemo() {
  return (
    <div className="flex w-full h-full items-center justify-center p-4">
      <div
        className="relative w-full max-w-6xl"
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
        >
          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30">
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

          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-accent-500/30">
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

          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-primary-500/30">
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

          <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-purple-500/30">
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
        </CardSwap>
      </div>
    </div>
  );
}

export default CardSwapDemo;

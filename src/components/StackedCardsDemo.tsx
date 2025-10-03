'use client';

import React from 'react';
import { StackedCardsInteraction } from '@/components/ui/stacked-cards-interaction';

function StackedCardsDemo() {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <StackedCardsInteraction
        cards={[
          {
            image: "/images/insurance-planning.jpg",
            title: "Insurance Planning",
            description: "Comprehensive insurance strategies to protect your family, assets, and business interests.",
          },
          {
            image: "/images/estate-planning.jpg",
            title: "Estate Planning",
            description: "Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.",
          },
          {
            image: "/images/wealth-management.jpg",
            title: "Wealth Management",
            description: "Sophisticated investment portfolio management with tax-efficient strategies to preserve and grow your wealth.",
          },
        ]}
      />
    </div>
  );
}

export default StackedCardsDemo;

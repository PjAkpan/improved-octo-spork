/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

// Exchange rates for conversion (static values for simplicity)
const exchangeRates: Record<'USD' | 'EUR' | 'NGN', number> = {
  USD: 1,
  EUR: 0.91, // Example exchange rate Vrublesky78*
  NGN: 1560, // Example exchange rate
};

const Menu = () => {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'NGN'>('USD');
  const [activeSection, setActiveSection] = useState(0);

  const convertPrice = (price: string) => {
    const priceValue = parseFloat(price.replace(/[^\d.-]/g, ''));
    const convertedPrice = priceValue * exchangeRates[currency];
    return `${currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₦'}${convertedPrice.toFixed(2)}`;
  };

  const menuSections = [
    {
      title: 'Breakfast',
      items: [
        { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: '$5.99', image: '/images/pancakes.jpg' },
        { name: 'Omelette', description: '3-egg omelette with cheese', price: '$6.99', image: '/images/omelette.jpg' },
      ],
    },
    {
      title: 'Lunch',
      items: [
        { name: 'Grilled Cheese Sandwich', description: 'Cheesy goodness', price: '$4.99', image: '/images/grilled_cheese.jpg' },
        { name: 'Caesar Salad', description: 'Fresh greens and croutons', price: '$7.99', image: '/images/caesar_salad.jpg' },
      ],
    },
    {
      title: 'Dinner',
      items: [
        { name: 'Steak', description: 'Cooked to perfection', price: '$19.99', image: '/images/steak.jpg' },
        { name: 'Spaghetti', description: 'Classic Italian pasta', price: '$12.99', image: '/images/spaghetti.jpg' },
      ],
    },
    {
      title: 'Drinks',
      items: [
        { name: 'Coffee', description: 'Freshly brewed coffee', price: '$2.99', image: '/images/coffee.jpg' },
        { name: 'Smoothie', description: 'Mixed berry smoothie', price: '$4.99', image: '/images/smoothie.jpg' },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-100 min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Currency Selector */}
        <div className="flex justify-center mb-6">
          <select
            className="p-2 border rounded-md"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR' | 'NGN')}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="NGN">NGN (₦)</option>
          </select>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {menuSections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`px-4 py-2 font-semibold rounded-md ${
                activeSection === index ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuSections[activeSection].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="mt-2 font-bold text-orange-500">{convertPrice(item.price)}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;

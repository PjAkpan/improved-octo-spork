/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import axios from 'axios';


// Exchange rates for conversion
const exchangeRates: Record<'USD' | 'EUR' | 'NGN', number> = {
  USD: 1,
  EUR: 0.91,
  NGN: 1560,
};

const Menu = () => {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'NGN'>('USD');
  const [activeSection, setActiveSection] = useState(0);
  const [menuSections, setMenuSections] = useState<
    { title: string; items: { name: string; description: string; price: number; image: string }[] }[]
  >([]);

  useEffect(() => {
    // Fetch menu sections from Supabase
    const fetchMenuSections = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        const fetchedMenu = response.data.reduce((sections: any[], item: any) => {
          const sectionIndex = sections.findIndex(
            (section: any) => section.title === item.section
          );
          if (sectionIndex !== -1) {
            sections[sectionIndex].items.push(item);
          } else {
            sections.push({
              title: item.section,
              items: [item],
            });
          }
          return sections;
        }, []);
        setMenuSections(fetchedMenu);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuSections();
  }, []);

  const convertPrice = (price: number) => {
    const convertedPrice = price * exchangeRates[currency];
    return `${currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₦'}${convertedPrice.toFixed(2)}`;
  };

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
        {menuSections.length > 0 && (
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
        )}
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;

/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track if we are in the client

  useEffect(() => {
    setIsClient(true); // Set the client-side flag after the component mounts
  }, []);

  // Scroll handler and animation only run on the client side
  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      setAnimate(true);
    }
  }, [isClient]);

  return (
    <main>
      {/* Hero Section */}
      <section
        className={`hero relative text-white text-center py-32 ${scrolled ? "bg-opacity-80" : ""}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
         src="/Interior-Design-iCrave-53-idx221001_icrave05-1024x683-2352364581.jpg"
         alt="Hero Background"
         width={500} 
         height={500} 
         style={{ objectFit: 'cover' }}
         priority
         />


          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <h1
            className={`text-4xl md:text-6xl font-extrabold leading-tight ${
              animate ? "animate__animated animate__fadeIn animate__delay-1s" : ""
            }`}
          >
            Welcome to TastyBud Kitchen
          </h1>
          <p className="mt-4 text-lg animate__animated animate__fadeIn animate__delay-2s">
            Where every meal is an experience. Come, taste the world with us.
          </p>
          <div className="mt-8">
            <a
              href="/menu"
              className="inline-block bg-yellow-500 text-black py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transform transition-all duration-300 ease-out"
            >
              Browse Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            At TastyBud Kitchen, we blend passion with food. From New York to
            Lagos, Berlin to Abuja, we offer a menu that brings the world to
            your plate.
          </p>
          <p className="text-lg text-gray-700">
            Our mission: Serving extraordinary meals that make every dining
            experience memorable.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Items */}
            <div className="menu-item bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src="/nigerian-food-16-1917972738.jpg"
                alt="Dish Name"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Dish Name</h3>
                <p className="text-gray-600 mt-2">
                  A short description of the dish goes here.
                </p>
              </div>
            </div>
            {/* Repeat for other dishes */}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Reservation Section */}
      <section className="reservation bg-yellow-500 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Book Your Table Now
          </h2>
          <p className="text-lg text-white mb-6">
            Don’t miss out on a memorable dining experience. Reserve a table
            at our restaurant.
          </p>
          <a
            href="#reservation-form"
            className="inline-block bg-black text-yellow-500 py-3 px-8 rounded-full hover:bg-gray-800 transform transition-all duration-300 ease-out"
          >
            Reserve Now
          </a>
        </div>
      </section>
    </main>
  );
}

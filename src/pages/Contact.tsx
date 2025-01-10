/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; 
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false); // Add state to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted on the client
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission logic here (e.g., send data to API)
  };

  // Only render the component if it's on the client side
  if (!isClient) {
    return null;
  }

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-white shadow-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="index.html">
            TastyBud Kitchen
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Story
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="menu.html">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="news.html">
                  Our Updates
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <header className="site-header site-contact-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Say Hi</h1>
                <strong className="text-white">We are happy to take your ORDER</strong>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </header>

        <section className="contact section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-4">Leave a message</h2>
              </div>

              <div className="col-lg-6 col-12">
                <form
                  className="custom-form contact-form row"
                  onSubmit={handleSubmit}
                  role="form"
                >
                  <div className="col-lg-6 col-6">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-6">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      pattern="[0-9]{10}"
                      className="form-control"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                    />
                  </div>

                  <div className="col-lg-5 col-12 ms-auto">
                    <button type="submit" className="form-control">
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 col-12 mx-auto mt-lg-5 mt-4">
                <h5>Weekdays</h5>
                <div className="d-flex mb-lg-3">
                  <p>Monday to Friday</p>
                  <p className="ms-5">10:00 AM - 08:00 PM</p>
                </div>

                <h5>Weekends</h5>
                <div className="d-flex">
                  <p>Saturday and Sunday</p>
                  <p className="ms-5">11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="col-12">
                <h4 className="mt-5 mb-4">
                  Taiwo Kolawale Avenue, First Unity Estate, Badore, Lagos Nigeria
                </h4>

                <div className="google-map pt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23495.69388500218!2d3.5957935!3d6.5059712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfbca5002ec7b%3A0x5175001cbcb692f5!2sTaiwo%20Kolawole%20Avenue!5e1!3m2!1sen!2sng!4v1666443447530!5m2!1sen!2sng"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}

'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct import for newer Swiper versions

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([
        {
          name: 'Sarah M.',
          feedback: 'The food is amazing! Every bite was a burst of flavor!',
          email: 'sarah.m@example.com',
        },
        {
          name: 'John D.',
          feedback: 'A truly remarkable dining experience, worth every penny.',
          email: 'john.d@example.com',
        },
        {
          name: 'Emma R.',
          feedback: 'The atmosphere was perfect, and the staff was exceptional!',
          email: 'emma.r@example.com',
        },
      ]);

      const [form, setForm] = useState({
        name: '',
        feedback: '',
        email: '',
        isAnonymous: false,
      });
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTestimonial = {
            name: form.isAnonymous ? 'Anonymous' : form.name,
            feedback: form.feedback,
            email: form.email,
          };
      
          setTestimonials((prev) => [...prev, newTestimonial]);
          setForm({ name: '', feedback: '', email: '', isAnonymous: false });
  };

  return (
    <section className="testimonials py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What Our Customers Say
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item p-6 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700">{`"${testimonial.feedback}"`}</p>
                <p className="mt-4 text-sm text-gray-600">
                  {testimonial.name === 'Anonymous' ? (
                    'Anonymous'
                  ) : (
                    <a href={`mailto:${testimonial.email}`} className="text-blue-500">
                      {testimonial.name}
                    </a>
                  )}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Feedback Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Share Your Feedback</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="feedback" className="block text-lg text-gray-700">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows={4} 
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                value={form.feedback}
                onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="name" className="block text-lg text-gray-700">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">
                Your Email Address (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="anonymous"
                checked={form.isAnonymous}
                onChange={() => setForm({ ...form, isAnonymous: !form.isAnonymous })}
                className="mr-2"
              />
              <label htmlFor="anonymous" className="text-gray-700">
                Submit anonymously
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 px-8 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
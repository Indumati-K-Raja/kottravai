import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Meena",
    location: "Tenkasi",
    role: "Creator, Kottravai",
    image: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "I thought my hands were only meant for housework. Now, I send my products to people I’ve never met — and they love them. It changed my world."
  },
  {
    name: "Priya",
    location: "HCL, Madurai",
    role: "Customer",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "When I use my Kottravai bowl, I remember the woman behind it. It’s more than a product — it’s a relationship."
  },
  {
    name: "Santhosh",
    location: "TASS, Shankarankoil",
    role: "Mentor",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "It’s not charity. It’s legacy-building. These women are not beneficiaries — they are entrepreneurs."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Stories of Transformation</h2>
          <p className="text-xl text-gray-600">
            Hear from the women who are building the future and the community that supports them
          </p>
        </div>
        {/* Main testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-purple-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-orange-600 mr-3" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic flex-1">"{testimonial.content}"</p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-orange-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
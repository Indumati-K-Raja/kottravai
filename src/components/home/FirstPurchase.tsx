import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const FirstPurchase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 flex flex-col items-center text-center">
            <div className="space-y-4 w-full">
              <h2 className="text-4xl font-bold text-gray-900">
                The First Sale.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                That first order? It wasn’t just a sale.
                It was proof. That belief + effort + courage = transformation.
                From one humble bowl to hundreds of creations.
                From one woman to a thousand more waiting.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center font-medium mx-auto">
                Be Part of Her Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col gap-2 w-full max-w-xs mx-auto">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">First Purchase Made</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">Tenkasi, India</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <img 
                src="/assets/firstsale.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="First purchase moment - coconut shell products"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -left-4 bg-purple-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">#001</div>
                  <div className="text-sm">First Purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPurchase;
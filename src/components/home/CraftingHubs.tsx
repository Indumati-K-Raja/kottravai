import React from 'react';
import { Link } from 'react-router-dom';

const CraftingHubs = () => {
  const hubs = [
    {
      title: "Coconut Crafting Hub",
      description: "Where discarded shells become treasured keepsakes. Every curve holds stories of patience, earth, and ancestral skill.",
      image: "/assets/cocnuthub.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Banana Bark Hub",
      description: "From nature’s leftover to living room art. Our women craft pieces with threads of tradition and roots of resilience.",
      image: "?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Weaving Hub",
      description: "Coir becomes craft in these hands. Each knot is a line of a story told without words.",
      image: "?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Electronics Hub",
      description: "Not just wires and circuits — but dignity in design. We train women in rural electronics to create tools with purpose.",
      image: "?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">OUR CRAFT HUBS</h2>
          <p className="text-xl text-purple-600 font-semibold">
            The Space of Her Strength, The Center of Our Unity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 transition-all duration-300"
              style={{ aspectRatio: '1 / 1', minWidth: 0 }}
            >
              <div className="w-full flex-shrink-0">
                <img
                  src={hub.image}
                  alt={hub.title}
                  className="w-full object-cover rounded-2xl"
                  style={{ aspectRatio: '1 / 1', height: '180px', maxHeight: '180px' }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between w-full px-4 py-3">
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{hub.title}</h3>
                <p className="text-purple-700 mb-2 leading-snug italic text-sm text-center">
                  {hub.description}
                </p>
                <Link to="/hubs" className="mt-2 inline-block w-full bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm text-center">
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftingHubs;
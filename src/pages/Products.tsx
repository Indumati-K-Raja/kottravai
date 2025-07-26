import React from 'react';
import { Leaf, Palette, Home, Utensils, Shirt, Gem } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Utensils className="h-12 w-12 text-purple-600" />,
      title: 'Coconut Shell Crafts',
      description: 'Reviving ancestral wisdom through sustainable design — where every piece carries the essence of earth, resilience, and artistry',
      image: 'https://images.pexels.com/photos/5650072/pexels-photo-5650072.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Bowls & Cups', 'Decorative Items', 'Kitchen Accessories', 'Gift Sets']
    },
    {
      icon: <Shirt className="h-12 w-12 text-purple-600" />,
      title: 'Weaving Hub',
      description: 'Bringing together modern innovation and traditional skill to craft coir baskets, bags, and more',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Coir Baskets', 'Woven Bags', 'Traditional Textiles', 'Home Furnishings']
    },
    {
      icon: <Leaf className="h-12 w-12 text-purple-600" />,
      title: 'Banana Bark Hub',
      description: 'From the resilient bark of the banana tree, our creators shape mindful creations — grounding tradition in sustainability',
      image: 'https://images.pexels.com/photos/6207350/pexels-photo-6207350.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Natural Bags', 'Decorative Panels', 'Sustainable Packaging', 'Art Pieces']
    },
    {
      icon: <Smartphone className="h-12 w-12 text-purple-600" />,
      title: 'Electronics Hub',
      description: 'Mindful hands meet modern tools — crafting purposeful devices that power daily life with simplicity and reliability',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Mobile Accessories', 'Solar Devices', 'Smart Home Items', 'Eco-tech Solutions']
    },
    {
      icon: <Leaf className="h-12 w-12 text-purple-600" />,
      title: 'Organic Food Products',
      description: 'Pure, organic spices, grains, and food products from rural farms',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Spices & Herbs', 'Organic Grains', 'Traditional Snacks', 'Health Products']
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-600" />,
      title: 'Traditional Pottery',
      description: 'Handcrafted clay pots, decorative items, and functional pottery',
      image: 'https://images.pexels.com/photos/6207688/pexels-photo-6207688.jpeg?auto=compress&cs=tinysrgb&w=400',
      products: ['Water Pots', 'Decorative Vases', 'Kitchen Pottery', 'Garden Planters']
    }
  ];

  const featuredProducts = [
    {
      name: 'Premium Coconut Shell Bowl Set',
      price: '₹899',
      image: 'https://images.pexels.com/photos/5650072/pexels-photo-5650072.jpeg?auto=compress&cs=tinysrgb&w=300',
      maker: 'Meena, Tenkasi'
    },
    {
      name: 'Handwoven Silk Saree',
      price: '₹4,999',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=300',
      maker: 'Lakshmi, Madurai'
    },
    {
      name: 'Traditional Clay Water Pot',
      price: '₹1,299',
      image: 'https://images.pexels.com/photos/6207350/pexels-photo-6207350.jpeg?auto=compress&cs=tinysrgb&w=300',
      maker: 'Devi, Thanjavur'
    },
    {
      name: 'Organic Turmeric Powder',
      price: '₹299',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300',
      maker: 'Kamala, Coimbatore'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover authentic handcrafted products made by skilled women artisans across Tamil Nadu. 
              Each item tells a story of tradition, skill, and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">
              Explore our diverse range of handcrafted products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Available Products:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Explore Category
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">
              Handpicked items that showcase the best of our artisans' craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-purple-600 mb-2">Made by {product.maker}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every product in our collection undergoes rigorous quality checks to ensure 
                it meets international standards while maintaining the authentic charm of 
                traditional craftsmanship.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Handcrafted Excellence</h3>
                    <p className="text-gray-600">Each item is carefully crafted by skilled artisans using traditional techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Materials</h3>
                    <p className="text-gray-600">We use eco-friendly, locally sourced materials that support environmental sustainability.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fair Trade Practices</h3>
                    <p className="text-gray-600">Our artisans receive fair compensation for their work, ensuring sustainable livelihoods.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Quality craftsmanship"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop with Purpose?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Browse our complete collection and find the perfect handcrafted items 
            that support rural women entrepreneurs while bringing authentic Indian 
            craftsmanship to your home.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Explore All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
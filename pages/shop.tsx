import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Star, Heart, ShoppingCart, ArrowRight, BookOpen, Leaf, Zap, Layers3 } from 'lucide-react';
import Link from 'next/link';

// Local Card component for unified UI
interface CardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
  accentColor?: string;
  cta?: { label: string; href: string; onClick?: () => void };
  children?: React.ReactNode;
}
const Card = ({ icon, image, title, description, accentColor = 'purple', cta, children }: CardProps) => (
  <div
    className={`flex flex-col items-center bg-gradient-to-br from-${accentColor}-50 to-pink-50 rounded-2xl shadow-lg p-6 h-full min-h-[370px] max-h-[400px]`}
    style={{ aspectRatio: '1 / 1', minWidth: 0 }}
  >
    {icon && <div className={`mb-4`}>{icon}</div>}
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-2xl mb-4"
        style={{ aspectRatio: '1 / 1', height: '180px', maxHeight: '180px' }}
      />
    )}
    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
    <p className="text-gray-700 text-center mb-2 text-sm">{description}</p>
    {children}
    {cta && (
      <Link
        href={cta.href}
        onClick={cta.onClick}
        className={`mt-auto inline-block w-full bg-${accentColor}-600 text-white px-3 py-2 rounded-lg hover:bg-${accentColor}-700 transition-colors font-medium text-sm text-center`}
      >
        {cta.label}
      </Link>
    )}
  </div>
);

const categories = [
  {
    icon: <Leaf className="h-10 w-10 text-purple-600 mb-4" />,
    title: 'Coconut Shell Creations',
    description: 'Bowls, Spoons, Candle Holders, Trinket Boxes',
    accentColor: 'purple',
    quote: '"What was once waste is now wonder. These shells carry not just design — but dignity."',
    cta: { label: 'Browse Coconut Crafts', href: '/shop?category=coconut' }
  },
  {
    icon: <Layers3 className="h-10 w-10 text-yellow-600 mb-4" />,
    title: 'Banana Bark Decor',
    description: 'Wall Hangings, Coasters, Lampshades',
    accentColor: 'yellow',
    quote: 'From bark to beauty — mindful hands transform what nature leaves behind into treasures for your space.',
    cta: { label: 'Browse Banana Bark Items', href: '/shop?category=banana' }
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-pink-600 mb-4" />,
    title: 'Coir Weavings',
    description: 'Baskets, Storage Bins, Handbags',
    accentColor: 'pink',
    quote: 'Twist by twist, knot by knot — these coir crafts weave together tradition and tomorrow.',
    cta: { label: 'Browse Coir Collection', href: '/shop?category=weaving' }
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-700 mb-4" />,
    title: 'EarthTech: Rural Electronics',
    description: 'Chargers, Switches, LED Night Lamps (Coming Soon)',
    accentColor: 'purple',
    quote: 'Crafted with precision by women trained in tech — this is where innovation meets empowerment.',
    cta: { label: 'Pre-Book or View Pilot Products', href: '/shop?category=electronics' }
  }
];

const Shop = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHub, setSelectedHub] = useState(router.query.hub as string || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const categoriesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted by Her. Carried with Purpose.
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Every product you see here began in a rural home — in the quiet strength of a woman's hands, guided by generations of wisdom, and brought to life through skill and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Explore Categories
            </button>
            <Link
              href="/story"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section ref={categoriesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Handcrafted Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each category represents a different skill set, a different story, and a different path to empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
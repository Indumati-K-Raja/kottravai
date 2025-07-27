import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Star, Heart, ShoppingCart, ArrowRight, BookOpen, Leaf, Zap, Layers3 } from 'lucide-react';

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
        to={cta.href}
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
    quote: '“What was once waste is now wonder. These shells carry not just design — but dignity.”',
    cta: { label: 'Browse Coconut Crafts', href: '/shop?category=coconut' }
  },
  {
    icon: <Layers3 className="h-10 w-10 text-yellow-600 mb-4" />,
    title: 'Banana Bark Decor',
    description: 'Wall Hangings, Coasters, Lampshades',
    accentColor: 'yellow',
    quote: '“From bark to beauty — mindful hands transform what nature leaves behind into treasures for your space.”',
    cta: { label: 'Browse Banana Bark Items', href: '/shop?category=banana' }
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-pink-600 mb-4" />,
    title: 'Coir Weavings',
    description: 'Baskets, Storage Bins, Handbags',
    accentColor: 'pink',
    quote: '“Twist by twist, knot by knot — these coir crafts weave together tradition and tomorrow.”',
    cta: { label: 'Browse Coir Collection', href: '/shop?category=weaving' }
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-700 mb-4" />,
    title: 'EarthTech: Rural Electronics',
    description: 'Chargers, Switches, LED Night Lamps (Coming Soon)',
    accentColor: 'purple',
    quote: '“Crafted with precision by women trained in tech — this is where innovation meets empowerment.”',
    cta: { label: 'Pre-Book or View Pilot Products', href: '/shop?category=electronics' }
  }
];

const Shop = () => {
  // ... filter/search/product logic as before ...
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHub, setSelectedHub] = useState((router.query.hub as string) || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const categoriesRef = useRef<HTMLDivElement>(null);

  // ... products and filteredProducts logic as before ...

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted by Her. Carried with Purpose.
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Every product you see here began in a rural home — in the quiet strength of a woman’s hands, guided by generations of wisdom, and brought to life through skill and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#shop-categories" className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center text-lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Exploring
            </a>
                          <Link href="/story" className="bg-white text-purple-700 px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center text-lg border border-purple-100">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Her Stories
            </Link>
          </div>
        </div>
      </section>

      {/* SHOP CATEGORIES */}
      <section id="shop-categories" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <Card
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
                accentColor={cat.accentColor}
                cta={cat.cta}
              >
                <p className={`italic text-center text-sm mb-4 text-${cat.accentColor}-700`}>{cat.quote}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STORYTELLING HIGHLIGHT */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50 my-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More than products. These are possibilities.</h2>
          <blockquote className="text-xl italic text-purple-700 mb-6">“Every time someone buys what I make, I feel seen. Not as a poor woman. But as a creator.”<br /><span className="block text-base text-gray-600 mt-2">– Parvathi, 42, Puliyangudi</span></blockquote>
                        <Link href="/story" className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors font-semibold text-lg">Shop Stories, Not Just Things</Link>
        </div>
      </section>

      {/* BUNDLES & OCCASIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Gifts that give back.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card
              title="Housewarming Hamper"
              description="Coconut shell sets + banana bark lamp"
              accentColor="purple"
            />
            <Card
              title="Wedding Return Gift Sets"
              description="Handwoven mini baskets with tags"
              accentColor="yellow"
            />
            <Card
              title="Festive Picks"
              description="Earthy decor for Diwali, Christmas, Pongal"
              accentColor="pink"
            />
            <Card
              title="Mindful Living"
              description="Sustainable wellness combos"
              accentColor="green"
            />
          </div>
                        <Link href="/shop?category=bundles" className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors font-semibold text-lg">Explore Gift Ideas</Link>
        </div>
      </section>

      {/* IMPACT TRACKER */}
      <section className="py-10 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your purchase today supports…</h2>
          <ul className="mb-6 text-lg text-purple-700 space-y-2">
            <li>• 1 day of training for a new artisan</li>
            <li>• Healthy meals for her child while she works</li>
            <li>• Maintenance of rural micro-production hubs</li>
          </ul>
          <Link href="/impact" className="bg-white text-purple-700 px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors font-semibold text-lg border border-purple-100">Know Where Your Money Goes</Link>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Take home more than a product.<br />Carry her pride with you.</h2>
          <p className="text-xl text-gray-700 mb-8">Every item here is made with intent — to change a life, to revive a craft, to honour the earth.<br />This isn’t just shopping. This is how we shift the narrative.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors font-semibold text-lg">Start Shopping</Link>
            <Link href="/about" className="bg-white text-purple-700 px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors font-semibold text-lg border border-purple-100">Join the Movement</Link>
            <Link href="/mentorship" className="bg-pink-100 text-pink-700 px-8 py-3 rounded-lg shadow-md hover:bg-pink-200 transition-colors font-semibold text-lg border border-pink-200">Gift a Skill</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
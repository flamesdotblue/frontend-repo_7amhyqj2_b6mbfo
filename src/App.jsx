import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

const products = [
  {
    id: 1,
    name: 'Nebula Headphones',
    price: 249,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518442076295-7db3bedb9d69?q=80&w=1400&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Quantum Smartwatch',
    price: 329,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1400&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Hologram Speaker',
    price: 189,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1400&auto=format&fit=crop',
    tag: 'Hot',
  },
  {
    id: 4,
    name: 'Aurora Keyboard',
    price: 159,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    tag: 'Limited',
  },
  {
    id: 5,
    name: 'Phantom Drone',
    price: 799,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1506377711776-0a72f9ccfcfb?q=80&w=1400&auto=format&fit=crop',
    tag: 'Pro',
  },
  {
    id: 6,
    name: 'Eclipse VR Set',
    price: 499,
    rating: 4.3,
    image:
      'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1400&auto=format&fit=crop',
    tag: 'New',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-100 selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <main className="relative z-0">
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
          <header className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Products</h2>
              <p className="text-zinc-400 mt-2">Futuristic gear with a glossy, glass-like aesthetic.</p>
            </div>
            <div className="hidden md:flex divide-x divide-white/10 rounded-full backdrop-blur bg-white/5 border border-white/10 overflow-hidden">
              {['All', 'Audio', 'Wearables', 'Home', 'Drones'].map((f) => (
                <button
                  key={f}
                  className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {f}
                </button>
              ))}
            </div>
          </header>
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

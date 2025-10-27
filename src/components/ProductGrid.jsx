import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export default function ProductGrid({ products = [] }) {
  return (
    <div id="shop" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((p, idx) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/0 to-transparent" />

            <div className="absolute left-3 top-3 flex items-center gap-2">
              {p.tag && (
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-zinc-200">
                  {p.tag}
                </span>
              )}
            </div>
          </div>

          <div className="p-4 md:p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base md:text-lg font-semibold text-white/95 leading-tight">
                {p.name}
              </h3>
              <div className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">
                <Star size={12} className="fill-amber-300 text-amber-300" />
                {p.rating}
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-zinc-300">{formatCurrency(p.price)}</span>
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:text-white transition-colors"
                aria-label={`Add ${p.name} to cart`}
              >
                <ShoppingCart size={14} />
                Add
              </button>
            </div>
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-purple-500/10" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}

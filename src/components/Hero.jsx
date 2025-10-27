import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(129,140,248,0.18),transparent_60%),radial-gradient(800px_400px_at_10%_10%,rgba(236,72,153,0.14),transparent_60%),radial-gradient(900px_500px_at_50%_110%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative h-[70vh] md:h-[78vh] lg:h-[86vh] overflow-hidden rounded-b-[2.5rem] border-b border-white/10">        
        <div className="absolute inset-0">
          <Spline 
            scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950/60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-full flex items-end">
          <div className="w-full pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Immersive shopping
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                Discover glossy tech in a dark, glass world
              </h1>
              <p className="mt-4 text-zinc-300 md:text-lg">
                Explore a curated collection of futuristic products with fluid, 3D visuals and silky hover interactions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/15 px-5 py-2.5 text-sm font-medium text-fuchsia-200 hover:bg-fuchsia-500/25 transition-colors"
                >
                  Shop now
                  <span className="relative ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500/80 text-white">→</span>
                </a>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-zinc-200 hover:bg-white/10 hover:text-white transition-colors">
                  View deals
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

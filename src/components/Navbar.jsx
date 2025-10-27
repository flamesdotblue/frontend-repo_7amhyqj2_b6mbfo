import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]">
          <div className="pl-4 pr-3 py-3 flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-fuchsia-500/30 blur-xl" aria-hidden />
              <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-white/10 grid place-items-center text-fuchsia-400 font-bold">
                ƒ
              </div>
            </div>
            <span className="text-sm md:text-base font-semibold tracking-wide text-white/90">Flux Shop</span>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
            <div className="group relative flex-1">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <Search size={16} className="text-zinc-400" />
                <input
                  className="w-full bg-transparent outline-none placeholder:text-zinc-500 text-sm text-zinc-200"
                  placeholder="Search futuristic gear"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 pr-2">
            <button className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-200 hover:bg-white/10 hover:text-white transition-colors">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
              <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500/90 text-[10px] font-semibold text-white">2</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

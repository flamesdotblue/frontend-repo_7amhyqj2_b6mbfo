import React from 'react';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(236,72,153,0.18),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay in the loop</h3>
              <p className="text-zinc-400 mt-2 max-w-md">
                Get updates on exclusive drops, glossy deals, and futuristic finds.
              </p>
            </div>
            <form className="w-full md:w-auto flex items-center gap-2">
              <input
                type="email"
                placeholder="you@futuremail.com"
                className="flex-1 md:w-80 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-fuchsia-500/40"
              />
              <button
                type="submit"
                className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20 px-4 py-2.5 text-sm font-medium text-fuchsia-100 hover:bg-fuchsia-500/30 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Flux Shop. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

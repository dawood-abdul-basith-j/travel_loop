'use client';

import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6 px-10 glass border-0 rounded-none border-b border-glass-border sticky top-0 z-50">
      <div className="relative w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
        <input 
          type="text" 
          placeholder="Search destinations, trips, or activities..." 
          className="w-full bg-surface border border-glass-border rounded-full py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-secondary transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-text-muted hover:text-text transition-all">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border-2 border-background"></span>
        </button>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-xs text-text-muted">Welcome back,</p>
            <p className="text-sm font-bold group-hover:text-secondary transition-all">Dawood</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-glass-border overflow-hidden">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

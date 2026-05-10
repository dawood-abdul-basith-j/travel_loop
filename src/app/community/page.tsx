'use client';

import MainLayout from '@/components/MainLayout';
import { Users, Heart, Share2, Copy, Search, Filter } from 'lucide-react';

export default function CommunityTab() {
  const sharedTrips = [
    { id: '1', title: 'Hidden Gems of Iceland', author: 'Elena R.', likes: 1240, img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80' },
    { id: '2', title: '2 Weeks in Southern Japan', author: 'Marco K.', likes: 850, img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
    { id: '3', title: 'The Ultimate Swiss Alp Tour', author: 'Sophie L.', likes: 3200, img: 'https://images.unsplash.com/photo-1531219243997-70ba5b736ed4?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <MainLayout>
      <div className="animate-in">
        <header className="mb-10">
          <h1 className="text-3xl mb-2 flex items-center gap-3">
            <Users className="text-secondary" />
            Traveloop Community
          </h1>
          <p className="text-text-muted">Get inspired by itineraries from fellow travelers</p>
        </header>

        <div className="flex gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input type="text" placeholder="Search for certain trips or destinations..." className="w-full bg-surface border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          <button className="btn btn-ghost"><Filter size={18} /></button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {sharedTrips.map(trip => (
            <div key={trip.id} className="glass-card group p-0 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={trip.img} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full text-white hover:text-accent transition-all">
                  <Heart size={18} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Shared by {trip.author}</p>
                <h3 className="text-xl mb-4 leading-tight">{trip.title}</h3>
                <div className="flex gap-2">
                  <button className="btn btn-primary flex-1 text-sm py-2">
                    <Copy size={16} /> Copy Trip
                  </button>
                  <button className="btn btn-ghost p-2">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

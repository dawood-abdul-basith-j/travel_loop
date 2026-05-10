'use client';

import MainLayout from '@/components/MainLayout';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  MapPin,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function TripsList() {
  const trips = [
    { 
      id: '1', 
      name: 'European Adventure', 
      location: 'France, Italy, Switzerland', 
      dates: 'Jun 12 - Jun 28', 
      status: 'Upcoming', 
      img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: '2', 
      name: 'Tokyo Getaway', 
      location: 'Tokyo, Japan', 
      dates: 'Apr 05 - Apr 12', 
      status: 'Completed', 
      img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: '3', 
      name: 'Bali Relaxation', 
      location: 'Ubud, Bali', 
      dates: 'Oct 15 - Oct 22', 
      status: 'Ongoing', 
      img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' 
    },
  ];

  return (
    <MainLayout>
      <div className="animate-in">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl mb-2">My Journeys</h1>
            <p className="text-text-muted">Manage and explore your planned itineraries</p>
          </div>
          <Link href="/trips/create" className="btn btn-primary px-8">
            <Plus size={20} />
            Create New Trip
          </Link>
        </header>

        <div className="flex gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Filter trips by name or location..." 
              className="w-full bg-surface border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-secondary transition-all"
            />
          </div>
          <button className="btn btn-ghost flex items-center gap-2">
            <Filter size={18} />
            Sort by Date
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {trips.map((trip) => (
            <div key={trip.id} className="glass-card group flex gap-8 p-6 hover:bg-white/5 transition-all">
              <div className="w-64 h-40 rounded-xl overflow-hidden shrink-0">
                <img src={trip.img} alt={trip.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                      trip.status === 'Upcoming' ? 'bg-primary/20 text-primary-light' : 
                      trip.status === 'Ongoing' ? 'bg-secondary/20 text-secondary' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {trip.status}
                    </span>
                    <button className="text-text-muted hover:text-text transition-all">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <h2 className="text-2xl mb-2 group-hover:text-secondary transition-all">{trip.name}</h2>
                  <div className="flex flex-col gap-1 text-sm text-text-muted">
                    <div className="flex items-center gap-2"><MapPin size={14} /> {trip.location}</div>
                    <div className="flex items-center gap-2"><Calendar size={14} /> {trip.dates}</div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <Link href={`/trips/${trip.id}`} className="btn btn-primary py-2 px-6 text-sm">
                    View Itinerary
                  </Link>
                  <Link href={`/trips/${trip.id}/edit`} className="text-sm text-text-muted hover:text-text flex items-center gap-1 group/link">
                    Edit Plan <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

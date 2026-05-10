'use client';

import MainLayout from '@/components/MainLayout';
import { 
  TrendingUp, 
  MapPin, 
  Clock, 
  DollarSign, 
  Plus, 
  ChevronRight,
  Plane,
  Home,
  Coffee
} from 'lucide-react';
import Link from 'next/link';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';

const budgetData = [
  { name: 'Transport', value: 400, color: '#0f4c5c' },
  { name: 'Stay', value: 300, color: '#e9c46a' },
  { name: 'Meals', value: 200, color: '#e76f51' },
  { name: 'Activities', value: 100, color: '#3a506b' },
];

export default function Dashboard() {
  const popularCities = [
    { name: 'Tokyo', country: 'Japan', cost: '$$$', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80' },
    { name: 'Paris', country: 'France', cost: '$$$$', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bali', country: 'Indonesia', cost: '$', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rome', country: 'Italy', cost: '$$$', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80' },
  ];

  const recentTrips = [
    { name: 'European Adventure', dates: 'June 12 - June 28', status: 'Upcoming', progress: 0 },
    { name: 'Tokyo Getaway', dates: 'April 05 - April 12', status: 'Completed', progress: 100 },
  ];

  return (
    <MainLayout>
      <section className="animate-in">
        {/* Hero Banner */}
        <div className="relative h-[350px] rounded-3xl overflow-hidden mb-10 group">
          <img 
            src="/banner.png" 
            alt="Traveloop Banner" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex flex-col justify-center px-12">
            <h1 className="text-5xl mb-4 leading-tight">
              Where will you <span className="text-secondary">loop</span> next?
            </h1>
            <p className="text-text-muted text-lg mb-8 max-w-md">
              Plan your multi-city journey with intelligent budget tracking and collaborative itineraries.
            </p>
            <div className="flex gap-4">
              <Link href="/trips/1/edit" className="btn btn-primary">
                <Plus size={20} />
                Start Planning
              </Link>
              <button className="btn btn-ghost">
                View Demo
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Recent Trips */}
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl flex items-center gap-2">
                <Clock className="text-secondary" size={24} />
                Recent Trips
              </h2>
              <Link href="/trips" className="text-sm text-text-muted hover:text-secondary flex items-center gap-1">
                View all <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {recentTrips.map((trip) => (
                <Link href="/trips/1" key={trip.name} className="glass-card flex flex-col gap-4 hover:scale-[1.02] transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg">{trip.name}</h3>
                      <p className="text-xs text-text-muted">{trip.dates}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      trip.status === 'Upcoming' ? 'bg-primary/20 text-primary-light border border-primary/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Planning Progress</span>
                      <span>{trip.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary transition-all duration-1000" 
                        style={{ width: `${trip.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Popular Cities */}
            <div className="mt-12">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <TrendingUp className="text-accent" size={24} />
                Trending Destinations
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {popularCities.map((city) => (
                  <div key={city.name} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <img src={city.img} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs text-secondary font-bold uppercase tracking-widest">{city.country}</p>
                      <h3 className="text-xl">{city.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-text-muted mt-1">
                        <DollarSign size={10} />
                        <span>Cost Index: {city.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="col-span-4 flex flex-col gap-8">
            {/* Budget Highlights */}
            <div className="glass-card">
              <h2 className="text-xl mb-6">Budget Insights</h2>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ background: '#1c2541', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#edf2f4' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {budgetData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs text-text-muted">{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-glass-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Total Spent</span>
                  <span className="text-lg font-bold text-secondary">$1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Daily Average</span>
                  <span className="text-sm text-accent">$85/day</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card bg-primary/10">
              <h2 className="text-xl mb-4">Quick Tools</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-surface-hover transition-all">
                  <Plane className="text-secondary" />
                  <span className="text-xs font-medium">Flights</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-surface-hover transition-all">
                  <Home className="text-secondary" />
                  <span className="text-xs font-medium">Stays</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-surface-hover transition-all">
                  <Coffee className="text-secondary" />
                  <span className="text-xs font-medium">Eats</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-surface-hover transition-all">
                  <MapPin className="text-secondary" />
                  <span className="text-xs font-medium">Local</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

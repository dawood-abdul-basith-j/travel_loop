'use client';

import MainLayout from '@/components/MainLayout';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Share2, 
  Download,
  AlertTriangle,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

export default function TripView() {
  const trip = {
    name: 'European Adventure',
    location: 'Europe (Multiple Cities)',
    budget: 3500,
    spent: 3200,
    days: [
      {
        day: 1,
        date: 'June 12',
        activities: [
          { name: 'Flight to Paris (CDG)', cost: 450, type: 'Transport' },
          { name: 'Hotel Check-in: Hotel de Ville', cost: 120, type: 'Stay' },
          { name: 'Dinner at Le Comptoir', cost: 65, type: 'Dining' },
        ]
      },
      {
        day: 2,
        date: 'June 13',
        activities: [
          { name: 'Louvre Museum Tour', cost: 45, type: 'Activity' },
          { name: 'Eiffel Tower Night View', cost: 30, type: 'Activity' },
        ]
      }
    ]
  };

  const isOverBudget = trip.spent > trip.budget;

  return (
    <MainLayout>
      <div className="animate-in">
        <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-secondary mb-8 transition-all">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <header className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider">Active Trip</span>
              <span className="text-text-muted flex items-center gap-1 text-sm"><MapPin size={14} /> {trip.location}</span>
            </div>
            <h1 className="text-5xl">{trip.name}</h1>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-ghost">
              <Share2 size={18} />
              Share
            </button>
            <button className="btn btn-ghost">
              <Download size={18} />
              Export
            </button>
            <Link href={`/trips/1/edit`} className="btn btn-primary">
              Edit Itinerary
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
          {/* Main Itinerary */}
          <div className="col-span-8 flex flex-col gap-10">
            {trip.days.map((day) => (
              <div key={day.day} className="relative">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-surface border border-glass-border flex flex-col items-center justify-center">
                    <span className="text-xs text-text-muted uppercase font-bold">Day</span>
                    <span className="text-2xl font-bold text-secondary">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{day.date}</h3>
                    <p className="text-sm text-text-muted">3 Activities planned</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pl-8 border-l-2 border-dashed border-glass-border ml-8">
                  {day.activities.map((activity, idx) => (
                    <div key={idx} className="glass-card flex justify-between items-center py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                          {activity.type === 'Transport' ? <DollarSign size={18} /> : <Calendar size={18} />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.name}</p>
                          <p className="text-xs text-text-muted">{activity.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-secondary">${activity.cost}</p>
                        <button className="text-[10px] text-text-muted hover:text-text">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Budget Side Panel */}
          <div className="col-span-4">
            <div className={`glass-card sticky top-28 ${isOverBudget ? 'border-accent/50 bg-accent/5' : ''}`}>
              <h2 className="text-xl mb-6 flex items-center justify-between">
                Financial Summary
                <DollarSign className="text-secondary" />
              </h2>
              
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-muted">Spent vs Budget</span>
                    <span className={isOverBudget ? 'text-accent font-bold' : 'text-secondary font-bold'}>
                      ${trip.spent} / ${trip.budget}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${isOverBudget ? 'bg-accent' : 'bg-secondary'}`} 
                      style={{ width: `${Math.min((trip.spent / trip.budget) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {isOverBudget && (
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 flex gap-3">
                    <AlertTriangle className="text-accent shrink-0" size={20} />
                    <div>
                      <p className="text-xs font-bold text-accent uppercase">Over Budget Alert</p>
                      <p className="text-xs text-text-muted mt-1">You've exceeded your planned budget by $300. Consider adjusting upcoming activities.</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-surface/30">
                    <span className="text-sm">Transport</span>
                    <span className="text-sm font-bold">$1,450</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-surface/30">
                    <span className="text-sm">Accommodation</span>
                    <span className="text-sm font-bold">$980</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-surface/30">
                    <span className="text-sm">Food & Drink</span>
                    <span className="text-sm font-bold">$540</span>
                  </div>
                </div>

                <button className="btn btn-primary w-full py-4">
                  Add New Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

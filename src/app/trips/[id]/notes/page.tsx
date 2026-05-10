'use client';

import MainLayout from '@/components/MainLayout';
import { FileText, Plus, Search, Filter, Clock, MapPin } from 'lucide-react';

export default function TripNotes() {
  const notes = [
    { id: '1', title: 'Hotel check-in details - Rome stop', content: 'Check in after 3pm, room 302, breakfast included (7-10am)', date: 'May 14, 2026', stop: 'Rome' },
    { id: '2', title: 'Restaurant recommendation', content: 'Try the carbonara at Roscioli Salumeria. Need reservation.', date: 'May 15, 2026', stop: 'Rome' },
    { id: '3', title: 'Train tickets info', content: 'Frecciarossa 9612, Departure 10:30, Carriage 5, Seat 12A', date: 'May 16, 2026', stop: 'Florence' },
  ];

  return (
    <MainLayout>
      <div className="animate-in">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl mb-2 flex items-center gap-3">
              <FileText className="text-secondary" />
              Trip Notes
            </h1>
            <p className="text-text-muted">Personal reminders and journal entries for <span className="text-secondary font-bold">European Adventure</span></p>
          </div>
          <button className="btn btn-primary">
            <Plus size={20} /> Add Note
          </button>
        </header>

        <div className="flex gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input type="text" placeholder="Search notes..." className="w-full bg-surface border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          <div className="flex gap-2 bg-surface p-1 rounded-xl border border-glass-border">
            {['All', 'By Day', 'By Stop'].map(filter => (
              <button key={filter} className={`px-4 py-2 rounded-lg text-sm transition-all ${filter === 'All' ? 'bg-primary text-white' : 'text-text-muted hover:text-text'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {notes.map(note => (
            <div key={note.id} className="glass-card flex justify-between items-start">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <span className="flex items-center gap-1 text-[10px] text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded">
                    <MapPin size={10} /> {note.stop}
                  </span>
                </div>
                <p className="text-text-muted mb-4">{note.content}</p>
                <div className="flex items-center gap-2 text-xs text-text-muted/60">
                  <Clock size={12} /> Last updated: {note.date}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-text-muted hover:text-text transition-all"><FileText size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

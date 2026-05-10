'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import { 
  Plus, 
  Trash2, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Save,
  ArrowRight
} from 'lucide-react';

interface StopSection {
  id: string;
  city: string;
  dateRange: string;
  budget: number;
  description: string;
}

export default function ItineraryBuilder() {
  const [sections, setSections] = useState<StopSection[]>([
    { id: '1', city: 'Paris, France', dateRange: 'June 12 - June 15', budget: 1200, description: 'All the necessary information about this section. This can be anything like travel section, hotel or any other activity' },
    { id: '2', city: 'Rome, Italy', dateRange: 'June 16 - June 20', budget: 1500, description: 'Explore the ancient ruins and enjoy authentic pasta. Stay near the Pantheon.' },
  ]);

  const addSection = () => {
    const newId = (sections.length + 1).toString();
    setSections([...sections, { 
      id: newId, 
      city: '', 
      dateRange: '', 
      budget: 0, 
      description: '' 
    }]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto animate-in">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl mb-2">Build Itinerary</h1>
            <p className="text-text-muted">Trip to <span className="text-secondary font-bold">European Adventure</span></p>
          </div>
          <button className="btn btn-primary">
            <Save size={20} />
            Save Changes
          </button>
        </header>

        <div className="flex flex-col gap-8">
          {sections.map((section, index) => (
            <div key={section.id} className="glass-card relative group">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm border-4 border-background z-10">
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-text-muted mb-2">
                    <MapPin size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Section {index + 1}</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    defaultValue={section.city}
                    className="bg-transparent text-2xl font-bold border-none focus:ring-0 w-full placeholder:text-text-muted/30"
                  />
                </div>
                <button 
                  onClick={() => removeSection(section.id)}
                  className="p-2 text-text-muted hover:text-accent transition-all opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-surface/50 p-4 rounded-xl border border-glass-border">
                  <div className="flex items-center gap-2 text-text-muted mb-2 text-sm">
                    <Calendar size={14} />
                    Date Range
                  </div>
                  <input 
                    type="text" 
                    placeholder="xxx to yyy" 
                    defaultValue={section.dateRange}
                    className="bg-transparent font-medium border-none focus:ring-0 w-full"
                  />
                </div>
                <div className="bg-surface/50 p-4 rounded-xl border border-glass-border">
                  <div className="flex items-center gap-2 text-text-muted mb-2 text-sm">
                    <DollarSign size={14} />
                    Section Budget
                  </div>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    defaultValue={section.budget}
                    className="bg-transparent font-medium border-none focus:ring-0 w-full"
                  />
                </div>
              </div>

              <textarea 
                placeholder="Notes about this section (hotel, travel info, activities...)"
                defaultValue={section.description}
                rows={3}
                className="w-full bg-surface/30 p-4 rounded-xl border border-glass-border text-sm text-text-muted focus:outline-none focus:border-secondary transition-all"
              ></textarea>

              {index < sections.length - 1 && (
                <div className="absolute -bottom-8 left-12 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
              )}
            </div>
          ))}

          <button 
            onClick={addSection}
            className="flex items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed border-glass-border text-text-muted hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-surface group-hover:bg-secondary group-hover:text-background flex items-center justify-center transition-all">
              <Plus size={24} />
            </div>
            <span className="font-bold text-lg">Add another Section</span>
          </button>
        </div>

        <div className="mt-12 flex justify-end">
          <Link href={`/trips/1`} className="btn btn-secondary px-10 py-4 group">
            Preview Full Itinerary
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

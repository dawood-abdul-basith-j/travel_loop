'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { 
  CheckSquare, 
  Square, 
  Plus, 
  Trash2, 
  Briefcase, 
  Smartphone, 
  FileText,
  Filter
} from 'lucide-react';

interface PackingItem {
  id: string;
  name: string;
  category: string;
  isPacked: boolean;
}

export default function PackingChecklist() {
  const [items, setItems] = useState<PackingItem[]>([
    { id: '1', name: 'Passport & Visa', category: 'Documents', isPacked: true },
    { id: '2', name: 'Flight Tickets', category: 'Documents', isPacked: false },
    { id: '3', name: 'T-shirts (x5)', category: 'Clothing', isPacked: true },
    { id: '4', name: 'Walking Shoes', category: 'Clothing', isPacked: false },
    { id: '5', name: 'Power Bank', category: 'Electronics', isPacked: false },
    { id: '6', name: 'Camera', category: 'Electronics', isPacked: true },
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, isPacked: !item.isPacked } : item));
  };

  const categories = Array.from(new Set(items.map(i => i.category)));
  const progress = Math.round((items.filter(i => i.isPacked).length / items.length) * 100);

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto animate-in">
        <header className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-3xl mb-2 flex items-center gap-3">
                <Briefcase className="text-secondary" />
                Packing Checklist
              </h1>
              <p className="text-text-muted">Trip to <span className="text-secondary font-bold">European Adventure</span></p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-secondary">{progress}%</p>
              <p className="text-xs text-text-muted uppercase tracking-widest">Progress</p>
            </div>
          </div>
          <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary transition-all duration-700" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>

        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Add new item to checklist..." 
              className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary py-1.5 px-4 text-sm">
              <Plus size={16} /> Add
            </button>
          </div>
          <button className="btn btn-ghost">
            <Filter size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {categories.map(category => (
            <div key={category} className="glass-card">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                {category === 'Documents' && <FileText size={18} className="text-accent" />}
                {category === 'Electronics' && <Smartphone size={18} className="text-accent" />}
                {category === 'Clothing' && <Briefcase size={18} className="text-accent" />}
                {category}
              </h2>
              <div className="flex flex-col gap-2">
                {items.filter(i => i.category === category).map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                      item.isPacked ? 'bg-primary/5 opacity-60' : 'hover:bg-surface-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.isPacked ? (
                        <CheckSquare className="text-secondary" size={20} />
                      ) : (
                        <Square className="text-text-muted" size={20} />
                      )}
                      <span className={item.isPacked ? 'line-through text-text-muted' : 'font-medium'}>
                        {item.name}
                      </span>
                    </div>
                    <button className="p-2 text-text-muted hover:text-accent opacity-0 group-hover:opacity-100 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between gap-4">
          <button className="btn btn-ghost flex-1">Reset All Items</button>
          <button className="btn btn-secondary flex-1">Share Checklist</button>
        </div>
      </div>
    </MainLayout>
  );
}

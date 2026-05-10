'use client';

import MainLayout from '@/components/MainLayout';
import { 
  Users, 
  Map, 
  TrendingUp, 
  Activity, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const usageData = [
  { name: 'Mon', users: 400, trips: 240 },
  { name: 'Tue', users: 300, trips: 139 },
  { name: 'Wed', users: 200, trips: 980 },
  { name: 'Thu', users: 278, trips: 390 },
  { name: 'Fri', users: 189, trips: 480 },
  { name: 'Sat', users: 239, trips: 380 },
  { name: 'Sun', users: 349, trips: 430 },
];

const topCities = [
  { name: 'Tokyo', count: 120, color: '#0f4c5c' },
  { name: 'Paris', count: 98, color: '#e9c46a' },
  { name: 'Rome', count: 86, color: '#e76f51' },
  { name: 'Bali', count: 72, color: '#3a506b' },
  { name: 'London', count: 65, color: '#1b6d85' },
];

export default function AdminDashboard() {
  return (
    <MainLayout>
      <div className="animate-in">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-2 flex items-center gap-3">
              <ShieldCheck className="text-secondary" />
              Administrative Oversight
            </h1>
            <p className="text-text-muted">Platform analytics and user engagement metrics</p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card py-2 px-6 flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Total Users</p>
                <p className="text-xl font-bold">12.5k</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                <Users size={20} />
              </div>
            </div>
            <div className="glass-card py-2 px-6 flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Total Trips</p>
                <p className="text-xl font-bold">45.2k</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Map size={20} />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Chart */}
          <div className="col-span-8 glass-card">
            <h2 className="text-xl mb-8 flex items-center gap-2">
              <Activity className="text-secondary" size={20} />
              User Engagement (Weekly)
            </h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#8d99ae" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#8d99ae" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    contentStyle={{ background: '#1c2541', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#edf2f4' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#e9c46a" 
                    strokeWidth={4} 
                    dot={{ fill: '#e9c46a', r: 4 }} 
                    activeDot={{ r: 8, stroke: '#0b132b', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="trips" 
                    stroke="#0f4c5c" 
                    strokeWidth={4} 
                    dot={{ fill: '#0f4c5c', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Destinations */}
          <div className="col-span-4 glass-card">
            <h2 className="text-xl mb-8 flex items-center gap-2">
              <TrendingUp className="text-accent" size={20} />
              Top Destinations
            </h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCities} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    stroke="#edf2f4" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    width={80}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ background: '#1c2541', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {topCities.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="col-span-12 glass-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl">Platform Trends</h2>
              <button className="text-sm text-text-muted hover:text-secondary flex items-center gap-1">
                Download Report <ChevronRight size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-glass-border text-text-muted uppercase text-[10px] tracking-widest">
                    <th className="pb-4 font-bold">Metric</th>
                    <th className="pb-4 font-bold">Current</th>
                    <th className="pb-4 font-bold">Growth</th>
                    <th className="pb-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { metric: 'New User Signups', current: '1,240', growth: '+12%', status: 'Healthy' },
                    { metric: 'Itinerary Completions', current: '3,500', growth: '+8%', status: 'Steady' },
                    { metric: 'Budget Overages', current: '14%', growth: '-2%', status: 'Improving' },
                    { metric: 'Shared Trip Reach', current: '125k', growth: '+24%', status: 'Explosive' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-glass-border/50 group hover:bg-white/5 transition-all">
                      <td className="py-4 font-medium">{row.metric}</td>
                      <td className="py-4">{row.current}</td>
                      <td className="py-4 text-green-400 font-bold">{row.growth}</td>
                      <td className="py-4">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary-light text-[10px] font-bold uppercase">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

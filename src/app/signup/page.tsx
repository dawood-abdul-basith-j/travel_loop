'use client';

import Link from 'next/link';
import { User, Mail, Phone, MapPin, Info, ArrowRight } from 'lucide-react';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="glass-card w-full max-w-2xl p-10 animate-in">
        <div className="brand text-3xl text-center mb-8">
          <span className="text-secondary">Travel</span>oop
        </div>
        <h1 className="text-2xl text-center mb-2">Create Account</h1>
        <p className="text-text-muted text-center mb-10">Join our community of world travelers</p>
        
        <form className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">First Name</label>
            <input type="text" placeholder="John" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Phone Number</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">City</label>
            <input type="text" placeholder="New York" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Country</label>
            <input type="text" placeholder="United States" className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all" />
          </div>
          
          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Additional Information</label>
            <textarea rows={3} placeholder="Tell us about your travel style..." className="w-full bg-surface border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-secondary transition-all"></textarea>
          </div>
          
          <button type="submit" className="col-span-2 btn btn-primary py-4 mt-4 group">
            Register User
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-center mt-8 text-sm text-text-muted">
          Already have an account? <Link href="/login" className="text-secondary font-bold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="glass-card w-full max-w-md p-10 animate-in">
        <div className="brand text-3xl text-center mb-8">
          <span className="text-secondary">Travel</span>oop
        </div>
        <h1 className="text-2xl text-center mb-2">Welcome Back</h1>
        <p className="text-text-muted text-center mb-8">Enter your details to access your trips</p>
        
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input type="email" placeholder="name@example.com" className="w-full bg-surface border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-secondary transition-all" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input type="password" placeholder="••••••••" className="w-full bg-surface border border-glass-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-secondary transition-all" />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary w-full py-4 mt-4 group">
            Login to Traveloop
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-center mt-8 text-sm text-text-muted">
          Don't have an account? <Link href="/signup" className="text-secondary font-bold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

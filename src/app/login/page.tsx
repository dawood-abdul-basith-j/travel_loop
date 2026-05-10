'use client';

import Link from 'next/link';
import { Plane, Lock, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="auth-bg">
      <div className="auth-card glass animate-in">
        <div className="logo-placeholder">
          <Plane size={40} />
        </div>
        <h1 className="text-3xl mb-2">Welcome Back</h1>
        <p className="text-text-muted mb-8">Login to your Traveloop account</p>

        <form className="text-left flex flex-col gap-6">
          <div className="relative">
            <label htmlFor="username">Username</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input 
                id="username"
                type="text" 
                placeholder="Enter your username" 
                className="glass-input pl-12"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                className="glass-input pl-12"
              />
            </div>
          </div>

          <button type="button" className="btn btn-primary w-full mt-4 py-4 text-lg">
            Login
          </button>
        </form>

        <p className="mt-8 text-sm text-text-muted">
          Don't have an account? {' '}
          <Link href="/signup" className="text-secondary hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

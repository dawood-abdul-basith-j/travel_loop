'use client';

import Link from 'next/link';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Info,
  ArrowRight
} from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="auth-bg">
      <div className="auth-card auth-card-wide glass animate-in">
        <div className="logo-placeholder">
          <Globe size={40} />
        </div>
        <h1 className="text-3xl mb-2">Create Account</h1>
        <p className="text-text-muted mb-8">Join the Traveloop community today</p>

        <form className="text-left">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName">First Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="firstName" type="text" placeholder="John" className="glass-input pl-12" />
              </div>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="lastName" type="text" placeholder="Doe" className="glass-input pl-12" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="email" type="email" placeholder="john@example.com" className="glass-input pl-12" />
              </div>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="glass-input pl-12" />
              </div>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="city" type="text" placeholder="New York" className="glass-input pl-12" />
              </div>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <div className="relative">
                <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input id="country" type="text" placeholder="United States" className="glass-input pl-12" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="bio">Additional Information</label>
            <div className="relative">
              <Info size={18} className="absolute left-4 top-4 text-text-muted" />
              <textarea 
                id="bio" 
                placeholder="Tell us about your travel style..." 
                className="glass-input pl-12 h-32 resize-none"
              ></textarea>
            </div>
          </div>

          <button type="button" className="btn btn-primary w-full mt-8 py-4 text-lg group">
            Register Account
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-sm text-text-muted">
          Already have an account? {' '}
          <Link href="/login" className="text-secondary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

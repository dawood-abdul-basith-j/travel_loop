'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Map, 
  Search, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Users, 
  Settings,
  PlusCircle
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/dashboard' },
    { name: 'My Trips', icon: Map, href: '/trips' },
    { name: 'Search', icon: Search, href: '/search' },
    { name: 'Community', icon: Users, href: '/community' },
  ];

  const utilityItems = [
    { name: 'Checklist', icon: CheckSquare, href: '/checklist' },
    { name: 'Journal', icon: FileText, href: '/journal' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <aside className="sidebar glass">
      <div className="brand text-2xl tracking-tight mb-8">
        <span className="text-secondary">Travel</span>oop
      </div>

      <Link href="/trips/create" className="btn btn-primary w-full mb-8">
        <PlusCircle size={20} />
        Plan New Trip
      </Link>

      <nav className="flex flex-col gap-2">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Main Menu</p>
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              pathname === item.href 
                ? 'bg-primary text-white' 
                : 'text-text-muted hover:bg-surface-hover hover:text-text'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}

        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-8 mb-2">Utilities</p>
        {utilityItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              pathname === item.href 
                ? 'bg-primary text-white' 
                : 'text-text-muted hover:bg-surface-hover hover:text-text'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-glass-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-surface-hover border border-glass-border flex items-center justify-center font-bold text-secondary">
            DB
          </div>
          <div>
            <p className="text-sm font-bold">Dawood Basith</p>
            <p className="text-xs text-text-muted">Premium Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import { Home, MessageCircle, LayoutDashboard, Network, NotebookPen, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/chat', label: 'Chat', icon: MessageCircle },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/mind-map', label: 'Mind-Map', icon: Network },
  { to: '/notes', label: 'Notes', icon: NotebookPen },
  { to: '/settings', label: 'Settings', icon: Settings }
];

function NavSidebar() {
  return (
    <aside className="glass-panel hidden w-72 flex-col rounded-2xl p-4 lg:flex">
      <h1 className="px-3 text-lg font-bold text-white">No Workspace</h1>
      <p className="px-3 pt-1 text-sm text-slate-400">Focus-driven AI productivity studio</p>

      <nav className="mt-6 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? 'bg-indigo-500/20 text-indigo-200 ring-1 ring-indigo-500/40'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default NavSidebar;

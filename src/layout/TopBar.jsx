import { Bell, Search } from 'lucide-react';

function TopBar() {
  return (
    <header className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3">
      <label className="flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
        <Search size={16} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search notes, chat, and dashboards..."
          className="w-full bg-transparent outline-none placeholder:text-slate-500"
        />
      </label>

      <button className="ml-4 rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white">
        <Bell size={16} />
      </button>
    </header>
  );
}

export default TopBar;

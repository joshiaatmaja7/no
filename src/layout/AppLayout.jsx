import { Outlet } from 'react-router-dom';
import NavSidebar from './NavSidebar';
import TopBar from './TopBar';

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 p-3 text-slate-100 sm:p-5">
      <div className="mx-auto flex max-w-7xl gap-4">
        <NavSidebar />
        <main className="flex-1 space-y-4">
          <TopBar />
          <section className="glass-panel min-h-[calc(100vh-9rem)] rounded-2xl p-4 sm:p-6">
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

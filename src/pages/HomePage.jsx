import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-slate-900 p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">AI Workspace</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Build, think, and ship from one clean command center.</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Navigate between chat, analytics, graph thinking, and writing workflows without losing context.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/chat" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
            Start Chatting
          </Link>
          <Link to="/dashboard" className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800">
            Open Dashboard
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;

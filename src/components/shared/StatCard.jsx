import { motion } from 'framer-motion';

function StatCard({ label, value, hint }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-2xl p-5"
    >
      <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-100">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </motion.article>
  );
}

export default StatCard;

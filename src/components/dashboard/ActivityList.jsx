const items = [
  'Summarized 4 chat threads',
  'Updated 2 roadmap notes',
  'Mind-map synced with latest tags',
  'Dashboard metrics refreshed'
];

function ActivityList() {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Recent Activity</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;

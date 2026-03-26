import { useAppContext } from '../context/AppContext';

const toggles = [
  { key: 'compactMode', label: 'Compact interface density' },
  { key: 'showTips', label: 'Show productivity tips' },
  { key: 'autoSaveNotes', label: 'Auto-save note drafts' }
];

function SettingsPage() {
  const { settings, setSettings } = useAppContext();

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="mx-auto max-w-2xl space-y-3">
      <h2 className="text-xl font-semibold">Settings</h2>
      <div className="space-y-2">
        {toggles.map((item) => (
          <button
            key={item.key}
            onClick={() => toggle(item.key)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-left hover:bg-slate-800"
          >
            <span className="text-sm text-slate-200">{item.label}</span>
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${
                settings[item.key] ? 'bg-emerald-500/20 text-emerald-200' : 'bg-slate-700 text-slate-300'
              }`}
            >
              {settings[item.key] ? 'On' : 'Off'}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default SettingsPage;

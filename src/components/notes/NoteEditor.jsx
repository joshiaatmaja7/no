import { useEffect, useState } from 'react';

function NoteEditor({ selectedNote, onSave }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    setTitle(selectedNote?.title ?? '');
    setBody(selectedNote?.body ?? '');
  }, [selectedNote]);

  if (!selectedNote) {
    return <div className="rounded-2xl border border-dashed border-slate-700 p-5 text-sm text-slate-400">Choose a note to start editing.</div>;
  }

  return (
    <div className="space-y-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-lg font-semibold outline-none"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={14}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none"
      />
      <button
        onClick={() => onSave(selectedNote.id, { title, body })}
        className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Save Note
      </button>
    </div>
  );
}

export default NoteEditor;

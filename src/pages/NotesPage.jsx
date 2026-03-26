import { useMemo, useState } from 'react';
import NoteEditor from '../components/notes/NoteEditor';
import { useAppContext } from '../context/AppContext';

function NotesPage() {
  const { notes, addNote, updateNote } = useAppContext();
  const [selectedId, setSelectedId] = useState(notes[0]?.id ?? null);

  const selectedNote = useMemo(() => notes.find((note) => note.id === selectedId), [notes, selectedId]);

  return (
    <section className="grid gap-4 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-3">
        <button
          onClick={() => addNote('Untitled note', 'Write your thoughts...')}
          className="w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          + New Note
        </button>
        <div className="max-h-[65vh] space-y-2 overflow-y-auto">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setSelectedId(note.id)}
              className={`w-full rounded-xl border px-3 py-2 text-left ${
                selectedId === note.id
                  ? 'border-indigo-500 bg-indigo-500/10'
                  : 'border-slate-800 bg-slate-900 hover:bg-slate-800'
              }`}
            >
              <p className="truncate text-sm font-semibold">{note.title}</p>
              <p className="mt-1 line-clamp-2 text-xs text-slate-400">{note.body}</p>
            </button>
          ))}
        </div>
      </aside>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
        <NoteEditor selectedNote={selectedNote} onSave={updateNote} />
      </div>
    </section>
  );
}

export default NotesPage;

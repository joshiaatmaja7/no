import { useState } from 'react';
import { Send } from 'lucide-react';

function ChatInput({ onSend }) {
  const [value, setValue] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={submit} className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 p-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask anything..."
        className="h-11 flex-1 rounded-xl bg-slate-950 px-3 text-sm outline-none placeholder:text-slate-500"
      />
      <button
        type="submit"
        className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        <Send size={16} /> Send
      </button>
    </form>
  );
}

export default ChatInput;

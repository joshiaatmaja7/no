function ChatMessage({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30'
            : 'bg-slate-800/90 text-slate-100 ring-1 ring-slate-700'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default ChatMessage;

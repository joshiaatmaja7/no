import { useAppContext } from '../context/AppContext';
import ChatMessage from '../components/chat/ChatMessage';
import ChatInput from '../components/chat/ChatInput';

function ChatPage() {
  const { messages, addMessage } = useAppContext();

  const handleSend = (input) => {
    addMessage('user', input);
    addMessage('assistant', `Got it — I captured: "${input}". I can turn this into tasks, notes, or a plan.`);
  };

  return (
    <section className="mx-auto flex h-[75vh] max-w-4xl flex-col">
      <div className="flex-1 space-y-3 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </section>
  );
}

export default ChatPage;

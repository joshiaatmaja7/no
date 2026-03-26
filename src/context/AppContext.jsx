import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialGraphNodes, initialMessages, initialNotes } from '../utils/defaultData';

const AppContext = createContext(null);

// Context is chosen instead of Redux to keep state handling simple,
// lightweight, and scalable for medium-sized feature-driven UI modules.
export function AppProvider({ children }) {
  const [messages, setMessages] = useLocalStorage('app_messages', initialMessages);
  const [notes, setNotes] = useLocalStorage('app_notes', initialNotes);
  const [graphNodes, setGraphNodes] = useLocalStorage('app_graph_nodes', initialGraphNodes);
  const [settings, setSettings] = useLocalStorage('app_settings', {
    compactMode: false,
    showTips: true,
    autoSaveNotes: true
  });

  const addMessage = (role, content) => {
    const newMessage = { id: crypto.randomUUID(), role, content };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addNote = (title, body) => {
    const newNote = {
      id: crypto.randomUUID(),
      title,
      body,
      updatedAt: new Date().toISOString()
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const updateNote = (id, updates) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString() } : note
      )
    );
  };

  const value = useMemo(
    () => ({
      messages,
      notes,
      graphNodes,
      settings,
      setSettings,
      setGraphNodes,
      addMessage,
      addNote,
      updateNote
    }),
    [messages, notes, graphNodes, settings]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}

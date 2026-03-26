export const initialMessages = [
  {
    id: 'm-1',
    role: 'assistant',
    content: 'Hey! I can help you shape ideas, summarize notes, or generate action plans.'
  }
];

export const initialNotes = [
  {
    id: 'n-1',
    title: 'Sprint priorities',
    body: 'Polish onboarding, test upload flow, and improve dashboard readability.',
    updatedAt: new Date().toISOString()
  },
  {
    id: 'n-2',
    title: 'Mind-map anchors',
    body: 'Core themes: product vision, users, metrics, experiments.',
    updatedAt: new Date().toISOString()
  }
];

export const initialGraphNodes = [
  { id: 'Product', x: 20, y: 24, size: 120 },
  { id: 'Research', x: 58, y: 18, size: 90 },
  { id: 'Tasks', x: 80, y: 40, size: 110 },
  { id: 'Notes', x: 50, y: 62, size: 130 },
  { id: 'Ideas', x: 26, y: 70, size: 88 }
];

export const graphEdges = [
  ['Product', 'Research'],
  ['Product', 'Tasks'],
  ['Product', 'Notes'],
  ['Notes', 'Ideas'],
  ['Tasks', 'Ideas']
];

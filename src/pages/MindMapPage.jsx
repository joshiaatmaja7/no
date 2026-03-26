import GraphCanvas from '../components/mindmap/GraphCanvas';
import { useAppContext } from '../context/AppContext';

function MindMapPage() {
  const { graphNodes } = useAppContext();

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Mind-Map Graph</h2>
        <p className="text-sm text-slate-400">Obsidian-style map view for connected ideas and workstreams.</p>
      </div>
      <GraphCanvas nodes={graphNodes} />
    </section>
  );
}

export default MindMapPage;

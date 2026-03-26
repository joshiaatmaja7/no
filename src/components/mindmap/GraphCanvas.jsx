import { graphEdges } from '../../utils/defaultData';

function GraphCanvas({ nodes }) {
  const map = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl border border-slate-800 bg-grid bg-[size:24px_24px] bg-slate-950 p-4">
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        {graphEdges.map(([from, to]) => {
          const a = map[from];
          const b = map[to];
          if (!a || !b) return null;
          return (
            <line
              key={`${from}-${to}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="rgba(99,102,241,0.35)"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <button
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-4 py-2 text-xs font-semibold text-indigo-100 shadow-lg shadow-indigo-900/40 backdrop-blur-sm"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.id}
        </button>
      ))}
    </div>
  );
}

export default GraphCanvas;

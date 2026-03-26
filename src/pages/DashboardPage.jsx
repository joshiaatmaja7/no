import StatCard from '../components/shared/StatCard';
import ActivityList from '../components/dashboard/ActivityList';
import { useAppContext } from '../context/AppContext';

function DashboardPage() {
  const { messages, notes, graphNodes } = useAppContext();

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Chat Messages" value={messages.length} hint="Across all conversations" />
        <StatCard label="Notes" value={notes.length} hint="Saved in local workspace" />
        <StatCard label="Graph Nodes" value={graphNodes.length} hint="Knowledge clusters tracked" />
        <StatCard label="Focus Score" value="87%" hint="Consistency for this week" />
      </div>
      <ActivityList />
    </section>
  );
}

export default DashboardPage;

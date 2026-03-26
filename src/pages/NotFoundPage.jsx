import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="flex h-[65vh] flex-col items-center justify-center gap-3 text-center">
      <p className="text-sm uppercase tracking-wider text-slate-400">404</p>
      <h2 className="text-2xl font-bold">Page not found</h2>
      <Link to="/" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
        Back Home
      </Link>
    </section>
  );
}

export default NotFoundPage;

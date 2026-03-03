export function Card({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>{title && <h3 className="font-semibold mb-4">{title}</h3>}{children}</div>;
}

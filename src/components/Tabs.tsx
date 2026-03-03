import { useState } from "react";
export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return <div><div className="flex border-b">{tabs.map((t, i) => <button key={i} onClick={() => setActive(i)} className={`px-4 py-2 ${i === active ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"}`}>{t.label}</button>)}</div><div className="p-4">{tabs[active]?.content}</div></div>;
}

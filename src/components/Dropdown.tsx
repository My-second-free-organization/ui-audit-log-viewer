import { useState } from "react";
export function Dropdown({ trigger, items }: { trigger: React.ReactNode; items: { label: string; onClick: () => void }[] }) {
  const [open, setOpen] = useState(false);
  return <div className="relative"><div onClick={() => setOpen(!open)}>{trigger}</div>{open && <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">{items.map((item, i) => <button key={i} onClick={() => { item.onClick(); setOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-gray-50">{item.label}</button>)}</div>}</div>;
}

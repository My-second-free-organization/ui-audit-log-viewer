interface Column<T> { key: keyof T; header: string; render?: (value: any, row: T) => React.ReactNode; }
export function Table<T extends Record<string, any>>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <table className="w-full"><thead><tr>{columns.map(c => <th key={String(c.key)} className="text-left p-3 border-b font-medium text-sm text-gray-500">{c.header}</th>)}</tr></thead>
    <tbody>{data.map((row, i) => <tr key={i} className="border-b hover:bg-gray-50">{columns.map(c => <td key={String(c.key)} className="p-3">{c.render ? c.render(row[c.key], row) : String(row[c.key])}</td>)}</tr>)}</tbody></table>
  );
}

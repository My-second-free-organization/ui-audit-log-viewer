import { cn } from "../utils/cn";
const colors: Record<string, string> = { success: "bg-green-100 text-green-800", warning: "bg-yellow-100 text-yellow-800", error: "bg-red-100 text-red-800", info: "bg-blue-100 text-blue-800" };
export function Badge({ variant = "info", children }: { variant?: string; children: React.ReactNode }) {
  return <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", colors[variant])}>{children}</span>;
}

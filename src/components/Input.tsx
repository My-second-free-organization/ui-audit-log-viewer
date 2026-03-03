import { forwardRef } from "react";
import { cn } from "../utils/cn";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }>(({ label, error, className, ...props }, ref) => (
  <div>
    {label && <label className="block text-sm font-medium mb-1">{label}</label>}
    <input ref={ref} className={cn("w-full rounded-lg border px-3 py-2", error ? "border-red-500" : "border-gray-300", className)} {...props} />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
));

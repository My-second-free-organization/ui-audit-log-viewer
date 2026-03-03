export function Avatar({ name, src, size = "md" }: { name: string; src?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-14 h-14 text-lg" };
  if (src) return <img src={src} alt={name} className={`${sizes[size]} rounded-full`} />;
  return <div className={`${sizes[size]} rounded-full bg-blue-500 text-white flex items-center justify-center font-medium`}>{name.charAt(0).toUpperCase()}</div>;
}

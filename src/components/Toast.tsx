export function Toast({ message, type = "info" }: { message: string; type?: "info" | "success" | "error" }) {
  const bg = { info: "bg-blue-500", success: "bg-green-500", error: "bg-red-500" };
  return <div className={`${bg[type]} text-white px-4 py-3 rounded-lg shadow-lg`}>{message}</div>;
}

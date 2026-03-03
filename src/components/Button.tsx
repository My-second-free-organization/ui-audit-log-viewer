import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva("inline-flex items-center justify-center rounded-lg font-medium transition-colors", {
  variants: {
    variant: { primary: "bg-blue-600 text-white hover:bg-blue-700", secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200", danger: "bg-red-600 text-white hover:bg-red-700", ghost: "hover:bg-gray-100" },
    size: { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({ className, variant, size, loading, children, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} disabled={loading} {...props}>{loading ? "Loading..." : children}</button>;
}

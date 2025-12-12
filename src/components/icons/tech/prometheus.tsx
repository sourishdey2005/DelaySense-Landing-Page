import { cn } from "@/lib/utils";

export function IconPrometheus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5c-58.2 0-105.5 47.3-105.5 105.5c0 42.9 25.7 79.6 62.1 95.8l-19.1-66.2H22.5c0-58.2 47.3-105.5 105.5-105.5S233.5 69.8 233.5 128h-42.9l-19.1 66.2c36.4-16.2 62.1-52.9 62.1-95.8C233.5 69.8 186.2 22.5 128 22.5zm0 159.9c-24.3 0-44-19.7-44-44s19.7-44 44-44s44 19.7 44 44s-19.7 44-44 44z"
      />
    </svg>
  );
}

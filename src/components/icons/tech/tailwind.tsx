import { cn } from "@/lib/utils";

export function IconTailwind({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5c-58.4 0-105.5 47.1-105.5 105.5s47.1 105.5 105.5 105.5 105.5-47.1 105.5-105.5S186.4 22.5 128 22.5zM167 122c-15.5 15.5-31 31-46.5 46.5-10.3-10.3-20.6-20.6-31-31 15.5-15.5 31-31 46.5-46.5 10.3 10.3 20.7 20.7 31 31z"
      />
    </svg>
  );
}

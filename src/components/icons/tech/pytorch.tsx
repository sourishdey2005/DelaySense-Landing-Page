import { cn } from "@/lib/utils";

export function IconPytorch({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <circle fill="currentColor" cx="128" cy="128" r="106.5" />
      <g fill="white">
        <circle cx="128" cy="56" r="16" />
        <path d="M192 104a24 24 0 1 0 0 48a24 24 0 0 0 0-48zm-24 24a24 24 0 1 0 48 0a24 24 0 0 0-48 0z" />
        <circle cx="128" cy="200" r="16" />
      </g>
    </svg>
  );
}

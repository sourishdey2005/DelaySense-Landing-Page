import { cn } from "@/lib/utils";

export function IconTimescaledb({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5a105.5 105.5 0 1 0 0 211a105.5 105.5 0 0 0 0-211zM128 212a86.5 86.5 0 1 1 0-173a86.5 86.5 0 0 1 0 173z"
      />
      <path
        fill="currentColor"
        d="M136.2 128H87.1l-14 24h77.1zM113.1 104h52.8l14-24H99.1z"
      />
    </svg>
  );
}

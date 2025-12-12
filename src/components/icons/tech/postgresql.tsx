import { cn } from "@/lib/utils";

export function IconPostgresql({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5C68.4 22.5 21.5 68.4 21.5 128c0 38.5 21 72.1 52.2 90.9v-52.7h-26v-26.6h26v-20.9c0-26 15.6-40.3 39.2-40.3c11.2 0 20.8 1.7 20.8 1.7v23.2h-13.8c-12.6 0-15.1 6-15.1 14.8v19.5h26.6l-3.5 26.6h-23.1V219c31.2-18.7 52.2-52.4 52.2-91c0-59.6-46.9-105.5-106.5-105.5z"
      />
    </svg>
  );
}

import { cn } from "@/lib/utils";

export function IconNextjs({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <circle fill="currentColor" cx="128" cy="128" r="106.5" />
      <path
        fill="white"
        d="M165.7 89.2h-32.9v72.3l-14.3 11.1v-83.4H85.7v87.7h13.9l66.1-51.5V89.2z"
      />
    </svg>
  );
}

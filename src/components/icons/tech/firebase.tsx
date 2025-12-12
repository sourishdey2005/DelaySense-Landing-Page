import { cn } from "@/lib/utils";

export function IconFirebase({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M51.27 190.93L128 34.13l-22.07 101.47z"
      />
      <path
        fill="currentColor"
        d="M51.27 190.93l74.93-35.33l-47.33 56.53z"
      />
      <path
        fill="currentColor"
        d="m168.4 46.8l-40.4 88.8 46.4 80.8c52-24.4 64.8-93.2 14.8-132.4"
      />
    </svg>
  );
}

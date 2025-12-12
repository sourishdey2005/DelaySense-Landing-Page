import { cn } from "@/lib/utils";

export function IconTerraform({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.5 22.5v79.8L102.3 22.5H22.5zm0 97.2v79.8h79.8L22.5 119.7zM119.7 22.5l79.8 138.2L233.5 22.5h-113.8z"
      />
    </svg>
  );
}

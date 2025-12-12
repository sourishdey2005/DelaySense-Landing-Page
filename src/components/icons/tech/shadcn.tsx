import { cn } from "@/lib/utils";

export function IconShadcn({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5L21.5 83.2v95.3l39.8 23V119l-39.8-23.1V91.6L128 45.1l66.7 46.5v11.6l-39.8 23.1v82.4l39.8-23V83.2L128 22.5z"
      />
    </svg>
  );
}

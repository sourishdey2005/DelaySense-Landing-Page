import { cn } from "@/lib/utils";

export function IconGrafana({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5C68.4 22.5 21.5 68.4 21.5 128c0 52.3 37.1 96.1 86.1 104.5V128H21.5c0-26.1 10.6-49.8 27.8-67.1zM149.3 22.5v105.5h85.2c-8.4-49-52.2-86.1-104.6-86.1-8.1 0-16.1.9-23.7 2.6A105.1 105.1 0 0 1 149.3 22.5zM149.3 149.9v83.6c50-7.3 87.2-50.6 87.2-101h-87.2v17.4z"
      />
    </svg>
  );
}

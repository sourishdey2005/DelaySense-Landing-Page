import { cn } from "@/lib/utils";

export function IconPython({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <g fill="currentColor">
        <path d="M128 22.5c-44.1 0-79.8 35.8-79.8 79.8v10.7H88v-10.7c0-22 17.9-39.8 39.8-39.8s39.8 17.9 39.8 39.8v21.3H88v39.8h101.2V128c0-44.1-35.8-79.8-71-79.8z" />
        <path d="M128 233.5c44.1 0 79.8-35.8 79.8-79.8v-10.7H168v10.7c0 22-17.9 39.8-39.8 39.8s-39.8-17.9-39.8-39.8v-21.3h81.1v-39.8H66.8V128c0 44.1 35.8 79.8 71 79.8z" />
      </g>
    </svg>
  );
}

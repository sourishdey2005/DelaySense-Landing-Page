import { cn } from "@/lib/utils";

export function IconRedis({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5C68.4 22.5 21.5 68.4 21.5 128s46.9 105.5 106.5 105.5S234.5 187.6 234.5 128 187.6 22.5 128 22.5zm0 188.7c-46 0-83.2-37.3-83.2-83.2s37.2-83.2 83.2-83.2 83.2 37.2 83.2 83.2-37.2 83.2-83.2 83.2z"
      />
      <path
        fill="currentColor"
        d="M117 76.5h43.3v15.6H132.6v91.4h-15.6V76.5z"
      />
    </svg>
  );
}

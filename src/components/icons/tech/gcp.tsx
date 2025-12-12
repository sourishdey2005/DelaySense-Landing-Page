import { cn } from "@/lib/utils";

export function IconGcp({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M127.5 128.5a64 64 0 0 1-64-64h64v64z"
      />
      <path
        fill="#34A853"
        d="M127.5 128.5a64 64 0 0 0 64-64h-64v64z"
      />
      <path
        fill="#EA4335"
        d="M127.5 128.5a64 64 0 0 1 64 64h-64v-64z"
      />
      <path
        fill="#FBBC04"
        d="M127.5 128.5a64 64 0 0 0-64 64h64v-64z"
      />
      <path
        fill="currentColor"
        d="M127.5 22.5c-58.5 0-106 47.5-106 106s47.5 106 106 106c58.5 0 106-47.5 106-106s-47.5-106-106-106zm0 184a78 78 0 1 1 0-156a78 78 0 0 1 0 156z"
      />
    </svg>
  );
}

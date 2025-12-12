import { cn } from "@/lib/utils";

export function IconScikitlearn({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="#F7931E"
        d="M234.5 128c0-30.8-25-55.8-55.8-55.8s-55.8 25-55.8 55.8 25 55.8 55.8 55.8 55.8-25 55.8-55.8"
      />
      <path
        fill="#34A853"
        d="M128.8 128c0-30.8-25-55.8-55.8-55.8S17.2 97.2 17.2 128s25 55.8 55.8 55.8 55.8-25 55.8-55.8"
      />
      <path
        fill="#4285F4"
        d="M128 72.2c15.4 0 27.9 12.5 27.9 27.9s-12.5 27.9-27.9 27.9-27.9-12.5-27.9-27.9 12.5-27.9 27.9-27.9"
      />
    </svg>
  );
}

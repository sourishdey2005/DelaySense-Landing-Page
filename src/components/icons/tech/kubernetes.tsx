import { cn } from "@/lib/utils";

export function IconKubernetes({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5C68.4 22.5 21.5 68.4 21.5 128s46.9 105.5 106.5 105.5s106.5-47.4 106.5-105.5S187.6 22.5 128 22.5zm0 188.7c-46 0-83.2-37.3-83.2-83.2c0-46 37.2-83.2 83.2-83.2s83.2 37.2 83.2 83.2c0 45.9-37.2 83.2-83.2 83.2z"
      />
      <path
        fill="currentColor"
        d="M128 66.8l44.3 22.6v53.2l-44.3 22.6l-44.3-22.6V89.4zm0 29.5l22.1-11.3l-22.1-11.3l-22.2 11.3zM100 128.4l28 14.3v-28.6l-28-14.3z"
      />
    </svg>
  );
}

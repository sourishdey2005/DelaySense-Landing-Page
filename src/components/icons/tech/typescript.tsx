import { cn } from "@/lib/utils";

export function IconTypescript({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path fill="#3178C6" d="M0 0h256v256H0z" />
      <path
        fill="white"
        d="M120.4 87.2V200h18.2v-21.3h31.7v-15.8h-31.7V87.2zm48.8 82.5c7.3 4.2 16.3 7.3 26.5 7.3c15.2 0 24.4-6.3 24.4-14.8c0-10.4-8.8-13.8-26.2-19.8c-21-7.3-34.9-15.5-34.9-35.8c0-18.1 14.1-31.5 35.8-31.5c12.5 0 23.4 2.9 31.5 6.5l-6.8 14.3c-6-2.9-13.5-5.5-22.7-5.5c-11.8 0-19.3 5.5-19.3 12.8c0 9.1 7.8 12.3 25.2 18.8c21.2 8.1 36 16.8 36 37.3c0 21.2-15.3 34.4-39.2 34.4c-15.5 0-27.5-4-35.8-8.8z"
      />
    </svg>
  );
}

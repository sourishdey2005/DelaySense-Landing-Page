import { cn } from "@/lib/utils";

export function IconDocker({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M238.3 121.2c-2.3-5.9-9.1-8-14.7-6.2l-19.4 6.2V79c0-6-3-11.5-7.8-15.3l-28-21.9c-5.8-4.5-14.3-4.2-19.7.9-2.3 2.1-3.9 5-4.5 8.1H51.8c-2.6 0-5.1.7-7.2 1.9-5.1 3.2-8.3 8.7-8.3 14.8v91.3c0 .1 0 .2.1.3 5.4 3.3 11.5 5.5 18 6.5l.3.1h131.8c.1 0 .2 0 .3-.1 21.6-4.2 37.8-23.2 37.8-45.7 0-7.3-1.8-14.3-5.2-20.5zM172.5 48.7l28 21.9v35.8l-28-8.8zm-59.2 8.6h22.6v12.2h-22.6zm0 24.4h22.6v12.2h-22.6zm0 24.4h22.6v12.2h-22.6zm-24.4-24.4h22.6v12.2H88.9zm0 24.4h22.6v12.2H88.9zm-24.4-24.4H87v12.2H64.5zm0 24.4H87v12.2H64.5z"
      />
    </svg>
  );
}

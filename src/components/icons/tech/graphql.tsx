import { cn } from "@/lib/utils";

export function IconGraphql({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 22.5L24.8 70.3v95.4L128 213.5l103.2-47.8V70.3L128 22.5zm82.6 132.8l-82.6 38.2l-82.6-38.2V80.8l82.6-38.2l82.6 38.2v74.5z"
      />
      <circle fill="currentColor" cx="128" cy="46.4" r="16.1" />
      <circle fill="currentColor" cx="50.7" cy="80.8" r="16.1" />
      <circle fill="currentColor" cx="205.3" cy="80.8" r="16.1" />
      <circle fill="currentColor" cx="50.7" cy="155.3" r="16.1" />
      <circle fill="currentColor" cx="205.3" cy="155.3" r="16.1" />
      <circle fill="currentColor" cx="128" cy="189.7" r="16.1" />
      <path
        stroke="currentColor"
        strokeWidth="10"
        d="M128 189.7v-34.4m0-74.5V46.4m-77.3 34.4l38.7-22.3m77.2 0l-38.7 22.3m-38.7 96.8l38.7-22.4m-38.7-42.1h77.3"
      />
    </svg>
  );
}

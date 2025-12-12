import { cn } from "@/lib/utils";

export function IconReact({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23 23 20.46"
      className={cn(className)}
      {...props}
    >
      <circle r="2.05" fill="currentColor" />
      <g stroke="currentColor" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

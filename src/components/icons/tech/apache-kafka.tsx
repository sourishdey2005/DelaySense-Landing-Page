import { cn } from "@/lib/utils";

export function IconApacheKafka({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M173.34 199.33L128 128l45.33-71.33h32L149.34 128l56 71.33zM96 199.33L50.67 128 96 56.67h32L82.67 128l45.33 71.33z"
      />
    </svg>
  );
}

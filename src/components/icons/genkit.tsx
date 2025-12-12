import { cn } from "@/lib/utils";

export function GenkitIcon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn(className)}
      {...props}
      dangerouslySetInnerHTML={{
        __html: `
          <defs>
            <linearGradient id="genkit-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop stop-color="#4285F4" offset="0%"/>
              <stop stop-color="#9B72CB" offset="40%"/>
              <stop stop-color="#D96570" offset="60%"/>
              <stop stop-color="#F2A60C" offset="100%"/>
            </linearGradient>
          </defs>
          <path fill="url(#genkit-gradient)" d="M128 22.5L24.8 70.3v95.4L128 213.5l103.2-47.8V70.3z"/>
        `,
      }}
    />
  );
}

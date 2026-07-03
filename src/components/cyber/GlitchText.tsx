
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function GlitchText({ text, className, as: Component = 'span' }: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block group", className)}>
      <Component className="relative z-10">{text}</Component>
      <Component className="absolute top-0 left-0 -z-10 text-primary opacity-0 group-hover:opacity-100 group-hover:animate-glitch translate-x-[-2px] translate-y-[1px]" aria-hidden="true">
        {text}
      </Component>
      <Component className="absolute top-0 left-0 -z-20 text-accent opacity-0 group-hover:opacity-100 group-hover:animate-glitch translate-x-[2px] translate-y-[-1px]" aria-hidden="true">
        {text}
      </Component>
    </div>
  );
}

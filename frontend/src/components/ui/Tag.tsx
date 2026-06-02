import { cn } from "../../lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function Tag({ children, active = false, className }: TagProps) {
  return (
    <span
      className={cn("text-[10px] tracking-[0.12em] px-2.5 py-1 border", className)}
      style={{
        fontFamily: "DM Mono, monospace",
        background: active ? "#cc2222" : "#1e1414",
        color: active ? "#ede8e3" : "#7a6e6e",
        border: `1px solid ${active ? "#cc2222" : "#2a1818"}`,
      }}
    >
      {children}
    </span>
  );
}

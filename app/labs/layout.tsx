import type { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <TOC />
      <div>{children}</div>
    </div>
  );
}

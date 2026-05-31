import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

export const InteractiveSkateboardWrapper = dynamic(
  () => import("./InteractiveSkateboard").then((mod) => mod.InteractiveSkateboard),
  { ssr: false }
);

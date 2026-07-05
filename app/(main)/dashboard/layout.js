import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import React,{ Suspense } from "react";

export default function DashboarLayout() {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 style={{
          fontSize: "4rem",
          fontWeight: "700",
          backgroundImage:
            "linear-gradient(to right, #2563eb, #9333ea, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>  
  );
}   
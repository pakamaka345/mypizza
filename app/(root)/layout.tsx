import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "MyPizza | Home",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}

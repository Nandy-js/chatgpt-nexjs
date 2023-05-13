"use client";
import { useState } from "react";

import { ChatLoadingContext } from "../../../context/ChatLoading.context";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ChatLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </ChatLoadingContext.Provider>
  );
}

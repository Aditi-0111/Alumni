/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Page =
  | "home"
  | "feed"
  | "alumni"
  | "chat"
  | "notifications"
  | "profile"
  | "alumniProfile";

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;

  selectedAlumniId: number | null;
  setSelectedAlumniId: (id: number | null) => void;
}

const NavigationContext =
  createContext<NavigationContextType | null>(null);

export function NavigationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentPage, setCurrentPage] =
    useState<Page>("home");

  const [selectedAlumniId, setSelectedAlumniId] =
    useState<number | null>(null);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedAlumniId,
        setSelectedAlumniId,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigation must be used inside NavigationProvider"
    );
  }

  return context;
}

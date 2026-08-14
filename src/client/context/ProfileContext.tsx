/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ProfileContextType {
  selectedId: number | null;

  openProfile: (id: number) => void;

  closeProfile: () => void;
}

const ProfileContext =
  createContext<ProfileContextType | null>(null);

export function ProfileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  return (
    <ProfileContext.Provider
      value={{
        selectedId,
        openProfile: setSelectedId,
        closeProfile: () => setSelectedId(null),
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context)
    throw new Error("Missing ProfileProvider");

  return context;
}

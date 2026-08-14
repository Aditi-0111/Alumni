/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export type ConnectionStatus =
  | "connect"
  | "pending"
  | "connected";

interface ConnectionContextType {
  connections: Record<number, ConnectionStatus>;

  getStatus: (id: number) => ConnectionStatus;

  sendRequest: (id: number) => void;

  acceptRequest: (id: number) => void;

  rejectRequest: (id: number) => void;
}

const ConnectionContext = createContext<ConnectionContextType | null>(null);

export function ConnectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [connections, setConnections] = useState<
    Record<number, ConnectionStatus>
  >({});

  const getStatus = (id: number) => {
    return connections[id] ?? "connect";
  };

  const sendRequest = (id: number) => {
    setConnections((prev) => ({
      ...prev,
      [id]: "pending",
    }));
  };

  const acceptRequest = (id: number) => {
    setConnections((prev) => ({
      ...prev,
      [id]: "connected",
    }));
  };

  const rejectRequest = (id: number) => {
    setConnections((prev) => ({
      ...prev,
      [id]: "connect",
    }));
  };

  return (
    <ConnectionContext.Provider
      value={{
        connections,
        getStatus,
        sendRequest,
        acceptRequest,
        rejectRequest,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection() {
  const context = useContext(ConnectionContext);

  if (!context) {
    throw new Error(
      "useConnection must be used inside ConnectionProvider"
    );
  }

  return context;
}

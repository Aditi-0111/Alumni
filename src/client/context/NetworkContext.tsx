/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { alumniPosts } from "../data/alumniPosts";
import { chats } from "../data/chats";
import { notifications as initialNotifications } from "../data/notifications";

export type ConnectionStatus = "connect" | "pending" | "connected";
export type Post = (typeof alumniPosts)[number] & { image?: string; pdf?: string };
export type AppNotification = (typeof initialNotifications)[number] & {
  actorId?: number;
  action?: "connection-request" | "mentorship-request";
};

type Thread = {
  id: number;
  name: string;
  company: string;
  role?: string;
  unread: number;
  lastMessage: string;
  time: string;
  messages: { id: number; sender: "me" | "them"; text: string; time: string }[];
};

interface NetworkContextValue {
  posts: Post[];
  savedPostIds: number[];
  toggleSave: (id: number) => void;
  publishPost: (post: Post) => void;
  toggleLike: (id: number) => void;
  addComment: (id: number, text: string) => void;
  sharePost: (id: number) => Promise<void>;
  connections: Record<number, ConnectionStatus>;
  getStatus: (id: number) => ConnectionStatus;
  sendRequest: (id: number, name?: string) => void;
  acceptRequest: (id: number, name?: string) => void;
  declineRequest: (id: number) => void;
  notifications: AppNotification[];
  markAllRead: () => void;
  markRead: (id: number) => void;
  threads: Thread[];
  sendMessage: (threadId: number, text: string) => void;
  startConversation: (person: { id: number; name: string; company: string; role?: string }) => number;
  unreadCount: number;
}

const NetworkContext = createContext<NetworkContextValue | null>(null);

const seedThreads: Thread[] = chats.map((chat) => ({
  ...chat,
  messages: [
    { id: chat.id * 10, sender: "them", text: chat.lastMessage, time: chat.time },
  ],
}));

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(alumniPosts);
  const [savedPostIds, setSavedPostIds] = useState<number[]>([]);
  const [likedPostIds, setLikedPostIds] = useState<number[]>([]);
  const [connections, setConnections] = useState<Record<number, ConnectionStatus>>({
    1: "connected",
    3: "pending",
  });
  const [notifications, setNotifications] = useState<AppNotification[]>([
    {
      id: 100,
      type: "connection",
      title: "Arjun Patel would like to connect with you.",
      time: "Just now",
      unread: true,
      actorId: 3,
      action: "connection-request",
    },
    ...initialNotifications,
  ]);
  const [threads, setThreads] = useState<Thread[]>(seedThreads);

  const addNotification = (notification: AppNotification) =>
    setNotifications((current) => [notification, ...current]);

  const toggleSave = (id: number) => setSavedPostIds((current) =>
    current.includes(id) ? current.filter((postId) => postId !== id) : [id, ...current],
  );

  const publishPost = (post: Post) => {
    setPosts((current) => [post, ...current]);
    addNotification({ id: Date.now() + 1, type: "announcement", title: "Your update is live in the college community.", time: "Just now", unread: true });
  };

  const toggleLike = (id: number) => {
    const hasLiked = likedPostIds.includes(id);
    setLikedPostIds((current) => hasLiked ? current.filter((postId) => postId !== id) : [...current, id]);
    setPosts((current) => current.map((post) => post.id === id ? { ...post, likes: Math.max(0, (post.likes ?? 0) + (hasLiked ? -1 : 1)) } : post));
  };

  const addComment = (id: number, text: string) => setPosts((current) => current.map((post) => post.id === id ? {
    ...post,
    comments: [...(post.comments ?? []), { id: Date.now(), user: "Aditi", text }],
  } : post));

  const sharePost = async (id: number) => {
    setPosts((current) => current.map((post) => post.id === id ? { ...post, shares: (post.shares ?? 0) + 1 } : post));
    const link = `${window.location.href.split("#")[0]}#post-${id}`;
    try { await navigator.clipboard?.writeText(link); } catch { /* clipboard access is optional */ }
  };

  const getStatus = (id: number) => connections[id] ?? "connect";
  const sendRequest = (id: number, name = "this alumnus") => {
    setConnections((current) => ({ ...current, [id]: "pending" }));
    addNotification({ id: Date.now(), type: "connection", title: `Connection request sent to ${name}.`, time: "Just now", unread: true });
  };
  const acceptRequest = (id: number, name = "your new connection") => {
    setConnections((current) => ({ ...current, [id]: "connected" }));
    setNotifications((current) => current.map((item) => item.actorId === id ? { ...item, unread: false, action: undefined } : item));
    addNotification({ id: Date.now(), type: "connection", title: `You and ${name} are now connected. Say hello!`, time: "Just now", unread: true });
  };
  const declineRequest = (id: number) => {
    setConnections((current) => ({ ...current, [id]: "connect" }));
    setNotifications((current) => current.map((item) => item.actorId === id ? { ...item, unread: false, action: undefined } : item));
  };

  const markAllRead = () => setNotifications((current) => current.map((item) => ({ ...item, unread: false })));
  const markRead = (id: number) => setNotifications((current) => current.map((item) => item.id === id ? { ...item, unread: false } : item));

  const sendMessage = (threadId: number, text: string) => setThreads((current) => current.map((thread) => thread.id === threadId ? {
    ...thread,
    unread: 0,
    lastMessage: text,
    time: "Now",
    messages: [...thread.messages, { id: Date.now(), sender: "me", text, time: "Now" }],
  } : thread));

  const startConversation = (person: { id: number; name: string; company: string; role?: string }) => {
    const found = threads.find((thread) => thread.id === person.id);
    if (found) return found.id;
    setThreads((current) => [{ id: person.id, name: person.name, company: person.company, role: person.role, unread: 0, lastMessage: "Start a conversation", time: "", messages: [] }, ...current]);
    return person.id;
  };

  const value = {
    posts, savedPostIds, toggleSave, publishPost, toggleLike, addComment, sharePost,
    connections, getStatus, sendRequest, acceptRequest, declineRequest,
    notifications, markAllRead, markRead, threads, sendMessage, startConversation,
    unreadCount: notifications.filter((item) => item.unread).length,
  };

  return <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>;
}

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (!context) throw new Error("useNetwork must be used inside NetworkProvider");
  return context;
}

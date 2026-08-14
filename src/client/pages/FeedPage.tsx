import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Feed from "../components/feed/Feed";
import CreatePostModal from "../components/feed/CreatePostModal";
import { useNetwork } from "../context/NetworkContext";

export default function FeedPage() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "opportunities" | "guidance">("all");
  const { posts, savedPostIds } = useNetwork();
  const filtered = useMemo(() => posts.filter((post) => filter === "all" || (filter === "opportunities" ? post.hiring : !post.hiring)), [posts, filter]);
  const saved = posts.filter((post) => savedPostIds.includes(post.id));
  return <div className="mx-auto max-w-3xl"><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">College community</p><h1 className="page-title">Ideas that move careers forward.</h1><p className="page-subtitle">Referrals, placement support, practical advice and wins from your campus network.</p></div><button onClick={() => setOpen(true)} className="button-primary shrink-0">Share an update</button></div>
    <div className="card mb-5 flex flex-wrap items-center gap-2 p-3"><SlidersHorizontal size={17} className="ml-1 text-slate-500"/>{([ ["all", "For you"], ["opportunities", "Opportunities"], ["guidance", "Guidance"] ] as const).map(([value, label]) => <button key={value} onClick={() => setFilter(value)} className={filter === value ? "filter-active" : "filter"}>{label}</button>)}</div>
    {saved.length > 0 && <details className="card mb-5 p-5"><summary className="cursor-pointer font-semibold text-slate-800">Saved for later <span className="ml-1 text-sm font-normal text-slate-500">({saved.length})</span></summary><div className="mt-4"><Feed posts={saved}/></div></details>}
    <Feed posts={filtered}/><CreatePostModal open={open} onClose={() => setOpen(false)}/>
  </div>;
}

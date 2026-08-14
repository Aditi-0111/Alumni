import { BadgeCheck, Bookmark, BookmarkCheck, Clock3, Heart, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useNetwork, type Post } from "../../context/NetworkContext";
import { useNavigation } from "../../context/NavigationContext";

export default function PostCard({ post }: { post: Post }) {
  const { savedPostIds, toggleSave, toggleLike, addComment, sharePost, getStatus, sendRequest, startConversation } = useNetwork();
  const { setCurrentPage, setSelectedAlumniId } = useNavigation();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const status = getStatus(post.id);
  const saved = savedPostIds.includes(post.id);
  const person = { id: post.id, name: post.name, company: post.company, role: post.role };

  const submitComment = () => {
    if (!comment.trim()) return;
    addComment(post.id, comment.trim());
    setComment("");
  };

  return <article id={`post-${post.id}`} className="card overflow-hidden p-0">
    <div className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <button onClick={() => { setSelectedAlumniId(post.id); setCurrentPage("alumniProfile"); }} className="flex min-w-0 items-start gap-3 text-left">
          <div className="avatar">{post.avatar}</div>
          <div className="min-w-0"><div className="flex flex-wrap items-center gap-1.5"><h3 className="font-semibold text-slate-800">{post.name}</h3>{post.verified && <BadgeCheck size={17} className="text-teal-600" />}{post.hiring && <span className="status status-amber">Opportunity</span>}</div>
            <p className="truncate text-sm text-slate-500">{post.role} · {post.company}</p>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400"><span>Batch {post.batch}</span><span className="inline-flex items-center gap-1"><MapPin size={12}/>{post.location}</span></p>
          </div>
        </button>
        <span className="flex shrink-0 items-center gap-1 text-xs text-slate-400"><Clock3 size={13}/>{post.time}</span>
      </div>

      <p className="mt-5 whitespace-pre-line leading-7 text-slate-700">{post.post}</p>
      {post.image && <img src={post.image} alt="Shared with the alumni community" className="mt-5 max-h-[420px] w-full rounded-2xl border border-stone-200 object-cover" />}
      <div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="tag">#{tag}</span>)}</div>

      {post.hiring && <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/70 p-4"><div className="flex items-center justify-between gap-4"><div><p className="font-semibold text-slate-800">{post.role}</p><p className="mt-1 text-sm text-slate-600">{post.company} · {post.jobType ?? "Open role"} {post.salary ? `· ${post.salary}` : ""}</p></div>{post.deadline && <span className="text-right text-xs font-medium text-amber-800">Apply by<br/>{post.deadline}</span>}</div><button onClick={() => window.alert("Application details have been saved to your opportunities.")} className="mt-3 text-sm font-semibold text-teal-700 hover:text-teal-900">Save opportunity →</button></div>}
    </div>

    <div className="border-t border-stone-200 px-5 py-3 sm:px-6"><div className="flex items-center justify-between gap-1 text-sm">
      <button onClick={() => toggleLike(post.id)} className="action-button"><Heart size={19} className={""} /> {post.likes ?? 0}</button>
      <button onClick={() => setCommentsOpen((open) => !open)} className="action-button"><MessageCircle size={19}/> {post.comments?.length ?? 0}</button>
      <button onClick={() => sharePost(post.id)} className="action-button"><Send size={18}/> Share</button>
      <button onClick={() => toggleSave(post.id)} aria-label="Save post" className="action-button">{saved ? <BookmarkCheck size={19} className="text-teal-700"/> : <Bookmark size={19}/>}</button>
    </div></div>

    {commentsOpen && <div className="border-t border-stone-200 bg-stone-50/70 p-5 sm:p-6"><div className="space-y-3">{post.comments?.map((item) => <div key={item.id} className="rounded-xl bg-white px-4 py-3 text-sm shadow-sm"><span className="font-semibold text-slate-800">{item.user}</span><p className="mt-1 text-slate-600">{item.text}</p></div>)}</div><div className="mt-4 flex gap-2"><input value={comment} onChange={(event) => setComment(event.target.value)} onKeyDown={(event) => event.key === "Enter" && submitComment()} placeholder="Add a thoughtful comment…" className="field flex-1"/><button onClick={submitComment} className="button-primary px-4">Post</button></div></div>}

    <div className="flex flex-wrap gap-2 border-t border-stone-200 px-5 py-4 sm:px-6">
      {status === "connect" && <button onClick={() => sendRequest(post.id, post.name)} className="button-primary">Connect</button>}
      {status === "pending" && <span className="status status-muted">Request pending</span>}
      {status === "connected" && <button onClick={() => { startConversation(person); setCurrentPage("chat"); }} className="button-secondary">Message</button>}
      <button onClick={() => { setSelectedAlumniId(post.id); setCurrentPage("alumniProfile"); }} className="button-quiet">View profile</button>
    </div>
  </article>;
}

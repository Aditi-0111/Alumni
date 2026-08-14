import { Image, X } from "lucide-react";
import { useRef, useState } from "react";
import { useNetwork, type Post } from "../../context/NetworkContext";

export default function CreatePostModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { publishPost } = useNetwork();
  const [kind, setKind] = useState<"update" | "opportunity">("update");
  const [body, setBody] = useState(""); const [company, setCompany] = useState(""); const [role, setRole] = useState(""); const [tags, setTags] = useState("");
  const [image, setImage] = useState<string | undefined>(); const imageInput = useRef<HTMLInputElement>(null);
  if (!open) return null;
  const publish = () => {
    if (!body.trim()) return;
    const post: Post = { id: Date.now(), name: "Aditi", batch: 2026, company: company || "Campus community", role: role || "CSE Student", location: "Campus", domain: "Career", experience: "Student", verified: false, hiring: kind === "opportunity", time: "Just now", tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean), post: body.trim(), avatar: "A", likes: 0, shares: 0, comments: [], image, jobType: kind === "opportunity" ? "Open opportunity" : "General update", deadline: kind === "opportunity" ? "Check with the poster" : "", salary: "", applyLink: "#", saved: false };
    publishPost(post); setBody(""); setCompany(""); setRole(""); setTags(""); setImage(undefined); onClose();
  };
  return <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] flex items-end bg-slate-900/35 p-0 sm:items-center sm:justify-center sm:p-6"><div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-[#fffdf9] p-5 shadow-2xl sm:rounded-3xl sm:p-7"><div className="flex items-start justify-between"><div><p className="eyebrow">Campus community</p><h2 className="mt-1 text-2xl font-bold text-slate-800">Share something useful</h2><p className="mt-1 text-sm text-slate-500">A referral, an insight, a question or a small win can help someone.</p></div><button onClick={onClose} className="rounded-full p-2 text-slate-500 hover:bg-stone-100"><X/></button></div>
    <div className="mt-6 flex gap-2"><button onClick={() => setKind("update")} className={kind === "update" ? "filter-active" : "filter"}>Update / advice</button><button onClick={() => setKind("opportunity")} className={kind === "opportunity" ? "filter-active" : "filter"}>Opportunity</button></div>
    <textarea autoFocus rows={6} value={body} onChange={(event) => setBody(event.target.value)} placeholder={kind === "opportunity" ? "Describe the role, eligibility and how students can apply…" : "What would you like to share with the community?"} className="field mt-4 min-h-36 resize-y"/>
    <div className="mt-4 grid gap-3 sm:grid-cols-2"><input className="field" value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Company or community"/><input className="field" value={role} onChange={(event) => setRole(event.target.value)} placeholder={kind === "opportunity" ? "Role title" : "Your role (optional)"}/></div>
    <input className="field mt-3" value={tags} onChange={(event) => setTags(event.target.value)} placeholder="Topics, separated by commas (e.g. placement, resume)"/>
    <input ref={imageInput} className="hidden" type="file" accept="image/*" onChange={(event) => { const file = event.target.files?.[0]; if (file) setImage(URL.createObjectURL(file)); }}/>
    {image && <img src={image} alt="Upload preview" className="mt-4 max-h-48 w-full rounded-2xl object-cover"/>}
    <div className="mt-6 flex items-center justify-between"><button onClick={() => imageInput.current?.click()} className="button-quiet inline-flex items-center gap-2"><Image size={18}/> Add image</button><div className="flex gap-2"><button onClick={onClose} className="button-quiet">Cancel</button><button disabled={!body.trim()} onClick={publish} className="button-primary disabled:cursor-not-allowed disabled:opacity-50">Publish</button></div></div>
  </div></div>;
}

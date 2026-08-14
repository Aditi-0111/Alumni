import PostCard from "./PostCard";
import type { Post } from "../../context/NetworkContext";

export default function Feed({ posts }: { posts: Post[] }) {
  return <div className="flex flex-col gap-5">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div>;
}

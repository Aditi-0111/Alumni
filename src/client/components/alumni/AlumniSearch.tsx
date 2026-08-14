import { Search } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function AlumniSearch({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-[#DDD4C7] bg-white px-4 py-3 shadow-sm">
      <Search size={20} className="text-gray-400" />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name, company or domain..."
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}
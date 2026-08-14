import { Search, GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E0D3] bg-[#F8F4EC]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F6F52] text-white">
            <GraduationCap size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide text-[#2D2D2D]">
              ALUMINI
            </h1>

            <p className="text-xs text-gray-500">
              Connect • Learn • Grow
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[420px] lg:block">
          <div className="flex items-center gap-3 rounded-xl border border-[#DDD4C7] bg-white px-4 py-3">
            <Search size={18} className="text-gray-500" />

            <input
              placeholder="Search alumni, company, skills..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F6F52] text-lg font-semibold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
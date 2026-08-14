import { Search, GraduationCap, Bell } from "lucide-react";
import { useNavigation } from "../../context/NavigationContext";
import { useNetwork } from "../../context/NetworkContext";

export default function Navbar() {
  const { setCurrentPage } = useNavigation();
  const { unreadCount } = useNetwork();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200 bg-[#fffdf9]/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F6F52] text-white">
            <GraduationCap size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800">
              Alumni Circle
            </h1>

            <p className="text-xs text-gray-500">
              Student Alumni Network
            </p>
          </div>
        </div>

        {/* Search */}

        <div className="hidden w-[420px] items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 md:flex">

          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search alumni..."
            className="w-full bg-transparent outline-none"
          />

        </div>

        {/* Student */}

        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentPage("notifications")} className="relative rounded-xl p-2 text-slate-500 hover:bg-stone-100"><Bell size={20}/>{unreadCount > 0 && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-teal-600"/>}</button>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4F6F52] text-lg font-bold text-white">
            A
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold">
              Aditi
            </h3>

            <p className="text-sm text-gray-500">
              CSE Student
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

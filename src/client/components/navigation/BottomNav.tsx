import type { ElementType } from "react";

import {
  House,
  Newspaper,
  Users,
  MessageCircle,
  Bell,
  User,
} from "lucide-react";

import {
  useNavigation,
  type Page,
} from "../../context/NavigationContext";

const items: {
  icon: ElementType;
  name: string;
  page: Page;
}[] = [
  {
    icon: House,
    name: "Home",
    page: "home",
  },
  {
    icon: Newspaper,
    name: "Feed",
    page: "feed",
  },
  {
    icon: Users,
    name: "Alumni",
    page: "alumni",
  },
  {
    icon: MessageCircle,
    name: "Chat",
    page: "chat",
  },
  {
    icon: Bell,
    name: "Notifications",
    page: "notifications",
  },
  {
    icon: User,
    name: "Profile",
    page: "profile",
  },
];

export default function BottomNav() {
  const { currentPage, setCurrentPage } = useNavigation();

  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] -translate-x-1/2 sm:bottom-6 sm:w-auto">
      <div className="flex items-center justify-around gap-0 rounded-2xl border border-stone-200 bg-[#fffdf9]/95 px-2 py-2 shadow-xl backdrop-blur sm:gap-2 sm:px-3">
        {items.map((item) => {
          const Icon = item.icon;

          const active = currentPage === item.page;

          return (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl px-2 py-2 transition-all duration-200 sm:min-w-[70px] sm:px-3 ${
                active
                  ? "bg-[#4F6F52] text-white"
                  : "text-gray-500 hover:text-[#4F6F52]"
              }`}
            >
              <Icon size={20} />

              <span className="text-xs font-medium">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

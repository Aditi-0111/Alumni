import Navbar from "./client/components/navigation/Navbar";
import BottomNav from "./client/components/navigation/BottomNav";

import { useNavigation } from "./client/context/NavigationContext";

import HomePage from "./client/pages/HomePage";
import FeedPage from "./client/pages/FeedPage";
import AlumniPage from "./client/pages/AlumniPage";
import AlumniProfilePage from "./client/pages/AlumniProfilePage";
import ChatPage from "./client/pages/ChatPage";
import NotificationPage from "./client/pages/NotificationPage";
import ProfilePage from "./client/pages/ProfilePage";
import NetworkPage from "./client/pages/NetworkPage";

function App() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6">
        {currentPage === "home" && <HomePage />}
        {currentPage === "feed" && <FeedPage />}
        {currentPage === "alumni" && <AlumniPage />}
        {currentPage === "alumniProfile" && <AlumniProfilePage />}
        {currentPage === "chat" && <ChatPage />}
        {currentPage === "notifications" && <NotificationPage />}
        {currentPage === "profile" && <ProfilePage />}
        {currentPage === "network" && <NetworkPage />}
      </main>

      <BottomNav />
    </div>
  );
}

export default App;

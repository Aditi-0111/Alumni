import Navbar from "../components/landing/Navbar";
import BottomNav from "../components/navigation/BottomNav";
import HomeLayout from "../components/layout/HomeLayout";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F4EC]">
      <Navbar />
      <HomeLayout />
      <BottomNav />
    </main>
  );
}
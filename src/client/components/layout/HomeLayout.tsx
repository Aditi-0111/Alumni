import StudentCard from "../home/StudentCard";
import Feed from "../feed/Feed";
import SuggestedAlumni from "../home/SuggestedAlumni"
import HiringNow from "../home/HiringNow";
import { useNetwork } from "../../context/NetworkContext";

export default function HomeLayout() {
  const { posts } = useNetwork();
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 py-6 pb-32">

      {/* Left */}
      <div className="col-span-3">
        <StudentCard />
      </div>

      {/* Center */}
      <div className="col-span-6">
        <Feed posts={posts.slice(0, 2)} />
      </div>

      {/* Right */}
      <div className="col-span-3">
        <SuggestedAlumni />
        <HiringNow/>
      </div>

    </div>
  );
}

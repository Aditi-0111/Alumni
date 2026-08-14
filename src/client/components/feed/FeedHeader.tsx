import { Megaphone, BriefcaseBusiness } from "lucide-react";

export default function FeedHeader() {
  return (
    <div className="mb-6 rounded-3xl border border-[#DDD4C7] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#2D2D2D]">
            Alumni Feed
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Career updates, hiring opportunities and guidance from alumni.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-[#4F6F52] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#3E5A41]">
          <Megaphone size={18} />
          Share Update
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-[#DDD4C7] bg-[#F8F4EC] p-4">
        <div className="flex items-center gap-3 text-[#4F6F52]">
          <BriefcaseBusiness size={20} />
          <p className="text-sm">
            Alumni can share hiring updates, referrals and career guidance here.
          </p>
        </div>
      </div>
    </div>
  );
}
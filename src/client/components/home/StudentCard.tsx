import {
  BookOpen,
  Users,
  Bookmark,
  SquarePen,
  BriefcaseBusiness,
} from "lucide-react";

export default function StudentCard() {
  const interests = ["AI / ML", "Web Development", "Cyber Security"];

  return (
    <div className="space-y-5">

      {/* Profile Card */}
      <div className="overflow-hidden rounded-3xl border border-[#DDD4C7] bg-white shadow-sm">

        {/* Cover */}
        <div className="h-24 bg-gradient-to-r from-[#4F6F52] to-[#8AA27C]" />

        {/* Avatar */}
        <div className="-mt-12 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#4F6F52] text-3xl font-bold text-white shadow-lg">
            A
          </div>
        </div>

        <div className="px-6 pb-6">

          <h2 className="mt-4 text-center text-xl font-bold text-[#2D2D2D]">
            Aditi
          </h2>

          <p className="text-center text-sm text-gray-500">
            Computer Science Engineering
          </p>

          <p className="text-center text-sm text-gray-400">
            Batch 2027
          </p>

          {/* Profile Completion */}

          <div className="mt-6">

            <div className="mb-2 flex justify-between text-sm">
              <span>Profile Completion</span>
              <span className="font-semibold">85%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#ECE7DD]">
              <div className="h-full w-[85%] rounded-full bg-[#4F6F52]" />
            </div>

          </div>

          {/* Interests */}

          <div className="mt-6">

            <h3 className="mb-3 font-semibold">
              Interests
            </h3>

            <div className="flex flex-wrap gap-2">

              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-[#EEF4EE] px-3 py-2 text-xs font-medium text-[#4F6F52]"
                >
                  {interest}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Quick Stats */}

      <div className="rounded-3xl border border-[#DDD4C7] bg-white p-6 shadow-sm">

        <h3 className="mb-5 font-bold">
          Quick Overview
        </h3>

        <div className="space-y-5">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users size={18} />
              Connections
            </div>

            <span className="font-semibold">
              27
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bookmark size={18} />
              Saved Alumni
            </div>

            <span className="font-semibold">
              12
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen size={18} />
              Mentors
            </div>

            <span className="font-semibold">
              5
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={18} />
              Saved Jobs
            </div>

            <span className="font-semibold">
              8
            </span>
          </div>

        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F6F52] py-3 font-medium text-white transition hover:bg-[#3E5B42]">

          <SquarePen size={18} />

          Edit Profile

        </button>

      </div>

    </div>
  );
}

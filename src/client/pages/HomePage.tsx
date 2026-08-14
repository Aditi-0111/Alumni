import { useNavigation } from "../context/NavigationContext";
export default function HomePage() {
    const { setCurrentPage } = useNavigation();
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#2D2D2D]">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Explore your alumni network, discover hiring opportunities and build
          valuable professional connections.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Alumni
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            245+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Registered alumni
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Hiring Posts
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            18
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Active opportunities
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Mentors
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            32
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Available for guidance
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Connections
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            12
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Your alumni network
          </p>
        </div>
      </div>

      {/* Two-column Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2D2D2D]">
            Recent Highlights
          </h2>
          {/* Quick Actions */}
<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

  <button
    onClick={() => setCurrentPage("alumni")}
    className="rounded-2xl border border-[#DDD4C7] p-5 text-left transition hover:bg-[#F5FAF5]"
  >
    <h3 className="font-semibold">Find Alumni</h3>

    <p className="mt-2 text-sm text-gray-500">
      Search alumni by company, domain or batch.
    </p>
  </button>

  <button
    onClick={() => setCurrentPage("feed")}
    className="rounded-2xl border border-[#DDD4C7] p-5 text-left transition hover:bg-[#F5FAF5]"
  >
    <h3 className="font-semibold">View Hiring Posts</h3>

    <p className="mt-2 text-sm text-gray-500">
      Browse the latest job opportunities.
    </p>
  </button>

  <button
    onClick={() => setCurrentPage("chat")}
    className="rounded-2xl border border-[#DDD4C7] p-5 text-left transition hover:bg-[#F5FAF5]"
  >
    <h3 className="font-semibold">Open Chats</h3>

    <p className="mt-2 text-sm text-gray-500">
      Continue conversations with alumni.
    </p>
  </button>

  <button
    onClick={() => setCurrentPage("profile")}
    className="rounded-2xl border border-[#DDD4C7] p-5 text-left transition hover:bg-[#F5FAF5]"
  >
    <h3 className="font-semibold">Update Profile</h3>

    <p className="mt-2 text-sm text-gray-500">
      Keep your skills and resume up to date.
    </p>
  </button>

</div>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li>• Google opened applications for Software Engineer roles.</li>
            <li>• Microsoft announced Summer Internship hiring.</li>
            <li>• Amazon alumni shared referral opportunities.</li>
            <li>• New mentorship sessions available this weekend.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2D2D2D]">
            Upcoming Events
          </h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border p-4">
              <h3 className="font-semibold">
                Alumni Networking Meet
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                28 August • College Auditorium
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="font-semibold">
                Resume Review Session
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                30 August • Online
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="font-semibold">
                Mock Interview Workshop
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                2 September • Microsoft Teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
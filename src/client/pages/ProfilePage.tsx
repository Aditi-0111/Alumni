import StudentCard from "../components/home/StudentCard";
import SavedAlumniList from "../components/profile/SavedAlumniList";
import SavedOpportunitiesList from "../components/profile/SavedOpportunitiesList";

export default function ProfilePage() {
  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#2D2D2D]">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your profile, connections and mentorship activities.
        </p>
      </div>

      {/* Student Card */}
      <StudentCard />

      {/* Dashboard Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Connections
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            12
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Alumni connected
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Mentorship Requests
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            3
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Pending requests
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Saved Jobs
          </h2>

          <p className="mt-4 text-4xl font-bold text-[#4F6F52]">
            5
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Opportunities bookmarked
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Resume
          </h2>

          <button className="mt-6 w-full rounded-xl bg-[#4F6F52] py-3 font-medium text-white hover:bg-[#3E5A41]">
            Upload Resume
          </button>
        </div>

      </div>

      {/* Skills */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#2D2D2D]">
          Skills
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "React",
            "Node.js",
            "Python",
            "Java",
            "MongoDB",
            "DSA",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#EEF4EE] px-4 py-2 font-medium text-[#4F6F52]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Saved Alumni */}
      <SavedAlumniList />

      {/* Saved Opportunities */}
      <SavedOpportunitiesList />

    </div>
  );
}
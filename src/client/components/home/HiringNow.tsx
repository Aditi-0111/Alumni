export default function HiringNow() {
  const jobs = [
    {
      company: "Google",
      role: "Software Engineer",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer",
    },
    {
      company: "NVIDIA",
      role: "AI Intern",
    },
  ];

  return (
    <div className="mt-6 rounded-3xl border border-[#DDD4C7] bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-bold">
        Hiring Now
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.company}>
            <h3 className="font-medium">
              {job.company}
            </h3>

            <p className="text-sm text-gray-500">
              {job.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
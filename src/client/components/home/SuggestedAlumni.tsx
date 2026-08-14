export default function SuggestedAlumni() {

  const alumni = [
    {
      name: "Rahul Sharma",
      company: "Google",
    },
    {
      name: "Priya Nair",
      company: "Microsoft",
    },
    {
      name: "Arjun Rao",
      company: "NVIDIA",
    },
  ];

  return (
    <div className="sticky top-28 rounded-3xl border border-[#DDD4C7] bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-bold">
        Suggested Alumni
      </h2>

      <div className="space-y-5">

        {alumni.map((person) => (

          <div
            key={person.name}
            className="flex items-center justify-between"
          >

            <div>

              <h3 className="font-medium">
                {person.name}
              </h3>

              <p className="text-sm text-gray-500">
                {person.company}
              </p>

            </div>

            <button className="rounded-lg bg-[#4F6F52] px-4 py-2 text-sm text-white">
              Connect
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
import { alumni } from "../data/alumni";
import { useNavigation } from "../context/NavigationContext";

export default function AlumniProfilePage() {
  const {
    selectedAlumniId,
    setCurrentPage,
  } = useNavigation();

  const person = alumni.find(
    (a) => a.id === selectedAlumniId
  );

  if (!person) {
    return (
      <div>
        Alumni not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow">

      <button
        onClick={() => setCurrentPage("alumni")}
        className="mb-6 rounded-lg border px-4 py-2"
      >
        ← Back
      </button>

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4F6F52] text-3xl font-bold text-white">
        {person.name[0]}
      </div>

      <h1 className="mt-5 text-3xl font-bold">
        {person.name}
      </h1>

      <p className="text-lg text-gray-600">
        {person.role}
      </p>

      <p className="text-gray-500">
        {person.company}
      </p>

<div className="mt-8">

  <h2 className="mb-2 text-xl font-semibold">
    About
  </h2>

  <p className="text-gray-600">
    {person.about}
  </p>

</div>

<div className="mt-8">

  <h2 className="mb-3 text-xl font-semibold">
    Skills
  </h2>

  <div className="flex flex-wrap gap-3">
    {person.skills.map((skill) => (
      <span
        key={skill}
        className="rounded-full bg-[#EEF4EE] px-4 py-2 text-[#4F6F52]"
      >
        {skill}
      </span>
    ))}
  </div>

</div>

<div className="mt-8">

  <h2 className="mb-3 text-xl font-semibold">
    Available Mentorship
  </h2>

  <div className="flex flex-wrap gap-3">
    {person.mentorship.map((item) => (
      <span
        key={item}
        className="rounded-xl border border-[#DDD4C7] px-4 py-2"
      >
        {item}
      </span>
    ))}
  </div>

</div>

<button className="mt-10 rounded-xl bg-[#4F6F52] px-6 py-3 font-medium text-white hover:bg-[#3E5A41]">
  Request Mentorship
</button>

    </div>
  );
}
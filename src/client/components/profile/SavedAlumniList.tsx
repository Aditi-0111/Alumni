import { MessageSquare, X } from "lucide-react";
import type { SavedAlumnus } from "../../data/savedItems";
import { savedAlumni } from "../../data/savedItems";
import { useState } from "react";

export default function SavedAlumniList() {
  const [alumni, setAlumni] = useState<SavedAlumnus[]>(savedAlumni);

  const handleRemove = (id: string) => {
    setAlumni(alumni.filter((a) => a.id !== id));
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#2D2D2D]">
          Saved Alumni
        </h2>
        <span className="rounded-full bg-[#EEF4EE] px-3 py-1 text-sm font-semibold text-[#4F6F52]">
          {alumni.length}
        </span>
      </div>

      <div className="space-y-4">
        {alumni.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            No saved alumni yet. Start saving alumni you'd like to connect with!
          </p>
        ) : (
          alumni.map((person) => (
            <div
              key={person.id}
              className="flex items-start justify-between rounded-2xl border border-[#DDD4C7] p-4 transition hover:border-[#4F6F52]"
            >
              <div className="flex gap-4 flex-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F6F52] text-sm font-bold text-white flex-shrink-0">
                  {person.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#2D2D2D]">
                    {person.name}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {person.role} at {person.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {person.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#EEF4EE] px-2 py-1 text-xs font-medium text-[#4F6F52]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Saved on {new Date(person.savedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0 ml-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF4EE] text-[#4F6F52] transition hover:bg-[#4F6F52] hover:text-white">
                  <MessageSquare size={18} />
                </button>

                <button
                  onClick={() => handleRemove(person.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

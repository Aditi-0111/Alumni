import { ExternalLink, X } from "lucide-react";
import type { SavedOpportunity } from "../../data/savedItems";
import { savedOpportunities } from "../../data/savedItems";
import { useState } from "react";

export default function SavedOpportunitiesList() {
  const [opportunities, setOpportunities] = useState<SavedOpportunity[]>(
    savedOpportunities
  );

  const handleRemove = (id: string) => {
    setOpportunities(opportunities.filter((o) => o.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-50 text-blue-700";
      case "Full-time":
        return "bg-green-50 text-green-700";
      case "Contract":
        return "bg-purple-50 text-purple-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#2D2D2D]">
          Saved Opportunities
        </h2>
        <span className="rounded-full bg-[#EEF4EE] px-3 py-1 text-sm font-semibold text-[#4F6F52]">
          {opportunities.length}
        </span>
      </div>

      <div className="space-y-4">
        {opportunities.length === 0 ? (
          <p className="text-center py-8 text-gray-500">
            No saved opportunities yet. Bookmark opportunities you're interested in!
          </p>
        ) : (
          opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="rounded-2xl border border-[#DDD4C7] p-5 transition hover:border-[#4F6F52] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#2D2D2D]">
                      {opportunity.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap ${getTypeColor(
                        opportunity.type
                      )}`}
                    >
                      {opportunity.type}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-gray-700">
                    {opportunity.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                    <span>📍 {opportunity.location}</span>
                    {opportunity.salary && (
                      <span>💰 {opportunity.salary}</span>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-gray-400">
                    Posted by {opportunity.postedBy} • Saved on{" "}
                    {new Date(opportunity.savedDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF4EE] text-[#4F6F52] transition hover:bg-[#4F6F52] hover:text-white">
                    <ExternalLink size={18} />
                  </button>

                  <button
                    onClick={() => handleRemove(opportunity.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

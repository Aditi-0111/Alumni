import { connectionRecommendations } from "../../data/connectionRecommendations";
import { UserPlus, Info } from "lucide-react";
import { useState } from "react";

export function ConnectionRecommendations() {
  const [requests, setRequests] = useState<Set<number>>(new Set());

  const sendRequest = (id: number) => {
    setRequests(new Set([...requests, id]));
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          People You May Know
        </h3>
        <p className="text-sm text-gray-600">
          Based on your network and interests
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {connectionRecommendations.map((person) => (
          <div
            key={person.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="mb-3 flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                {person.avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">
                  {person.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {person.role} at {person.company}
                </p>
                <p className="text-xs text-gray-500">
                  {person.location} • Batch
                  {" "}
                  {person.batch}
                </p>
              </div>
            </div>

            <div className="mb-3 space-y-2">
              {person.mutualConnections.length > 0 && (
                <div className="flex items-start gap-2">
                  <Info size={14} className="mt-0.5 flex-shrink-0 text-blue-600" />
                  <p className="text-xs text-gray-600">
                    Connected with{" "}
                    <span className="font-semibold">
                      {person.mutualConnections.join(", ")}
                    </span>
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-1">
                {person.commonInterests.slice(0, 2).map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => sendRequest(person.id)}
              disabled={requests.has(person.id)}
              className={`w-full rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                requests.has(person.id)
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus size={16} />
                {requests.has(person.id)
                  ? "Request Sent"
                  : "Connect"}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

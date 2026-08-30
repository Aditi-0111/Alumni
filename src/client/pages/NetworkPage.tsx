import { NetworkAnalytics } from "../components/home/NetworkAnalytics";
import { ConnectionRecommendations } from "../components/home/ConnectionRecommendations";
import { AdvancedAlumniSearch } from "../components/alumni/AdvancedAlumniSearch";
import { useState } from "react";
import { Users, Search, TrendingUp } from "lucide-react";

export default function NetworkPage() {
  const [activeTab, setActiveTab] = useState<"search" | "recommended" | "analytics">(
    "search"
  );

  return (
    <div className="space-y-6 pb-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Connect with Alumni
        </h1>
        <p className="text-gray-600">
          Find and connect with alumni mentors and professionals
        </p>
      </div>

      <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab("search")}
          className={`flex items-center gap-2 px-4 py-3 font-semibold transition-colors whitespace-nowrap ${
            activeTab === "search"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Search size={20} />
          Find Alumni
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`flex items-center gap-2 px-4 py-3 font-semibold transition-colors whitespace-nowrap ${
            activeTab === "recommended"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Users size={20} />
          Recommended Connections
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex items-center gap-2 px-4 py-3 font-semibold transition-colors whitespace-nowrap ${
            activeTab === "analytics"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <TrendingUp size={20} />
          Network Overview
        </button>
      </div>

      <div className="mt-6">
        {activeTab === "search" && (
          <AdvancedAlumniSearch />
        )}
        {activeTab === "recommended" && (
          <ConnectionRecommendations />
        )}
        {activeTab === "analytics" && (
          <NetworkAnalytics />
        )}
      </div>
    </div>
  );
}

import { networkStats } from "../../data/networkStats";
import { Users, TrendingUp, Building2, MapPin } from "lucide-react";

export function NetworkAnalytics() {
  const stats = networkStats;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Your Network
        </h3>
        <p className="text-sm text-gray-600">
          Network statistics and insights
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Total Connections
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalConnections}
              </p>
            </div>
            <Users
              size={32}
              className="text-blue-500"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                1st Degree
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.firstDegreeConnections}
              </p>
            </div>
            <TrendingUp
              size={32}
              className="text-green-500"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                2nd Degree
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.secondDegreeConnections}
              </p>
            </div>
            <Users
              size={32}
              className="text-purple-500"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                Pending Requests
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.pendingRequests}
              </p>
            </div>
            <TrendingUp
              size={32}
              className="text-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Top Companies */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Building2 size={20} className="text-blue-600" />
          <h4 className="font-semibold text-gray-800">
            Top Companies
          </h4>
        </div>
        <div className="space-y-2">
          {stats.topCompanies.map((company, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-700">
                {company.name}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${(company.count / stats.topCompanies[0].count) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-8 text-right text-sm font-semibold text-gray-900">
                  {company.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Locations */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-red-600" />
          <h4 className="font-semibold text-gray-800">
            Network by Location
          </h4>
        </div>
        <div className="space-y-2">
          {stats.topLocations.map((location, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-700">
                {location.name}
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-red-500"
                    style={{
                      width: `${(location.count / stats.topLocations[0].count) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-8 text-right text-sm font-semibold text-gray-900">
                  {location.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Domains */}
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <h4 className="mb-4 font-semibold text-gray-800">
          Top Domains
        </h4>
        <div className="space-y-2">
          {stats.topDomains.map((domain, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-700">
                {domain.name}
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700">
                {domain.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

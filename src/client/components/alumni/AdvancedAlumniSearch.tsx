import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { alumni } from "../../data/alumni";

export function AdvancedAlumniSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    domain: "",
    location: "",
    batch: "",
    company: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState(alumni);

  const handleSearch = () => {
    let filtered = alumni;

    if (searchTerm) {
      filtered = filtered.filter(
        (person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (filters.domain) {
      filtered = filtered.filter(
        (person) =>
          person.domain.toLowerCase() === filters.domain.toLowerCase()
      );
    }

    if (filters.location) {
      filtered = filtered.filter(
        (person) =>
          person.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    if (filters.batch) {
      filtered = filtered.filter(
        (person) => person.batch === parseInt(filters.batch)
      );
    }

    if (filters.company) {
      filtered = filtered.filter(
        (person) =>
          person.company.toLowerCase() === filters.company.toLowerCase()
      );
    }

    setResults(filtered);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      domain: "",
      location: "",
      batch: "",
      company: "",
    });
    setSearchTerm("");
    setResults(alumni);
  };

  const uniqueValues = {
    domains: [...new Set(alumni.map((a) => a.domain))],
    locations: [...new Set(alumni.map((a) => a.location))],
    batches: [
      ...new Set(alumni.map((a) => a.batch)),
    ].sort((a, b) => b - a),
    companies: [...new Set(alumni.map((a) => a.company))],
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Find Alumni
        </h3>
        <p className="text-sm text-gray-600">
          Advanced search with filters
        </p>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search by name or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && handleSearch()
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-sm focus:border-blue-500 focus:outline-none"
          />
          <Search
            size={18}
            className="absolute left-3 top-2.5 text-gray-400"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          <Filter size={18} />
        </button>
      </div>

      {showFilters && (
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">
              Filters
            </h4>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Clear All
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Domain
              </label>
              <select
                value={filters.domain}
                onChange={(e) =>
                  handleFilterChange("domain", e.target.value)
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Domains</option>
                {uniqueValues.domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) =>
                  handleFilterChange("location", e.target.value)
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Locations</option>
                {uniqueValues.locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Batch
              </label>
              <select
                value={filters.batch}
                onChange={(e) =>
                  handleFilterChange("batch", e.target.value)
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Batches</option>
                {uniqueValues.batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <select
                value={filters.company}
                onChange={(e) =>
                  handleFilterChange("company", e.target.value)
                }
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Companies</option>
                {uniqueValues.companies.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">
          Results: {results.length} alumni found
        </p>
        {results.map((person) => (
          <div
            key={person.id}
            className="rounded-lg border border-gray-200 bg-white p-3 hover:shadow-md transition-shadow"
          >
            <div className="mb-2 flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-800">
                  {person.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {person.role} at {person.company}
                </p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                {person.batch}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              📍 {person.location} • {person.domain}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {person.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

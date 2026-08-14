import { useMemo, useState } from "react";

import AlumniGrid from "../components/alumni/AlumniGrid";
import AlumniSearch from "../components/alumni/AlumniSearch";

import { alumni } from "../data/alumni";

export default function AlumniPage() {
  const [search, setSearch] = useState("");

  const filteredAlumni = useMemo(() => {
    const value = search.toLowerCase();

    return alumni.filter((person) => {
      return (
        person.name.toLowerCase().includes(value) ||
        person.company.toLowerCase().includes(value) ||
        person.domain.toLowerCase().includes(value)
      );
    });
  }, [search]);

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">
        Alumni Directory
      </h1>

      <p className="mb-6 text-gray-500">
        Connect with alumni from different companies and domains.
      </p>

      <AlumniSearch
        search={search}
        setSearch={setSearch}
      />

      <AlumniGrid alumni={filteredAlumni} />
    </div>
  );
}
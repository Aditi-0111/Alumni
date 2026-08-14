import AlumniCard from "./AlumniCard";

interface Alumni {
  id: number;
  name: string;
  company: string;
  role: string;
  domain: string;
  batch: number;
  location: string;
  status?: string;
}

interface Props {
  alumni: Alumni[];
}

export default function AlumniGrid({
  alumni,
}: Props) {
  if (alumni.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
        <h2 className="text-xl font-semibold">
          No alumni found
        </h2>

        <p className="mt-2 text-gray-500">
          Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {alumni.map((person) => (
        <AlumniCard
          key={person.id}
          alumni={person}
        />
      ))}
    </div>
  );
}
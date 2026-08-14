import { Building2, MapPin } from "lucide-react";
import { useNetwork } from "../../context/NetworkContext";
import { useNavigation } from "../../context/NavigationContext";
interface Props {
  alumni: {
    id: number;
    name: string;
    company: string;
    role: string;
    domain: string;
    batch: number;
    location: string;
  };
}

export default function AlumniCard({ alumni }: Props) {
  const { setCurrentPage, setSelectedAlumniId } = useNavigation();
  const { getStatus, sendRequest, startConversation } = useNetwork();

  const status = getStatus(alumni.id);

  return (
    <div className="rounded-3xl border border-[#DDD4C7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4F6F52] text-xl font-semibold text-white">
        {alumni.name.charAt(0)}
      </div>

      <h2 className="mt-4 text-lg font-bold">{alumni.name}</h2>

      <div className="mt-3 flex items-center gap-2 text-gray-600">
        <Building2 size={16} />
        {alumni.company}
      </div>

      <p className="mt-2 text-sm text-gray-500">{alumni.role}</p>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={15} />
        {alumni.location}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#EEF4EE] px-3 py-1 text-sm text-[#4F6F52]">
          {alumni.domain}
        </span>

        <span className="rounded-full bg-[#F6F2EA] px-3 py-1 text-sm">
          Batch {alumni.batch}
        </span>
      </div>

      {status === "connect" && (
        <button
          onClick={() => sendRequest(alumni.id, alumni.name)}
          className="mt-6 w-full rounded-xl bg-[#4F6F52] py-3 font-medium text-white"
        >
          Connect
        </button>
      )}

      {status === "pending" && <div className="mt-6 w-full rounded-xl bg-amber-50 py-3 text-center text-sm font-medium text-amber-800">Request pending</div>}

      {status === "connected" && (
        <button onClick={() => { startConversation(alumni); setCurrentPage("chat"); }} className="mt-6 w-full rounded-xl bg-[#EEF4EE] py-3 font-medium text-[#4F6F52]">
          Message
        </button>
      )}

      <button
  onClick={() => {
    setSelectedAlumniId(alumni.id);
    setCurrentPage("alumniProfile");
  }}
  className="mt-3 w-full rounded-xl border border-[#DDD4C7] py-3 font-medium hover:bg-[#F8F4EC]"
>
  View Profile
</button>
    </div>
  );
}

import { useEndorsements } from "../../context/EndorsementContext";
import { CheckCircle, ThumbsUp } from "lucide-react";

interface SkillEndorsementsProps {
  profileId: number;
}

export function SkillEndorsements({
  profileId,
}: SkillEndorsementsProps) {
  const { getSkillEndorsements, endorseSkill, isSkillEndorsedByUser } =
    useEndorsements();
  const skills = getSkillEndorsements(profileId);

  if (!skills || skills.length === 0) {
    return (
      <div className="rounded-lg bg-white p-4 text-center text-gray-500">
        <p>No skills endorsed yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-800">
        Skill Endorsements
      </h3>
      <div className="grid gap-2">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="flex items-center justify-between rounded-lg bg-white p-3 hover:bg-gray-50"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-700">
                  {skill.skill}
                </p>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                  {skill.count}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {skill.category}
              </p>
            </div>
            <button
              onClick={() =>
                endorseSkill(profileId, skill.skillId)
              }
              className={`ml-2 rounded-lg p-2 transition-colors ${
                isSkillEndorsedByUser(profileId, skill.skillId)
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
              }`}
              title={
                isSkillEndorsedByUser(profileId, skill.skillId)
                  ? "You endorsed this"
                  : "Endorse this skill"
              }
            >
              {isSkillEndorsedByUser(
                profileId,
                skill.skillId
              ) ? (
                <CheckCircle size={18} />
              ) : (
                <ThumbsUp size={18} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

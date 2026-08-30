/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { skillEndorsements } from "../data/endorsements";
import type { SkillEndorsement } from "../data/endorsements";

interface EndorsementContextType {
  endorsements: Record<number, SkillEndorsement[]>;
  endorseSkill: (profileId: number, skillId: string) => void;
  isSkillEndorsedByUser: (
    profileId: number,
    skillId: string
  ) => boolean;
  getSkillEndorsements: (
    profileId: number
  ) => SkillEndorsement[];
}

const EndorsementContext =
  createContext<EndorsementContextType | null>(null);

export function EndorsementProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [endorsementsState, setEndorsementsState] = useState(
    skillEndorsements
  );
  const [userEndorsements, setUserEndorsements] = useState<
    Set<string>
  >(new Set());

  const endorseSkill = (profileId: number, skillId: string) => {
    const key = `${profileId}-${skillId}`;
    if (!userEndorsements.has(key)) {
      setEndorsementsState((prev) => {
        const updated = { ...prev };
        if (updated[profileId]) {
          const skillIndex = updated[profileId].findIndex(
            (s) => s.skillId === skillId
          );
          if (skillIndex !== -1) {
            updated[profileId][skillIndex].count += 1;
            updated[profileId][skillIndex].endorsedBy.push(
              "You"
            );
          }
        }
        return updated;
      });
      setUserEndorsements(
        (prev) => new Set([...prev, key])
      );
    }
  };

  const isSkillEndorsedByUser = (
    profileId: number,
    skillId: string
  ) => {
    return userEndorsements.has(
      `${profileId}-${skillId}`
    );
  };

  const getSkillEndorsements = (profileId: number) => {
    return endorsementsState[profileId] || [];
  };

  return (
    <EndorsementContext.Provider
      value={{
        endorsements: endorsementsState,
        endorseSkill,
        isSkillEndorsedByUser,
        getSkillEndorsements,
      }}
    >
      {children}
    </EndorsementContext.Provider>
  );
}

export function useEndorsements() {
  const context = useContext(EndorsementContext);
  if (!context)
    throw new Error("Missing EndorsementProvider");
  return context;
}

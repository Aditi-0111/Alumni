export interface SkillEndorsement {
  skillId: string;
  skill: string;
  endorsedBy: string[];
  count: number;
  category: "technical" | "leadership" | "domain";
}

export const skillEndorsements: Record<number, SkillEndorsement[]> = {
  1: [
    {
      skillId: "react",
      skill: "React",
      endorsedBy: [
        "Ananya",
        "Vikas",
        "Priya",
      ],
      count: 23,
      category: "technical",
    },
    {
      skillId: "nodejs",
      skill: "Node.js",
      endorsedBy: [
        "Deepak",
        "Sharma",
      ],
      count: 18,
      category: "technical",
    },
    {
      skillId: "python",
      skill: "Python",
      endorsedBy: [
        "Kumar",
        "Rao",
      ],
      count: 31,
      category: "technical",
    },
    {
      skillId: "leadership",
      skill: "Team Leadership",
      endorsedBy: ["Priya"],
      count: 12,
      category: "leadership",
    },
  ],
  2: [
    {
      skillId: "productmgmt",
      skill: "Product Management",
      endorsedBy: [
        "Rahul",
        "Arjun",
      ],
      count: 28,
      category: "domain",
    },
    {
      skillId: "leadership",
      skill: "Leadership",
      endorsedBy: ["Rahul"],
      count: 15,
      category: "leadership",
    },
    {
      skillId: "azure",
      skill: "Azure",
      endorsedBy: ["Kumar"],
      count: 9,
      category: "technical",
    },
  ],
  3: [
    {
      skillId: "java",
      skill: "Java",
      endorsedBy: ["Rahul", "Priya"],
      count: 19,
      category: "technical",
    },
    {
      skillId: "aws",
      skill: "AWS",
      endorsedBy: ["Sharma", "Rao"],
      count: 22,
      category: "technical",
    },
    {
      skillId: "systemdesign",
      skill: "System Design",
      endorsedBy: ["Rahul"],
      count: 14,
      category: "domain",
    },
  ],
};

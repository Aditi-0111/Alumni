export interface ConnectionRecommendation {
  id: number;
  name: string;
  company: string;
  role: string;
  location: string;
  batch: number;
  mutualConnections: string[];
  commonInterests: string[];
  reason: string;
  avatar: string;
}

export const connectionRecommendations: ConnectionRecommendation[] = [
  {
    id: 4,
    name: "Deepak Kumar",
    company: "Flipkart",
    role: "Staff Engineer",
    location: "Bengaluru",
    batch: 2018,
    mutualConnections: ["Rahul Sharma", "Priya Nair"],
    commonInterests: ["AI/ML", "Open Source", "Mentoring"],
    reason: "2 mutual connections and similar tech interests",
    avatar: "D",
  },
  {
    id: 5,
    name: "Neha Sharma",
    company: "Cisco",
    role: "Software Engineer",
    location: "Bengaluru",
    batch: 2021,
    mutualConnections: ["Arjun Patel"],
    commonInterests: ["Cloud", "Networking", "DevOps"],
    reason: "1 mutual connection, shared tech interests",
    avatar: "N",
  },
  {
    id: 6,
    name: "Sanjay Rao",
    company: "Intel",
    role: "Principal Engineer",
    location: "Pune",
    batch: 2015,
    mutualConnections: ["Arjun Patel", "Rahul Sharma"],
    commonInterests: ["System Design", "Architecture", "Leadership"],
    reason: "2 mutual connections, expertise aligned",
    avatar: "S",
  },
  {
    id: 7,
    name: "Ananya Gupta",
    company: "Goldman Sachs",
    role: "Senior Analyst",
    location: "Hyderabad",
    batch: 2020,
    mutualConnections: ["Priya Nair"],
    commonInterests: ["Finance Tech", "Data Analytics"],
    reason: "1 mutual connection in fintech",
    avatar: "A",
  },
];

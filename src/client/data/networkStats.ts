export interface NetworkStats {
  totalConnections: number;
  pendingRequests: number;
  firstDegreeConnections: number;
  secondDegreeConnections: number;
  topCompanies: { name: string; count: number }[];
  topDomains: { name: string; count: number }[];
  topLocations: { name: string; count: number }[];
  networkGrowth: { month: string; connections: number }[];
}

export const networkStats: NetworkStats = {
  totalConnections: 547,
  pendingRequests: 12,
  firstDegreeConnections: 145,
  secondDegreeConnections: 402,
  topCompanies: [
    { name: "Google", count: 43 },
    { name: "Microsoft", count: 38 },
    { name: "Amazon", count: 35 },
    { name: "Flipkart", count: 28 },
    { name: "Cisco", count: 22 },
  ],
  topDomains: [
    { name: "Software Engineering", count: 198 },
    { name: "Product Management", count: 92 },
    { name: "Data Science", count: 78 },
    { name: "Cloud", count: 89 },
    { name: "AI/ML", count: 65 },
  ],
  topLocations: [
    { name: "Bengaluru", count: 312 },
    { name: "Hyderabad", count: 145 },
    { name: "Pune", count: 65 },
    { name: "Remote", count: 25 },
  ],
  networkGrowth: [
    { month: "Apr", connections: 120 },
    { month: "May", connections: 180 },
    { month: "Jun", connections: 280 },
    { month: "Jul", connections: 420 },
    { month: "Aug", connections: 547 },
  ],
};

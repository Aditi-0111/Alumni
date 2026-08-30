export interface SavedAlumnus {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  skills: string[];
  savedDate: string;
}

export interface SavedOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  postedBy: string;
  savedDate: string;
}

export const savedAlumni: SavedAlumnus[] = [
  {
    id: "1",
    name: "Raj Kumar",
    role: "Senior Software Engineer",
    company: "Google",
    avatar: "RK",
    skills: ["React", "System Design", "Leadership"],
    savedDate: "2024-08-15",
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Microsoft",
    avatar: "PS",
    skills: ["Product Strategy", "Analytics", "Mentoring"],
    savedDate: "2024-08-10",
  },
  {
    id: "3",
    name: "Akshay Patel",
    role: "ML Engineer",
    company: "Meta",
    avatar: "AP",
    skills: ["Machine Learning", "Python", "Deep Learning"],
    savedDate: "2024-08-05",
  },
  {
    id: "4",
    name: "Neha Gupta",
    role: "Data Scientist",
    company: "Amazon",
    avatar: "NG",
    skills: ["Data Analysis", "SQL", "Visualization"],
    savedDate: "2024-07-28",
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "DevOps Engineer",
    company: "Netflix",
    avatar: "VS",
    skills: ["Kubernetes", "CI/CD", "Cloud Architecture"],
    savedDate: "2024-07-20",
  },
];

export const savedOpportunities: SavedOpportunity[] = [
  {
    id: "1",
    title: "Frontend Developer Internship",
    company: "Google",
    location: "Bangalore, India",
    type: "Internship",
    salary: "₹50K - 75K",
    postedBy: "Raj Kumar",
    savedDate: "2024-08-20",
  },
  {
    id: "2",
    title: "Product Management Associate",
    company: "Microsoft",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹12L - 18L",
    postedBy: "Priya Sharma",
    savedDate: "2024-08-18",
  },
  {
    id: "3",
    title: "ML Engineer - Computer Vision",
    company: "Meta",
    location: "Remote",
    type: "Full-time",
    salary: "₹20L - 30L",
    postedBy: "Akshay Patel",
    savedDate: "2024-08-12",
  },
  {
    id: "4",
    title: "Data Science Internship",
    company: "Amazon",
    location: "Bangalore, India",
    type: "Internship",
    salary: "₹60K - 80K",
    postedBy: "Neha Gupta",
    savedDate: "2024-08-08",
  },
];

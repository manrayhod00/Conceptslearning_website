export interface Topper {
  name: string;
  /** JEE Main percentile. Empty when we only have the college placement. */
  percentile: string;
  exam: string;
  /** Rank / college placement shown under the name. */
  note: string;
}

/** Shared by the Home spotlight and the Results page so the two cannot drift. */
export const toppers: Topper[] = [
  { name: "Abhiram", percentile: "98.8", exam: "JEE Main 2026 · NEET 2026", note: "NEET AIR 623 (GN) • AIIMS Bhubaneswar" },
  { name: "Ranvir Chaudhary", percentile: "98.1", exam: "JEE Main 2026", note: "VNIT Nagpur" },
  { name: "Judah", percentile: "96", exam: "JEE Main 2026", note: "RVCE Bengaluru • Computer Science" },
  { name: "Teertha", percentile: "", exam: "JEE Main 2026", note: "RVCE Bengaluru" },
  { name: "Aishwarya", percentile: "", exam: "JEE Main 2026", note: "SRM University" },
  { name: "Sajeev", percentile: "", exam: "JEE Main 2026", note: "Manipal Institute of Technology" },
  { name: "Avyukt", percentile: "", exam: "JEE Main 2026", note: "VIT Vellore" },
];

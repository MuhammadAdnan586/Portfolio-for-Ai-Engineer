export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
};

export const education: Education[] = [
  {
    id: "bsc-cs",
    degree: "BS Computer Science",
    institution: "Pir Mehr Ali Shah Arid Agriculture University",
    location: "Rawalpindi",
    period: "2022 - 2026",
    result: "CGPA 3.39 / 4.0",
  },
  {
    id: "fsc",
    degree: "F.Sc. Pre-Engineering",
    institution: "Zubair Public School & College",
    location: "Dera Ismail Khan",
    period: "2022",
    result: "Grade A",
  },
];
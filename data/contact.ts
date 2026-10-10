import { profile } from "./profile";

// TODO: to make the in-page form send real emails, create a free form at
// https://formspree.io, copy its ID (looks like "xyzabcde") and paste it here.
// While this is empty, the form opens the visitor's email app (mailto) instead.
export const formspreeId = "";

export type ContactItem = {
  id: "email" | "phone" | "linkedin" | "github" | "location";
  label: string;
  value: string;
  href?: string;
  copy: string;
};

const bare = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const contactItems: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    copy: profile.phone,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: bare(profile.linkedin),
    href: profile.linkedin,
    copy: profile.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    value: bare(profile.github),
    href: profile.github,
    copy: profile.github,
  },
  {
    id: "location",
    label: "Location",
    value: profile.location,
    copy: profile.location,
  },
];
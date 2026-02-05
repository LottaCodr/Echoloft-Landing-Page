import { ReactNode } from "react";

export interface SocialLink {
    label: string;
    url: string;
    icon: ReactNode;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    socials: SocialLink[];
}

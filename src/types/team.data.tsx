import {
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { TeamMember } from "./types";
import React from "react"

export const team: TeamMember[] = [
    {
        name: "Joel C. Anih",
        role: "UI/UX Designer",
        image: "/images/team/joel.png",
        socials: [
            {
                label: "Instagram",
                icon: <FaInstagram size={ 22} />,
            url: "https://www.instagram.com/joelcanih",
      },
    {
        label: "X",
        icon: <FaTwitter size={ 22} />,
    url: "https://x.com/joelcanih",
      },
{
    label: "LinkedIn",
        icon: <FaLinkedinIn size={ 22 } />,
    url: "https://www.linkedin.com/in/joel-anih-70655214b",
      },
    ],
  },
{
    name: "Engr. Lotanna C. Iwuanyanwu",
        role: "Software Engineer",
            image: "/images/team/lotta.png",
                socials: [
                    {
                        label: "Instagram",
                        icon: <FaInstagram size={ 22} />,
                    url: "https://www.instagram.com/lotta.dairy",
      },
{
    label: "LinkedIn",
        icon: <FaLinkedinIn size={ 22 } />,
    url: "https://www.linkedin.com/in/lotanna-chuka-4075591b3",
      },
    ],
  },
{
    name: "Noble Nnamani",
        role: "Brand Designer",
            image: "/images/team/noble.png",
                socials: [
                    {
                        label: "Instagram",
                        icon: <FaInstagram size={ 22} />,
                    url: "https://www.instagram.com/noble.n.o",
      },
{
    label: "LinkedIn",
        icon: <FaLinkedinIn size={ 22 } />,
    url: "https://www.linkedin.com/in/noble-nnamani-8baba8151",
      },
    ],
  },
];

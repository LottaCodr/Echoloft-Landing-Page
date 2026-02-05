import { motion } from "framer-motion";
import { TeamMember } from "../types/types";
import React from "react"
import { avatarVariants, cardVariants } from "../types/animation";


interface Props {
    member: TeamMember;
}

export function TeamCard({ member }: Props) {
    return (
        <motion.article
            variants={cardVariants}
            className="
        relative flex flex-col items-center
        rounded-2xl border pt-16 pb-7 px-7
        backdrop-blur-xl shadow-xl
        transition-transform duration-300
        hover:scale-[1.025]
      "
            style={{
                borderColor: "var(--color-border)",
                background:
                    "linear-gradient(135deg,rgba(255,255,255,0.03) 40%,var(--color-accent) 90%)",
            }}
        >
            {/* Avatar */}
            <motion.div
                variants={avatarVariants}
                className="
          absolute -top-14 left-1/2 -translate-x-1/2
          w-28 h-28 rounded-full flex items-center justify-center
        "
                style={{
                    background:
                        "linear-gradient(135deg,var(--color-accent),var(--color-primary-dark))",
                }}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className="
            w-24 h-24 rounded-full object-cover
            border-4
          "
                    style={{ borderColor: "var(--color-border)" }}
                />
            </motion.div>

            {/* Info */}
            <div className="mt-20 text-center">
                <h3 className="text-lg font-semibold text-white">
                    {member.name}
                </h3>
                <p
                    className="mt-1 text-xs uppercase tracking-widest font-medium"
                    style={{ color: "var(--color-accent)" }}
                >
                    {member.role}
                </p>
            </div>

            {/* Divider */}
            <div
                className="my-6 w-20 h-px"
                style={{
                    background:
                        "linear-gradient(90deg,transparent,var(--color-accent),transparent)",
                    opacity: 0.4,
                }}
            />

            {/* Socials */}
            <nav className="flex gap-3">
                {member.socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="
              w-11 h-11 rounded-full flex items-center justify-center
              border shadow-lg transition-transform
              hover:scale-110 focus:ring-2
            "
                        style={{
                            background:
                                "linear-gradient(135deg,var(--color-accent),var(--color-primary))",
                            borderColor: "var(--color-border)",
                            color: "#fff",
                        }}
                    >
                        {social.icon}
                    </a>
                ))}
            </nav>
        </motion.article>
    );
}

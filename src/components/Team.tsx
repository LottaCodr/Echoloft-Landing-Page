import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";
import React from "react"
import { containerVariants } from "../types/animation";
import { team } from "../types/team.data";

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 overflow-x-clip"
      style={{
        background: "#000",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 text-center">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-white">
            Our passionate team blends technical expertise and creative insight to
            deliver{" "}
            <span style={{ color: "var(--color-accent)" }}>
              modern web solutions
            </span>.
          </p>
        </motion.header>

        {/* Grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

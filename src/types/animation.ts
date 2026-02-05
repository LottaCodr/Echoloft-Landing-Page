import { Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

export const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 44,
        rotateX: -8,
    },
    show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 16,
        },
    },
};

export const avatarVariants: Variants = {
    hidden: {
        scale: 0.7,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: 0.2,
        },
    },
};

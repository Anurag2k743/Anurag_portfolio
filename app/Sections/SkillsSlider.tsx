'use client'

import { motion } from "framer-motion";
import {
    FaReact,
    FaGithub,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiPostman,
    SiJavascript,
} from "react-icons/si";
import { MdPsychology } from "react-icons/md";
import { ReactElement } from "react";
import { div } from "framer-motion/client";

// Define allowed skill names
type Skill =
    | "ReactJS"
    | "Next.js"
    | "Tailwind CSS"
    | "GitHub"
    | "APIs"
    | "Problem Solving"
    | "Learning Mindset";

// List of skills (repeating for smooth animation)
const content: Skill[] = [
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",
    "Problem Solving",
    "Learning Mindset",

    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",

    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",
    "Problem Solving",
    "Learning Mindset"
];

const skillIcons: Record<Skill, ReactElement> = {
    "ReactJS": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    "GitHub": <FaGithub className="text-white" />,
    "APIs": <SiPostman className="text-orange-400" />,
    "Problem Solving": <MdPsychology className="text-yellow-400" />,
    "Learning Mindset": <SiJavascript className="text-yellow-300" />
};

export default function SkillsSlider() {
    return (
<div className="bg-gradient-to-r from-black via-[#1a1a1a] to-black bg-fixed text-white px-4 sm:px-10 py-4 w-full">
            <div className="max-w-8xl mx-auto">
                <div className="overflow-hidden whitespace-nowrap ">
                    <motion.div
                        className="flex text-sm sm:text-base md:text-2xl font-medium uppercase"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear",
                        }}
                    >
                        <div className="flex gap-6 sm:gap-10 py-2">
                            {content.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 min-w-fit">
                                    {skillIcons[item]}
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

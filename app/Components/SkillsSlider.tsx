'use client'
import { motion } from "framer-motion";
 
const content = [
    "Frontend Developer",
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",
    "Problem Solving",
    "Learning Mindset",
 
    "Frontend Developer",
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",
 
 
    "Frontend Developer",
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "GitHub",
    "APIs",
    "Problem Solving",
    "Learning Mindset"
]

 
export default function SkillsSlider() {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-[#1a1a1a] text-white  px-20 py-5">
            <motion.div
                className="flex text-2xl font-medium uppercase"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}>
                <div className="flex gap-10 py-2 ">
                    {content.map((items,index) => (
                        <div key={index} className="">{items}</div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
 
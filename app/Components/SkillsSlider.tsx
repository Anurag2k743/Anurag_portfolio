"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const skills = [
  "HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript",
  "React.js", "Next.js", "VS Code", "Git", "GitHub"
];

export default function SkillsSlider() {
  return (
    <div className="py-4 bg-[#1a1a1a] overflow-hidden px-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={0}
          slidesPerView={9}
          loop={true}
          freeMode={true}
          grabCursor={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="w-full custom-swiper" >
          {skills.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="px-2 py-2 text-white text-2xl font-medium  transition duration-1000 uppercase">
              {skill}
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
}

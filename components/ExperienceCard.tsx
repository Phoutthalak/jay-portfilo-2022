import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typing';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[375px] md:w-[500px]  xl:w-[900px] snap-center bg-[#292929] p-10 
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden pb-4">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
                src={urlFor(experience?.companyImage).url()}
                alt=""
            />

            <div className="flex flex-col px-0 md:px-10 items-center">
                <h4 className="font-bold text-1xl md:text-2xl mt-1 text-center">{experience?.jobTitle}</h4>
                <p className="text-1xl md:text-2xl font-light text-center">{experience?.company}</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full object-contain bg-white"
                            src={urlFor(technology.image).url()}
                            alt=""
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className="list-disc space-y-2 ml-5 text-sm md:text-md max-h-72 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pb-2">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl">About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0, }}
                transition={{ duration: 1.2, }}
                whileInView={{ opacity: 1, x: 0, }}
                viewport={{ once: true, }}
                src={urlFor(pageInfo?.profilePic).url()}
                className="-mb-20 md:mb-0 mt-24 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
                alt=""
            />
            <div className="space-y-7 px-0 md:px-10 mt-7">
                <h4 className="text-2xl md:text-3xl font-semibold">Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>
                    {" "}background
                </h4>
                <p className=" text-sm md:text-base h-72 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                    {pageInfo.backgroundInformation}
                </p>
            </div>

        </motion.div>
    )
}

export default About
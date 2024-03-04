'use client'

import { useState, useEffect } from "react";
import { motion , AnimatePresence } from "framer-motion";
import { Services } from "@/lib/constants";
import {styles} from "@/lib/styles";

const ContactUsPageComponent = () => {

  const [CurrentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % Services.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return(
    <div id="services" className={`sm:px-16 px-6 relative w-full h-screen grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 overflow-hidden`}>
      <div className="block col-span-1 flex flex-row items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" initial={true}>
            {Services.map((item, index) => (
              index === CurrentImage && (
                <motion.div
                  key={`contact_us_carousel_${index}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="h-full w-full flex flex-col justify-center items-center"
                >
                  <img  className="h-96 xl:h-1/2 w-96 xl:w-auto xl:w-140 p-6" src={item.image_url} alt={item.title} />
                </motion.div>
              )
            ))}
          </AnimatePresence>
      </div>
      <div className="col-span-1 w-full flex flex-col justify-center items-start">
          <AnimatePresence mode="wait" initial={true}>
            {Services.map((item, index) => (
              index === CurrentImage && (
                <motion.div
                  key={`contact_us_carousel_${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2, ease: "linear" }}
                  className="h-full w-full flex flex-col justify-center items-start sm:px-16 px-6"
                >
                  <h2 className={`font-heading text-third sm:text-[18px] text-[14px] uppercase tracking-wider`}>{item.header}</h2>
                  <h1 className={`font-heading text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>{item.title}</h1>
                  <p className="text-third">{item.subtitle}</p>
                  <p className={`font-body text-white sm:text-[24px] text-[18px] leading-[30px] sm:leading-[40px]`}>{item.description}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
      </div>
    </div>

  )
}

export default ContactUsPageComponent;

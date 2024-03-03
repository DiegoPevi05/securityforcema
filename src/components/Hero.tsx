'use client'

import {  ArrowDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import {  Link as Linkscroll } from 'react-scroll';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./three/style.css";
import {ScrollerEncoded} from "./three/app";



const Hero = () => {

	const [container, inViewContainer] = useInView({ triggerOnce: true });
	const [container1, inViewContainer1] = useInView({ triggerOnce: true });

  useEffect(()=>{

    if(inViewContainer && inViewContainer1){

      const dom: HTMLElement | null = document.querySelector('#container');
      // @ts-ignore
      new ScrollerEncoded({ dom });
      }


    },[inViewContainer, inViewContainer1])

	return(
		<div className="bg-hero-pattern bg-cover bg-bottom h-screen w-full">
			<div className="absolute bottom-36 inset-x-0 sm:bottom-48 flex flex-col justify-center items-center gap-y-4 sm:px-16 z-20">
				<motion.h3 
					initial={{ translateY:20, opacity:0 }}
					animate={{ translateY:0, opacity:1  }}
        	transition={{ delay: 1, duration: 0.3, ease: "easeIn" }}
					className="text-white">20 años de innovacion</motion.h3>
				<motion.h1 
					initial={{ translateY:20, opacity:0 }}
					animate={{ translateY:0, opacity:1  }}
        	transition={{ delay: 1.6, duration: 0.3, ease: "easeIn" }}
					className="font-bold text-md sm:text-2xl text-white">Comprometidos con innovacion medica</motion.h1>
				<motion.h3 
					initial={{ translateY:20, opacity:0 }}
					animate={{ translateY:0, opacity:1  }}
        	transition={{ delay: 2.6, duration: 0.3, ease: "easeIn" }}
					className="flex flex-row gap-x-3 hover:gap-x-4 text-lime-300 hover:text-lime-500 transition-all duration-300 cursor-pointer ">Grupo Eurolabs <ArrowDownIcon/></motion.h3>
			</div>
			<div className="slider__container">
				<div ref={container1} id="container1"></div>
				<div ref={container} id="container"></div>
				<div className="separator"></div>
				<div className="realseparator"></div>
				<div className="slider__parent">
						<div className="slider">
						<div className="slider__scroller">
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
							<div className="slide">
								<img src="/images/hero/dni.webp" alt="hero"/>
							</div>
						</div>
					</div>
				</div>
				<div className="slider__parent encoded">
						<div className="slider">
						<div className="slider__scroller">
							<div className="slide">
							</div>
							<div className="slide">
							</div>
							<div className="slide">
							</div>
							<div className="slide">
							</div>
							<div className="slide">
							</div>
							<div className="slide">
							</div>
						</div>
					</div>
				</div>
			</div>




		</div>
	)
}

export default Hero;

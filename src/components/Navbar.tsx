'use client'
import { NavbarData } from "@/lib/constants"
import {useEffect, useState} from "react"
import {motion , AnimatePresence} from "framer-motion"
import {  animateScroll as scroll } from 'react-scroll';
import { AlignJustify, X } from "lucide-react";


const Navbar = () => {
	const [openOption ,setOpenOption] = useState<number|null>(null);
	const [openSideBar, setOpenSideBar] = useState<boolean>(false);
	const [scrollNav, setScrollNav] = useState<boolean>(false)

	const triggerOption = (index:number) => {
		if(index == openOption){
			setOpenOption(null);
		}else{
			setOpenOption(index);
		}
	}

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const changeNav = () => {
		if (window.scrollY > 0) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

	const scrollToTop = () => {
    scroll.scrollToTop();
  };

	const toggleSideBar = () => {
		setOpenSideBar((prevOpenSidebar) => { return !prevOpenSidebar })
	}


	return(
		<>
			<div className={`hidden lg:flex fixed top-0 w-screen h-auto flex-col items-center justify-center  ${ scrollNav ? "bg-transparent":"bg-transparent py-6"} z-[1000] transition-all duration-300 ease-in-out`}>
				<span onClick={()=>scrollToTop()} className={`${scrollNav ? "block scale-0 h-[0px]":"block scale-1 h-auto" } transition-all duration-300 ease-in-out cursor-pointer`}>
					<img  className="h-10 w-auto" src="./images/logos/logo192.png"/>
				</span>
				<ul className={`${ scrollNav ? "bg-primary text-white h-[60px]":"bg-transparent text-white h-[100px]"} relative w-full  flex flex-row justify-center gap-x-12 transition-all duration-300 ease-in-out`}>
					{NavbarData.map((item,index)=>{
						return(
							<div key={"container_navbar_option"+index} className="relative h-full w-auto flex justify-center items-center">
								<li  onClick={()=>triggerOption(index)} className={`${scrollNav ?"hover:text-third":"hover:text-primary"}  cursor-pointer`} key={"NavItem_"+index}>{item.title}</li>
								{openOption == index &&
									<motion.span 
										key={"NavItemSpan"+index}
										initial={{ opacity:0, translateY: -10  }}
										animate={{ opacity:100, translateY: -0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className={`absolute  w-24 h-1 ${scrollNav ? "bg-third bottom-2" :"bg-primary bottom-5"}`}></motion.span>
								}
							</div>
						)
					})}
				</ul>
			</div>
			<div className={`flex lg:hidden fixed top-0 w-screen h-auto flex-row items-center justify-between p-6 sm:pt-8 z-30`}>
				<span onClick={()=>scrollToTop()} className="cursor-pointer">
					<img  className="h-6 sm:h-10 w-auto" src="./images/logos/logo192.png"/>
				</span>
				<span onClick={()=>toggleSideBar()}>
					<AlignJustify className="h-8 sm:h-12 w-8 sm:w-12 text-lime-500 hover:text-white cursor-pointer"/>
				</span>
				<AnimatePresence>
					{openSideBar && (
						<motion.div 
							initial={{ opacity:0, translateX:"100vw" }} 
							animate={{ opacity:100, translateX:0 }} 
							exit={{ opacity:0, translateX:"100vw" }}
							transition={{ duration: 0.5, delay: 0.5, ease:"easeInOut" }} 
							className="min-h-screen w-full fixed top-0 left-0 bg-white flex flex-col">
							<div className="flex flex-row justify-between p-6">
								<span className="cursor-pointer">
									<img  className="h-6 w-auto" src="./images/logos/logo192.png"/>
								</span>
								<span onClick={()=>toggleSideBar()}>
									<X className="h-8 w-8 text-lime-500 hover:text-slate-700 cursor-pointer"/>
								</span>
							</div>
							<ul className="text-slate-700 relative w-full h-auto flex flex-col justify-start items-start p-6 gap-y-4">
								{NavbarData.map((item,index)=>{
									return(
										<div key={"container_navbar_section"+index} className="h-full w-full flex flex-col justify-start items-start">
											<li  onClick={()=>triggerOption(index)} className="text-slate-700 font-bold cursor-pointer" key={"NavItemr"+index}>{item.title}</li>
										</div>
									)
								})}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}

export default Navbar;

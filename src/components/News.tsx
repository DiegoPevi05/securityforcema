'use client'

import clsx from "clsx";
import {useState} from "react";
import { ArrowRightIcon, ChevronRightCircle, ChevronLeftCircle} from "lucide-react";
import { motion } from "framer-motion";

interface PropsBusinessCard {
	title:string;
	header:string;
	business:string;
	labelLink:string;
	link:string;
	img:string;
}

const dataPropsBusiness:PropsBusinessCard[] = [
	{
		title:"Nos preocupa el desarrollo de nuestras operaciones",
		header:"Negocio",
		business:"Seguridad Personal",
		labelLink:"Seguridad",
		link:"#",
		img:"./images/home/private_security_2.jpg"
	},
	{
		title:"Los estandares de calidad mas altos para la seleccion de personal",
		header:"Negocio",
		business:"Seguridad Empresarial",
		labelLink:"Seguridad de Empresas",
		link:"#",
		img:"./images/home/private_security_3.jpg"
	},
	{
		title:"Tu empresa como parte de un gran negocio",
		header:"Negocio",
		business:"Seguridad en tu hogar",
		labelLink:"Seguridad",
		link:"#",
		img:"./images/home/private_security_4.jpeg"
	}
]

interface BusinessCardProps extends PropsBusinessCard {
	index:number;
	selected:boolean;
}

const BusinessCard = (props:BusinessCardProps) => {
	const {selected, title, header, business, labelLink, img} = props;

	return(
		<div className={`h-[700px]  ${selected  ? "bg-opacity-100 bg-secondary w-full sm:w-3/5" : "blur w-[0px] sm:w-1/5 cursor-pointer-null"} transition-all duration-300 ease-in-out`}>
			<div className="relative w-full sm:w-4/5 h-2/3 ">
				<motion.img 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="absolute top-0 left-0 w-full h-full object-cover object-top brightness-70" src={img}/>
				<p className="absolute left-8 bottom-4 w-96 h-auto font-bold text-white">{title}</p>
			</div>
			<div className="flex flex-col h-1/3 w-auto justify-start items-start pl-6 pt-6 gap-y-2 font-bold">
				<span className="text-primary">{header}</span>
				<h2 className="text-slate-700">{business}</h2>
				<span className="text-primary hover:text-third flex flex-row gap-x-2 hover:gap-x-4 cursor-pointer">{labelLink} <ArrowRightIcon/></span>
			</div>
		</div>
	)
}

const News = () => {
	const [selected,setSelectedCard] = useState<number>(0);

	const nextSelected = () => {
		setSelectedCard((prevSelected) => { return prevSelected == dataPropsBusiness.length - 1 ? dataPropsBusiness.length - 1 : prevSelected + 1 })
	}

	const previousSelected = () => {
		setSelectedCard((prevSelected) => { return prevSelected == 0 ? 0 : prevSelected - 1 })
	}

	return(
		<div id="news" className="w-full py-16 flex flex-col justify-center items-center h-screen">
			<h1 className="text-xl sm:text-xl font-bold mb-4 font-heading text-primary">Noticias</h1>
			<p className="text-sm sm:text-lg mb-6 text-center px-6">En eurolabs ofrecemos un alcance integrado, incluyendo desarrollo, manufactura y comercializacion de medicinas. </p>
			<div className="w-full h-full overflow-hidden">
				<div id="container_business" 
					className={clsx("min-h-screen sm:w-screen h-auto flex flex-row transition-all duration-1200 ease-in-out",
													selected == 0 ? "translate-x-[20px] sm:translate-x-[360px]": selected == 1 ? "translate-x-[20px] sm:translate-x-[120px] " : "translate-x-[20px] sm:-translate-x-[120px]")}>
					{dataPropsBusiness.map((business,index)=>{
						return(
							<BusinessCard key={"business_"+index} index={index} selected={selected === index} {...business}/>
						)
					})}
				</div>
			</div>
			<div className="w-full h-auto flex flex-row justify-center items-center gap-x-2">
						<span>{(selected + 1) +" / "+dataPropsBusiness.length}</span>
						<div className="flex flex-row gap-x-2">
							<span onClick={()=>previousSelected()} className={`${selected == 0 ? "text-gray-300 cursor-pointer-none" : " text-primary cursor-pointer"}`}><ChevronLeftCircle className="h-8 w-8"/></span>
								<span onClick={()=>nextSelected()} className={`${selected == dataPropsBusiness.length - 1 ? "text-gray-300 cursor-pointer-none" : "text-primary cursor-pointer"}`}><ChevronRightCircle className="h-8 w-8"/></span>
						</div>
			</div>
		</div>
	)
}

export default News;

'use client'
import {Shield, CheckCircle, Star, LifeBuoy, Award, Lightbulb, Heart, ShieldCheck}  from "lucide-react";

const Reasons:any[] = [
	{
		label: "Seguridad",
		icon: <Shield className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Confianza",
		icon: <CheckCircle className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Calidad",
		icon: <Star className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Soporte",
		icon: <LifeBuoy className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Experiencia",
		icon: <Award className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Innovación",
		icon: <Lightbulb className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Compromiso",
		icon: <Heart className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
	{
		label: "Responsabilidad",
		icon: <ShieldCheck className="h-12 w-12 hover:text-third cursor-pointer transition-all duration-300 hover:scale-[1.2]"/>,
	},
]


const IndustriesComponent = () => {

	return(
    <div id="contact" className="flex flex-col w-full max-w-7xl mx-auto pt-12 sm:py-6 px-4 gap-y-12 sm:gap-y-0 h-screen sm:px-16 px-6 items-center justify-center">
      <h2 className={`font-heading text-third sm:text-[18px] text-[14px] uppercase tracking-wider`}>{"Expertos en diferentes campos"}</h2>
      <h1 className={`font-heading text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>{"Industrias"}</h1>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full h-1/2 mt-6">
				{Reasons.map((item, index) => (
					<div key={`reason_${index}`} className="flex flex-col items-center gap-2">
						<div className="w-auto h-auto bg-primary rounded-full flex justify-center items-center">
							<span className="w-16 sm:w-24 h-16 sm:h-24 text-secondary flex items-center justify-center">{item.icon}</span>
						</div>
						<p className="text-white text-center text-md font-heading">{item.label}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default IndustriesComponent;

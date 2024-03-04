'use client'
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const Questions:any[] = [
	{
		question: "¿Qué servicios ofrece la empresa de seguridad?",
		answer: "Nuestra empresa ofrece una amplia gama de servicios de seguridad, incluyendo vigilancia 24/7, monitoreo de cámaras de seguridad, instalación de sistemas de alarma, y patrullaje en áreas designadas."
	},
	{
		question: "¿Cómo puedo contactar a la empresa en caso de emergencia?",
		answer: "Para cualquier emergencia, puedes contactarnos las 24 horas del día, los 7 días de la semana, a través de nuestro número de teléfono de emergencia o enviando un correo electrónico a nuestro equipo de soporte."
	},
	{
		question: "¿Cuáles son las medidas de seguridad implementadas por la empresa?",
		answer: "Nuestra empresa implementa medidas de seguridad de última tecnología, incluyendo sistemas de cámaras de alta definición, sensores de movimiento, y acceso restringido a áreas sensibles. Además, contamos con personal altamente capacitado en seguridad."
	},
	{
		question: "¿Qué tipos de negocios pueden beneficiarse de los servicios de seguridad de la empresa?",
		answer: "Nuestros servicios de seguridad están diseñados para adaptarse a una amplia variedad de negocios, incluyendo tiendas minoristas, restaurantes, oficinas, y otros establecimientos comerciales. Nos especializamos en proporcionar soluciones de seguridad personalizadas para cada cliente."
	},
	{
		question: "¿Cómo puedo solicitar una evaluación de seguridad para mi negocio?",
		answer: "Para solicitar una evaluación de seguridad gratuita para tu negocio, simplemente ponte en contacto con nuestro equipo de ventas y estaremos encantados de programar una visita a tu establecimiento para evaluar tus necesidades de seguridad."
	},
	{
		question: "¿Qué debo hacer si tengo problemas con el equipo de seguridad instalado en mi negocio?",
		answer: "Si experimentas algún problema con el equipo de seguridad instalado en tu negocio, por favor contáctanos de inmediato para que podamos enviar a uno de nuestros técnicos a resolver el problema lo antes posible."
	}
]

interface FAQQuestionProps {
	question: string;
	answer: string;
}

const FAQQuestion = (props:FAQQuestionProps) =>{
	const {question, answer} = props;
	const [showAnswer, setShowAnswer] = useState(false);
	return(
		<div className="max-w-[540px] w-full flex flex-col transition-all duration-800 ease-in-out">
			<div className="w-full flex flex-row justify-between items-center transition-all duration-800 ease-in-out border-b-2 border-primary mb-2">
				<h2 className={`font-heading text-third sm:text-[16px] text-[14px] uppercase tracking-wider`}>{question}</h2>
				<button onClick={() => setShowAnswer(!showAnswer)} className="text-primary font-bold hover:text-third">{!showAnswer ? <Plus className="h-4 w-4"/>: <Minus className="h-4 w-4"/>}</button>
			</div>
			<p className={`${showAnswer ? "h-auto opacity-100": "h-[0px] opacity-0"} text-sm sm:text-md text-white transition-all duration-300 ease-in-out my-2`}>{answer}</p>
		</div>
	)
}


const FAQComponent =  () => {
	return(
		<div id="faq" className="sm:px-16 px-6 relative min-h-screen h-screen flex flex-col justify-center items-center  overflow-hidden">
			<div className="col-span-1 w-full flex flex-col justify-center items-center">
				<h2 className={`font-heading text-third sm:text-[18px] text-[14px] uppercase tracking-wider`}>Preguntas Frecuentes</h2>
				<h1 className={`font-heading text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>FAQ</h1>
				<p className="text-white text-center text-sm mt-4">Aqui hay algunas preguntas o puedes contactar a nuestro centro de informacion y soporte</p>
				<div className="w-full flex flex-col justify-center items-center mt-12">
					{Questions.map((item, index) => (
						<FAQQuestion key={`faq_question_${index}`} question={item.question} answer={item.answer} />
					))}
				</div>
			</div>

		</div>
	)
}

export default FAQComponent;

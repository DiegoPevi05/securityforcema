'use client'
import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface formProps{
  email: string;
  name: string;
  company: string;
  cellphone: string;
}

const ContactComponent = () => {

  const [form,setForm] = useState<formProps>({
    email: "",
    name: "",
    company: "",
    cellphone: "",
  });

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form,[e.target.name]: e.target.value});
  }

	return(
    <div id="contact" className="flex flex-col w-full max-w-7xl mx-auto pt-12 sm:py-6 px-4 gap-y-12 sm:gap-y-0 h-screen sm:px-48 px-6 items-center justify-center">
      <h2 className={`font-heading text-third sm:text-[18px] text-[14px] uppercase tracking-wider`}>{"Sigue en contacto con nosotros"}</h2>
      <h1 className={`font-heading text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>{"Contactanos"}</h1>
			<div className="flex flex-col w-full gap-6">
        <div className="h-auto w-full flex flex-col items-center gap-y-10 mt-12">
          <label htmlFor="email" className="hidden">email</label>
          <Input typeRaw="text" name="email" placeholderAnimated={"Correo Electronico"} onChange={(e)=>onchange(e)} value={form.email} leftIcon="Mail" sizeInput="sm"/>
          <label htmlFor="name" className="hidden">name</label>
          <Input typeRaw="text" name="name" placeholderAnimated={"Nombre"} onChange={(e)=>onchange(e)} value={form.name} leftIcon="User" sizeInput="sm"/>

          <label htmlFor="company" className="hidden">city</label>
          <Input typeRaw="text" name="company" placeholderAnimated={"Compañia"} onChange={(e)=>onchange(e)} value={form.company} leftIcon="Building" sizeInput="sm"/>

          <label htmlFor="cellphone" className="hidden">cellphone</label>
          <Input typeRaw="text" name="cellphone" placeholderAnimated={"Celular"} onChange={(e)=>onchange(e)} value={form.cellphone} leftIcon="Smartphone" sizeInput="sm"/>
          <Button className="w-2/3 mt-4" variant="default">{"Enviar"}</Button>
        </div>
			</div>
		</div>
	)
}

export default ContactComponent;

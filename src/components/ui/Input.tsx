'use client'
import {cn} from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority"
import { InputHTMLAttributes, FC, useState } from "react";
import { icons, Eye,EyeOff } from "lucide-react";


export const inputVariants = cva(
"w-full text-primary placeholder:text-primary rounded-md transition-color border-b-2 focus:outline-none focus:ring-2 focus:border-b-0 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-secondary",
        dark: 
          "bg-primary",
      },
      sizeInput: {
        default: "py-2 px-6",
        sm: "py-2 px-2 h-8 text-xs",
        lg: "py-4 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      sizeInput: "default",
    },
  },
)

export interface InputProps 
extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants>{
  typeRaw?:string;
  placeholderAnimated?:string;
  leftIcon?:string;
}

const Input: FC<InputProps> = ({
  className,
  variant,
  sizeInput,
  placeholderAnimated,
  leftIcon,
  typeRaw,
  ...props
}) => {

  let IconInput = null;

  if(leftIcon){
    // @ts-ignore
    IconInput = icons[leftIcon];

  }

  const [passwordVisible,setPasswordInvisible] = useState<boolean>(false);

  const tagglePasswordVisibility = () => {
    setPasswordInvisible(!passwordVisible);
  }

  return(
    <div className="w-full h-auto relative">
            <span
              className={`transition-all ease-in-out duration-300 ${
                props.value == ""  ? `absolute   ${sizeInput == "sm" ? "text-[13px] left-4 inset-y-1" :"left-10 text-[16px] inset-y-2"} text-gray-400` : `absolute  ${sizeInput == "sm" ? "text-[12px] left-2 -top-6":"text-[14px] left-4 -top-8"} text-primary`
              }`}
            >
              {placeholderAnimated}
            </span>
            {typeRaw !== "password" ?
              <span className={`absolute  ${sizeInput == "sm" ? "inset-y-1 right-4" :"inset-y-2 right-10"} text-gray-400`}>
                <IconInput/>
              </span>
            :
              <span className={`absolute  ${sizeInput == "sm" ? "inset-y-1 right-4" :"inset-y-2 right-10"} text-gray-400`}>
                {passwordVisible ?
                  <EyeOff onClick={()=>tagglePasswordVisibility()} />
                :
                  <Eye onClick={()=>tagglePasswordVisibility()} />
                }
              </span>
            }
            {typeRaw == "password" &&
              <input 
                type={passwordVisible ? "text" : "password"}
                className={cn(inputVariants({ variant, sizeInput, className }))} {...props} />
            }

            {typeRaw != "password" &&
              <input 
                type={typeRaw}
                className={cn(inputVariants({ variant, sizeInput, className }))} {...props} />
            }
    </div>
  )
    
}

export default Input;

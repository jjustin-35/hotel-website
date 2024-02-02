import { FC } from "react";
import LoginLayout from "@/components/LoginLayout"
import SignupForm from "@/components/SignupForm";
const Signup:FC = ()=>{
    return(
       <LoginLayout>
           <SignupForm />
       </LoginLayout>    )
}

export default Signup
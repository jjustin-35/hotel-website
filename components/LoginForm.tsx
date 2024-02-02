'use client'
import { FC, useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { Input } from "./FormElements";
import Link from "next/link";
import axios from "axios";
import config from '../config/index';
import Loading from "./Loading";
import Swal from 'sweetalert2';


type Inputs = {
    example: string,
    exampleRequired: string,
  };

  interface formData {
    email: string;
    password: string;
  }
  
const LoginForm: FC = () => {
    const [isLoading,setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({mode:'onTouched'});
    const router = useRouter();
    const onsubmit = async(data)=>{  
        const {email , password} = data
        const form:formData = {
            email:email,
            password:password
        }
        try {
            setIsLoading(true);
            const res = await axios.post(`${config.API_URL}/api/v1/user/login`,form);
            const {status} = res.data;
            const { name } = res.data.result;
            router.push('/')
            if(status){
                Swal.fire({
                    title: '登入成功!',
                    text: `歡迎 ${name}`,
                    icon: 'success',
                  })
            }
            setIsLoading(false);
            
        } catch (error) {
            const{ message } = error.response.data;
            if (error instanceof Error) {
                Swal.fire({
                    title: '登入失敗!',
                    text: message,
                    icon: 'error',
                  })
              } else {
                console.log('Unexpected error', error);
              }
              setIsLoading(false);
        }
    }
    return (
        <div className='loginForm'>
            <Loading  isLoading = {isLoading}/>
            <div className="mb-5">
                <p className='text-primary mb-2'>享樂酒店，誠摯歡迎</p>
                <h1 className='text-white fw-bold'>立即開始旅程</h1>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="mb-3">
                    <Input
                        id='email'
                        labelText='Email'
                        type='email'
                        errors={errors}
                        register={register}
                        rules={{
                            required: 'Email 為必填',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Email 格式不正確',
                            },
                        }}
                        placeholder="hello@exsample.com"
                    ></Input>
                </div>
                <div className="mb-3">
                <Input
                        id='password'
                        labelText='密碼'
                        type='password'
                        errors={errors}
                        register={register}
                        rules={{
                            required: '密碼為必填',
                        }}
                        placeholder="請輸入密碼"
                    ></Input>
                </div>
                <div className="mb-5">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input type="checkbox" id="remember" className='form-check-input' />
                            <label htmlFor="remember" className='text-white'>記住帳號</label>
                        </div>
                        <div className="forget">
                            <a href="#">忘記密碼?</a>
                        </div>
                    </div>
                </div>

                <button type='submit' className='btn w-100 py-3 rounded mb-5 btn-login' style={{ background: 'white' }}>會員登入</button>
                <span className='text-white'>沒有會員嗎?</span><Link href='/auth/signup' className='ms-2'>前往註冊</Link>
            </form>
        </div>
    )
}
export default LoginForm
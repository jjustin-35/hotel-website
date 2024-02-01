'use client'
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./FormElements";
import Link from "next/link";



type Inputs = {
    example: string,
    exampleRequired: string,
  };

const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({mode:'onTouched'});
    const onsubmit = (data)=>{
        console.log(data)
    }
    return (
        <div className='loginForm'>
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
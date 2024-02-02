'use client'
import { FC, useEffect, useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, CheckboxRadio } from "./FormElements";
import Link from "next/link";
import axios from "axios";
import config from '../config/index';
import Loading from "./Loading";
import Swal from 'sweetalert2';

type Inputs = {
    example: string,
    exampleRequired: string,
};
const SignupForm: FC = () => {
    const formStep1 = useRef<HTMLDivElement>(null);
    const formStep2 = useRef<HTMLDivElement>(null);
    const step1 = useRef<HTMLHeadingElement>(null);
    const stepCompleted = useRef<HTMLElement>(null);
    const stepperItem2 = useRef<HTMLLIElement>(null);
    const [addressData, setAddressData] = useState([]);
    const [chosenCity, setChosenCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [checked,setChecked] = useState('');
    const [isLoading,setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors },getValues } = useForm<Inputs>({ mode: 'onTouched' });

    type Inputs ={
        name: string;
        email: string;
        password: string;
        phone: string;
        birthday: string;
        detail:string
    }
    
    interface Address {
        zipcode: number;
        detail: string;
      }
      
      interface formData {
        name: string;
        email: string;
        password: string;
        phone: string;
        birthday: string;
        address: Address;
      }

    const onsubmit:SubmitHandler<Inputs> = async(data) => {
        const {name,email,password,phone,birthday,detail} = data
        const form:formData = {
            name:name,
            email:email,
            password:password,
            phone:phone,
            birthday:new Date(birthday).toLocaleDateString(),
            address:{
                zipcode:Number(zipCode),
                detail:detail
            }
        }
        try {
            setIsLoading(true)
            const res = await axios.post(`${config.API_URL}/api/v1/user/signup`,form);
            const {status} = res.data;
            //console.log(res.data)
            if(status){
                Swal.fire({
                    text: '註冊成功!',
                    icon: 'success',
                  })
            }
            setIsLoading(false);
        } catch (error) {
            const {message} = error.response.data
            if (error instanceof Error) {
                Swal.fire({
                    title: '註冊失敗!',
                    text: message,
                    icon: 'error',
                  })
              } else {
                console.log('Unexpected error', error);
              }
              setIsLoading(false);
        }
        
    }


    useEffect(() => {
        (async () => {
            const result = await axios.get('/taiwan.json')
            setAddressData(result.data);
        })();
    }, [])

    function nextStep() {
        formStep1.current?.classList.add('d-none');
        step1.current?.classList.add('d-none');
        stepCompleted.current?.classList.remove('d-none');
        stepCompleted.current?.classList.add('d-flex');
        formStep2.current?.classList.remove('d-none');
        formStep2.current?.classList.add('d-block');
        stepperItem2.current?.classList.add('active');
    }

    function prevStep(){
        formStep1.current?.classList.remove('d-none');
        step1.current?.classList.remove('d-none');
        stepCompleted.current?.classList.add('d-none');
        stepCompleted.current?.classList.remove('d-flex');
        formStep2.current?.classList.add('d-none');
        formStep2.current?.classList.remove('d-block');
        stepperItem2.current?.classList.remove('active');
    }

    return (
        
        <div className='loginForm'>
            <Loading isLoading={isLoading}/>
            <div className="mb-3">
                <p className='text-primary mb-2'>享樂酒店，誠摯歡迎</p>
                <h1 className='text-white fw-bold'>立即註冊</h1>
                <div >
                    <ol className="stepper px-0">
                        <li className="stepper_item active" >
                            <h3 className="stepper_num mb-2" ref={step1}> 1 </h3>
                            <i className="bi bi-check-lg stepper_num mb-2 completed d-none" ref={stepCompleted}></i>
                            <p className="stepper_title">輸入信箱及密碼</p>
                        </li>
                        <li className="stepper_item" ref={stepperItem2}>
                            <h3 className="stepper_num mb-2" >2</h3>
                            <p className="stepper_title">填寫基本資料</p>
                        </li>
                    </ol>
                </div>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="formStep1" ref={formStep1} >
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
                            action={(e:any)=>setEmail(e.target.value)}
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
                            action={(e)=>setPassword(e.target.value)}
                        ></Input>
                    </div>
                    <div className="mb-5">
                        <Input
                            id='checked'
                            labelText='確認密碼'
                            type='password'
                            errors={errors}
                            register={register}
                            rules={{
                                required: '確認密碼為必填',
                                validate: (match) => {
                                    const password = getValues('password');
                                    return match === password || '與密碼不符合'
                                }
                            }}
                            placeholder="請再次輸入密碼"
                            action={(e)=>setChecked(e.target.value)}
                        ></Input>
                    </div>
                    <button type='button' className='btn w-100 py-3 rounded mb-3 btn-login' style={{ background: 'white' }} disabled={!email || !password || !checked || password !== checked} onClick={() => { nextStep() }}>下一步</button>
                </div>
                <div className="formStep2 d-none" ref={formStep2}>
                    <div className="mb-3">
                        <Input
                            id='name'
                            labelText='姓名'
                            type='text'
                            errors={errors}
                            register={register}
                            rules={{
                                required: '姓名為必填',
                            }}
                            placeholder="請輸入您的名字"
                        ></Input>
                    </div>
                    <div className="mb-3">
                        <Input
                            id='phone'
                            labelText='手機號碼'
                            type='tel'
                            errors={errors}
                            register={register}
                            rules={{
                                required: '手機號碼為必填',
                                minLength: {
                                    value: 10,
                                    message: '手機不少於 10 碼'
                                },
                                maxLength: {
                                    value: 10,
                                    message: '手機不超過 10 碼'
                                }
                            }}
                            placeholder="請輸入手機號碼"
                        ></Input>
                    </div>
                    <div className="mb-3">
                        <Input
                            id='birthday'
                            labelText='生日'
                            type='date'
                            errors={errors}
                            register={register}
                            rules={{
                                required: '生日為必填',
                            }}
                            placeholder=""
                        ></Input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className='text-white mb-2'>地址</label>
                        <div className="row mb-3 g-2">
                            <div className="col-6">
                                <select className="form-select rounded" id="city" onChange={(e) => setChosenCity(e.target.value)}>
                                    <option value="">請選擇縣市</option>
                                    {addressData.map((city) => {
                                        return (
                                            <option value={city.CityName} key={city.CityEngName}>{city.CityName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-6">
                                <select className="form-select rounded" id="city" disabled={!chosenCity} onChange={(e) => setZipCode(e.target.value)}>
                                    <option value="">請選擇鄉鎮市區</option>
                                    {addressData.find((city) => city.CityName === chosenCity)?.AreaList?.map((area) => {
                                        return <option value={area.ZipCode} key={area.AreaName}>{area.AreaName}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        {/* <input type="text" className="form-control rounded"
                        {...register('detail',{required:'請輸入詳細地址'})}
                        placeholder="請輸入詳細地址" /> */}
                        <Input
                            id='detail'
                            labelText=''
                            type='text'
                            errors={errors}
                            register={register}
                            rules={{
                                required: '請輸入詳細地址',
                            }}
                            placeholder="請輸入詳細地址"
                        ></Input>
                    </div>
                    <div className="mb-5">
                        {/* <input type="checkbox" id="agree" className="form-check-input me-2" />
                        <label htmlFor="agree" className="text-white">我已閱讀並同意本網站個資使用規範</label> */}
                        <CheckboxRadio
                            type='checkbox'
                            id='agree'
                            name="agree"
                            labelText='我已閱讀並同意本網站個資使用規範'
                            errors={errors}
                            register={register}
                            value="false"
                            rules={{
                                required: '請同意本網站個資使用規範',
                            }}
                        >
                        </CheckboxRadio>
                    </div>
                    <button type="button" className="btn btn-primary text-white rounded w-100 mb-3" onClick={()=>prevStep()}>上一步</button>
                    <button type='submit' className='btn w-100 py-3 rounded mb-3 btn-login' style={{ background: 'white' }}>完成註冊</button>
                </div>
            </form>
            <span className='text-white'>已經有會員了嗎?</span><Link href='/auth/login' className='ms-2'>立即登入</Link>
        </div>
    )
}

export default SignupForm
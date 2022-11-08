import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {};

function ContactMe({ }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData =>{
    window.location.href = `mailto:p.phansalithong@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}. ${formData.email}`;
  }
  ;
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center md:flex-row max-w-7xl justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

      <div className='flex flex-col space-y-2 md:space-y-5'>
        <h4 className="text-1xl md:text-4xl font-semibold text-center">
          I have got just what you need. {" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className='space-y-1 md:space-y-3'>
          <div className='flex items-center space-x-3 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-sm md:text-1xl'>+85620 9968 6599</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-sm md:text-1xl'>p.phansalithongg@gmail.com</p>
          </div>

          <div className='flex items-center space-x-3 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-sm md:text-1xl'>Dongpaina RD, Phonsinuan, Sisattanak VTE 01020</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
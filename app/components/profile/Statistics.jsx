import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { PiClockCountdownLight } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import {useTranslations} from 'next-intl';

export default function Statistics () {
    const t = useTranslations('profile');

    const data = {
        courses : "3",
        hours:"56",
        skills:"7",
    }
    

  return (
    
    <div className='w-full h-full flex flex-col lg:m-5 '>
        <h1 className=' text-3xl font-semibold'>
            {t("h1")}
        </h1>

        <div className=' grid gap-2 mb-12 md:grid-cols-3 sm:grid-cols-2 lg:m-5'>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-blue-200 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <AiOutlineCheck className='text-blue-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>{t("hourslearned")}</p>
                        <p className='font-bold  text-base'> {data.hours} </p>
                    </div>
            </div>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-orange-200 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <PiClockCountdownLight className='text-orange-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>{t("skills")}</p>
                        <p className='font-bold  text-base'> {data.skills} </p>
                    </div>
            </div>
            <div className='flex flex-col items-start justify-between p-2 bg-slate-100 rounded-3xl dark:bg-slate-800 space-y-5'>
                <div className='icon bg-lime-100 w-full rounded-xl p-7 flex justify-center items-center '> 
                        <FaTrophy className='text-lime-500' />
                    </div>
                    <div className='w-full px-3 flex flex-col justify-center items-center space-y-2'>
                        <p className=' text-md sm:text-xs font-medium'>{t("finished")}</p>
                        <p className='font-bold  text-base'> {data.courses} </p>
                    </div>
            </div>


        </div>

    </div>

    
  )
}

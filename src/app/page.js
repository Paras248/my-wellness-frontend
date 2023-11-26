"use client";
import React, { useMemo, useState } from "react";
import Header from "@/components/header/Header";
import backgroundImage from "../../public/background.jpg";
import mainImage from "../../public/main.svg";
import Image from "next/image";
import { Coiny } from "next/font/google";
import Link from "next/link";
const coiny = Coiny({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
    return (
        <>
            <Image
                className='h-screen absolute max-w-[77%] rounded-tr-[100%] opacity-50 z-[-1]'
                src={backgroundImage}
                alt='background image'
            />
            <Header>
                <Link href='/login/admin' className='duration-300 ease-linear hover:font-bold'>
                    Login as admin
                </Link>
                <Link href='/login/hospital' className='duration-300 ease-linear hover:font-bold'>
                    Login as hospital
                </Link>
                <Link href='/login/chemist' className='duration-300 ease-linear hover:font-bold'>
                    Login as chemist
                </Link>
            </Header>
            <div>
                <div className='grid grid-cols-2'>
                    <div className='text-black mt-[30%] text-[2.9em] ml-[15%]'>
                        <p className={coiny.className}>Because Health</p>
                        <p className={coiny.className}>Matters.</p>
                    </div>
                    <div>
                        <Image className='m-[5px] mt-[8%]' src={mainImage} alt='exercise img' />
                    </div>
                </div>
            </div>
        </>
    );
}

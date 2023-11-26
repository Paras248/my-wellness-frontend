"use client";
import Header from "@/components/header/Header";
import LoginLayout from "@/components/layouts/LoginLayout";
import React from "react";
import image from "../../../../public/Doctors-rafiki.svg";
import Link from "next/link";

const page = () => {
    return (
        <>
            <Header>
                <Link href='/login/admin' className='duration-300 ease-linear hover:font-bold'>
                    Login as admin
                </Link>
                <Link href='/login/hospital' className='font-bold'>
                    Login as hospital
                </Link>
                <Link href='/login/chemist' className='duration-300 ease-linear hover:font-bold'>
                    Login as chemist
                </Link>
            </Header>
            <LoginLayout placeholder='User Id' imageSource={image} loginFor='hospital' />
        </>
    );
};

export default page;

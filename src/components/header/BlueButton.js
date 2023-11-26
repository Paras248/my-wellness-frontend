import Link from "next/link";
import React from "react";

const BlueButton = (props) => {
    return (
        <Link href={props.href} className='no-underline'>
            <button className='flex justify-center items-center w-full py-[10px] px-[20px] text-[14.5px] bg-[#0f0fec] outline-none border-none text-white font-bold rounded-[30px] transition duration-200 ease-linear hover:bg-[#1616b1]'>
                {props.text}
            </button>
        </Link>
    );
};

export default BlueButton;

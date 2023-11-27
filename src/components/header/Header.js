import Link from "next/link";
import React from "react";

const Header = ({ children, ...props }) => {
    return (
        <header className='flex flex-row py-6 px-3 bg-white items-center' {...props}>
            <Link href='/' className='flex-1 ml-4'>
                <p className='text-[1.1em] text-[#1fbea9] font-bold '>MyWellness</p>
            </Link>
            <div className='flex flex-row gap-4 mr-4'>{children}</div>
        </header>
    );
};

export default Header;

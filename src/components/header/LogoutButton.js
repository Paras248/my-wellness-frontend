import Link from "next/link";
import React from "react";
import { Logout } from "@mui/icons-material";

const LogoutButton = (props) => {
    return (
        <Link href='/' className='no-underline'>
            <button
                className='flex justify-center items-center w-full py-[10px] px-[20px] text-[14.5px] bg-[#0f0fec] outline-none border-none text-white font-bold rounded-[30px] transition duration-200 ease-linear hover:bg-[#1616b1]'
                onClick={() => localStorage.removeItem(`${props.logoutFor}Token`)}
            >
                Logout
                <Logout style={{ fontSize: 18, marginLeft: 10 }} />
            </button>
        </Link>
    );
};

export default LogoutButton;

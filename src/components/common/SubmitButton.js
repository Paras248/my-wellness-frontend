import React from "react";
import { Button } from "@chakra-ui/react";

const SubmitButton = ({ text, ...props }) => {
    return (
        <Button
            className='h-[40px] bg-[#2935e0] hover:bg-black rounded-[5px] text-white font-bold text-[15px] outline-none border-none ml-[2%] mr-[1%] mt-[30px] transition duration-270 ease-linear'
            type='submit'
            {...props}
        >
            {text}
        </Button>
    );
};

export default SubmitButton;

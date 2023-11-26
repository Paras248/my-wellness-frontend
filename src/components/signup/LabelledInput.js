import React from "react";

const LabelledInput = (props) => {
    return (
        <div className='flex items-center p-[10px] mt-[20px]'>
            <label htmlFor={props.id} className='text-[teal] ml-[10px]'>
                {props.label}:
            </label>
            <input
                id={props.id}
                className='outline-none flex-1 border-t-0 border-l-0 border-r-0 border-b-[2px] border-black text-[17px] ml-[10px]'
                value={props.value}
                type={props.type}
                onChange={(e) => props.setFunction(e.target.value)}
            />
        </div>
    );
};

export default LabelledInput;

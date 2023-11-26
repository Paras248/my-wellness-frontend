import React from "react";

const LabelledSelect = (props) => {
    return (
        <div className='flex items-center p-[10px] mt-[20px]'>
            <label htmlFor={props.id} className='text-[teal] ml-[10px]'>
                Gender:{" "}
            </label>
            <select
                id={props.id}
                className='flex-1 p-[10px] ml-[10px] border-t-0 border-l-0 border-r-0 border-b-2 border-black focus:border-b-[3px] focus:outline-none'
                onChange={(e) => props.setFunction(e.target.value)}
            >
                <option className='bg-white text-[15px]' value='Male'>
                    Male
                </option>
                <option className='bg-white text-[15px]' value='Female'>
                    Female
                </option>
                <option className='bg-white text-[15px]' value='Others'>
                    Others
                </option>
            </select>
        </div>
    );
};

export default LabelledSelect;

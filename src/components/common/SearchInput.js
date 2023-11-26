import React, { useState } from "react";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useRouter } from "next/navigation";

const SearchInput = (props) => {
    const [patientId, setPatientId] = useState("");
    const [entered, setEntered] = useState(false);
    const routeTo =
        props.searchAs === "chemist" ? "/chemist/prescription" : "/hospital/search/patient";
    const router = useRouter();

    const onClickHandler = (event) => {
        const options = {
            method: "GET",
            url: `http://localhost:9000/api/data/patient/${patientId.trim()}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(`${props.searchAs}Token`)}`,
            },
        };
        axios
            .request(options)
            .then((response) => {
                localStorage.setItem("patient", JSON.stringify(response.data));
                router.push(routeTo);
            })
            .catch((err) => {
                props.setError(true);
                props.setErrorMessage(err.response.data);
            });
    };

    const onFocusHandler = () => {
        props.setError(false);
        setEntered(true);
    };

    return (
        <InputGroup
            className='w-[60%] h-[50] p-[10px] absolute left-[20%] top-[40%] shadow-[rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_56px,rgba(17,17,26,0.1)_0px_24px_80px]'
            borderRadius='full'
        >
            <InputLeftElement pointerEvents='none' className='mt-[15px] ml-[13px]'>
                <SearchIcon className='text-[grey]' />
            </InputLeftElement>
            <Input
                type='text'
                placeholder='Search Patient'
                variant='solid'
                className='rounded-[30px] h-[50px]'
                onChange={(e) => setPatientId(e.target.value)}
                onFocus={onFocusHandler}
                onBlur={() => setEntered(false)}
            />
            <InputRightElement width='5rem' className='mt-[15px] mr-[15px]'>
                <Button
                    className='rounded-[50px] bg-[#cdcdd2] hover:bg-[#b2b3cd] transition duration-270 ease-linear'
                    h='2.3rem'
                    size='md'
                    onClick={onClickHandler}
                >
                    <p className='text-sm'>Search</p>
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchInput;

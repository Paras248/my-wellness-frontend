import React, { useState } from "react";
import SearchInput from "./SearchInput";

const SearchPatient = (props) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const searchAs = props.searchAs;

    return (
        <div className='opacity-[0.9] bg-gradient-to-r from-sky-500 to-indigo-500 min-h-[100vh] min-w-screen bg-[100%] bg-no-repeat'>
            {error && (
                <p className='text-[red] text-[15px] absolute left-[22%] top-[37%]'>
                    {errorMessage}
                </p>
            )}
            <SearchInput
                setError={setError}
                setErrorMessage={setErrorMessage}
                searchAs={searchAs}
            />
        </div>
    );
};

export default SearchPatient;

"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/common/SubmitButton";
import Header from "@/components/header/Header";
import BorderedInput from "@/components/hospital/BorderedInput";
import SignupOrAddLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import { useRouter } from "next/navigation";
import BlueButton from "@/components/header/BlueButton";
import LogoutButton from "@/components/header/LogoutButton";

const page = () => {
    const [diagnosis, setDiagnosis] = useState("");
    const [patientId, setPatientId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [hospitalId, setHospitalId] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [medicine, setMedicine] = useState("");
    const [dosage, setDosage] = useState("");
    const [medicines, setMedicines] = useState([]);

    const router = useRouter();

    const onFormsubmitHandler = (event) => {
        event.preventDefault();
        setError(false);
        const options = {
            method: "POST",
            url: "http://localhost:9000/api/data/patient/add-record",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("hospitalToken")}`,
            },
            data: {
                diagnosis,
                patientId,
                hospitalId,
                doctorId,
                description,
                prescription: {
                    medicines,
                    doctorId,
                    hospitalId,
                    patientId,
                },
                admissionDate: `${Date.now()}`,
                dischargeDate: `${Date.now()}`,
            },
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Record added successfully");
                router.push("/hospital/search");
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data);
            });
    };

    return (
        <>
            <Header>
                <BlueButton href='/hospital/search' text='Search Patient' />
                <LogoutButton logoutFor='hospital' />
            </Header>

            <SignupOrAddLayout>
                <form onSubmit={onFormsubmitHandler}>
                    {error && <p className='text-[red]'>{errorMessage}</p>}
                    <BorderedInput
                        value={diagnosis}
                        setFunction={setDiagnosis}
                        placeholder='Dignosis'
                    />
                    <BorderedInput
                        value={patientId}
                        setFunction={setPatientId}
                        placeholder='Patient Id'
                    />
                    <BorderedInput
                        value={doctorId}
                        setFunction={setDoctorId}
                        placeholder='Doctor Id'
                    />
                    <BorderedInput
                        value={hospitalId}
                        setFunction={setHospitalId}
                        placeholder='Hospital Id'
                    />
                    <textarea
                        value={description}
                        className='p-[20px] mx-[15px] h-[100px] mb-[10px] resize-none text-[15px] border-[2px] border-black rounded-[5px]'
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className='mx-[15px] flex flex-row '>
                        <input
                            className='w-[35%] text-[17px] h-[40px] px-[15px] border-[2px] border-black rounded-[5px]'
                            placeholder='Medicine'
                            value={medicine}
                            onChange={(e) => setMedicine(e.target.value)}
                        />
                        <input
                            className='mx-[8px] w-[55%] text-[17px] h-[40px] px-[15px] border-[2px] border-black rounded-[5px] mt-[1px]'
                            placeholder='Description'
                            value={dosage}
                            onChange={(e) => setDosage(e.target.value)}
                        />
                        <button
                            className='w-[10%] bg-[#2935e0] hover:bg-black rounded-[5px] text-[15px] outline-none border-none h-[40px] text-white font-bold'
                            type='button'
                            onClick={() => {
                                if (medicine.length > 0 && dosage.length > 0) {
                                    setMedicines((prevState) => [
                                        ...prevState,
                                        { name: medicine, description: dosage },
                                    ]);
                                }
                            }}
                        >
                            Add
                        </button>
                    </div>
                    {medicines?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='flex mx-[15px] mt-[10px] bg-[#cbcaca] p-[10px] rounded-[5px]'
                            >
                                <p>{item.name}:</p>
                                <p className='ml-[10px]'>{item.description}</p>
                            </div>
                        );
                    })}
                    <SubmitButton text='Submit' />
                </form>
            </SignupOrAddLayout>
        </>
    );
};

export default page;

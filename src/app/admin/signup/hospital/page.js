"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import BlueButton from "@/components/header/BlueButton";
import LogoutButton from "@/components/header/LogoutButton";

const page = () => {
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [type, setType] = useState("");

    const onFormSubmitHandler = (event) => {
        setError(false);
        event.preventDefault();

        const data = {
            name: name.trim(),
            contact: contactNo.trim(),
            address: address.trim(),
            type: type.trim(),
            email: email.trim(),
            password: password.trim(),
            city: city.trim(),
            state: state.trim(),
            country: country.trim(),
            pincode: pincode.trim(),
        };

        const options = {
            method: "POST",
            url: "http://localhost:9000/api/auth/signup/hospital",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data,
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Registered Hospital Successfully!!!");
                console.log(response.data);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data);
            });
    };

    return (
        <>
            {/* ================== childs yet to be added to header ================= */}
            <Header>
                <BlueButton href='/admin/signup/patient' text='Register Patient' />
                <BlueButton href='/admin/signup/doctor' text='Register Doctor' />
                <BlueButton href='/admin/signup/chemist' text='Register Chemist' />
                <LogoutButton logoutFor='admin' />
            </Header>
            <SignupLayout heading='Register Hospital'>
                <form onSubmit={onFormSubmitHandler}>
                    {error && <p className='text-[red] ml-[2%]'>{errorMessage}</p>}
                    <LabelledInput
                        label='Name'
                        id='name'
                        value={name}
                        setFunction={setName}
                        type='text'
                    />
                    <LabelledInput
                        label='Contact No'
                        id='ContactNo'
                        value={contactNo}
                        setFunction={setContactNo}
                        type='text'
                    />
                    <LabelledInput
                        label='Address'
                        id='address'
                        value={address}
                        setFunction={setAddress}
                        type='text'
                    />
                    <LabelledInput
                        label='City'
                        id='city'
                        value={city}
                        setFunction={setCity}
                        type='text'
                    />
                    <LabelledInput
                        label='Pincode'
                        id='pincode'
                        value={pincode}
                        setFunction={setPincode}
                        type='text'
                    />
                    <LabelledInput
                        label='State'
                        id='state'
                        value={state}
                        setFunction={setState}
                        type='text'
                    />
                    <LabelledInput
                        label='Country'
                        id='country'
                        value={country}
                        setFunction={setCountry}
                        type='text'
                    />
                    <LabelledInput
                        label='Type'
                        id='type'
                        value={type}
                        setFunction={setType}
                        type='text'
                    />
                    <LabelledInput
                        label='Email'
                        id='email'
                        value={email}
                        setFunction={setEmail}
                        type='text'
                    />
                    <LabelledInput
                        label='Password'
                        id='password'
                        value={password}
                        setFunction={setPassword}
                        type='text'
                    />
                    <SubmitButton text='Register' />
                </form>
            </SignupLayout>
        </>
    );
};

export default page;

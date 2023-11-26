"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import LabelledSelect from "@/components/signup/LabelledSelect";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import BlueButton from "@/components/header/BlueButton";
import LogoutButton from "@/components/header/LogoutButton";

const page = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [qualification, setQualification] = useState("");
    const [shopName, setShopName] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onFormSubmitHandler = (event) => {
        setError(false);
        event.preventDefault();

        const data = {
            firstName: firstName.trim(),
            middleName: middleName.trim(),
            lastName: lastName.trim(),
            contact: contactNo.trim(),
            address: address.trim(),
            city: city.trim(),
            state: state.trim(),
            country: country.trim(),
            pincode: pincode.trim(),
            email: email.trim(),
            password: password.trim(),
            qualification: qualification.trim(),
            shopName: shopName.trim(),
        };
        for (let ele in data) {
            if (data[ele].length === 0) {
                setError(true);
                setErrorMessage("All fields are required");
                return;
            }
        }
        const options = {
            method: "POST",
            url: "http://localhost:9000/api/auth/signup/chemist",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data,
        };
        axios
            .request(options)
            .then((response) => {
                window.alert("Registered Chemist Successfully!!!");
                console.log(response.data);
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data);
            });
    };

    return (
        <>
            <Header>
                <BlueButton href='/admin/signup/patient' text='Register Patient' />
                <BlueButton href='/admin/signup/doctor' text='Register Doctor' />
                <BlueButton href='/admin/signup/hospital' text='Register Hospital' />
                <LogoutButton logoutFor='admin' />
            </Header>
            <SignupLayout heading='Register Chemist'>
                <form onSubmit={onFormSubmitHandler}>
                    {error && <p className='text-[red] ml-[2%]'>{errorMessage}</p>}
                    <LabelledInput
                        label='First Name'
                        id='FirstName'
                        value={firstName}
                        setFunction={setFirstName}
                        type='text'
                    />
                    <LabelledInput
                        label='Middle Name'
                        id='MiddleName'
                        value={middleName}
                        setFunction={setMiddleName}
                        type='text'
                    />
                    <LabelledInput
                        label='Last Name'
                        id='LastName'
                        value={lastName}
                        setFunction={setLastName}
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
                        label='Shop name'
                        id='shopname'
                        value={shopName}
                        setFunction={setShopName}
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
                        label='Qualification'
                        id='qualification'
                        value={qualification}
                        setFunction={setQualification}
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

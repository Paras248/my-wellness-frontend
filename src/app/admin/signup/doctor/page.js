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
import { useDisclosure } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";

const page = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [qualification, setQualification] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);

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
            age,
            gender,
        };

        const options = {
            method: "POST",
            url: "http://localhost:9000/api/auth/signup/doctor",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data,
        };
        axios
            .request(options)
            .then((response) => {
                setResponse(response.data.user);
                onOpen();
            })
            .catch((err) => {
                setError(true);
                setErrorMessage(err.response.data);
            });
    };

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.doctorId}
                    name={`${response.firstName} ${response.middleName} ${response.lastName}`}
                    contact={response.contact}
                    state={response.state}
                    city={response.city}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            )}
            <Header>
                <BlueButton href='/admin/signup/patient' text='Register Patient' />
                <BlueButton href='/admin/signup/hospital' text='Register Hospital' />
                <BlueButton href='/admin/signup/chemist' text='Register Chemist' />
                <LogoutButton logoutFor='admin' />
            </Header>
            <SignupLayout heading='Register Doctor'>
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
                        label='Date Of Birth'
                        id='dob'
                        value={date}
                        setFunction={setDate}
                        type='date'
                    />
                    <LabelledInput
                        label='Age'
                        id='age'
                        value={age}
                        setFunction={setAge}
                        type='number'
                    />
                    <LabelledSelect label='Gender' id='gender' setFunction={setGender} />
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

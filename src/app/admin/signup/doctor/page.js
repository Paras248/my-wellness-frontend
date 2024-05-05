"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import LabelledSelect from "@/components/signup/LabelledSelect";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";
import LoaderModal from "@/components/common/LoaderModal";

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
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [qualification, setQualification] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
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
            url: "https://mywellness-paras248.koyeb.app/api/auth/signup/doctor",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
            data,
        };
        axios
            .request(options)
            .then((response) => {
                setIsLoading(false);
                setResponse(response.data.user);
                onOpen();
            })
            .catch((err) => {
                setIsLoading(false);
                toast({
                    title: err.response.data,
                    status: "error",
                    isClosable: false,
                    position: "bottom-right",
                    duration: 2000,
                });
            });
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setContactNo("");
        setDate("");
        setAge(0);
        setGender("Male");
        setAddress("");
        setEmail("");
        setPassword("");
        setCity("");
        setState("");
        setCountry("");
        setPincode("");
        setQualification("");
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
                <div className='flex flex-col gap-4'>
                    <NavButton href='/admin/signup/patient' text='Register Patient' />
                    <NavButton active href='/admin/signup/doctor' text='Register Doctor' />
                    <NavButton href='/admin/signup/hospital' text='Register Hospital' />
                    <NavButton href='/admin/signup/chemist' text='Register Chemist' />
                </div>
                <div>
                    <LogoutButton logoutFor='admin' />
                </div>
            </Header>
            <SignupLayout heading='Register Doctor'>
                <form onSubmit={onFormSubmitHandler}>
                    {isLoading && <LoaderModal />}
                    <LabelledInput
                        label='First Name'
                        id='FirstName'
                        value={firstName}
                        setFunction={setFirstName}
                        type='text'
                        name='FirstName'
                    />
                    <LabelledInput
                        label='Middle Name'
                        id='MiddleName'
                        value={middleName}
                        setFunction={setMiddleName}
                        type='text'
                        name='MiddleName'
                    />
                    <LabelledInput
                        label='Last Name'
                        id='LastName'
                        value={lastName}
                        setFunction={setLastName}
                        type='text'
                        name='LastName'
                    />
                    <LabelledInput
                        label='Contact No'
                        id='ContactNo'
                        value={contactNo}
                        setFunction={setContactNo}
                        type='text'
                        name='ContactNo'
                    />
                    <LabelledInput
                        label='Date Of Birth'
                        id='dob'
                        value={date}
                        setFunction={setDate}
                        type='date'
                        name='dob'
                    />
                    <LabelledInput
                        label='Age'
                        id='age'
                        value={age}
                        setFunction={setAge}
                        type='number'
                        name='age'
                    />
                    <LabelledSelect
                        label='Gender'
                        id='gender'
                        name='gender'
                        setFunction={setGender}
                    />
                    <LabelledInput
                        label='Address'
                        id='address'
                        value={address}
                        setFunction={setAddress}
                        type='text'
                        name='address'
                    />
                    <LabelledInput
                        label='City'
                        id='city'
                        value={city}
                        setFunction={setCity}
                        type='text'
                        name='city'
                    />
                    <LabelledInput
                        label='Pincode'
                        id='pincode'
                        value={pincode}
                        setFunction={setPincode}
                        type='text'
                        name='pincode'
                    />
                    <LabelledInput
                        label='State'
                        id='state'
                        value={state}
                        setFunction={setState}
                        type='text'
                        name='state'
                    />
                    <LabelledInput
                        label='Country'
                        id='country'
                        value={country}
                        setFunction={setCountry}
                        type='text'
                        name='country'
                    />
                    <LabelledInput
                        label='Qualification'
                        id='qualification'
                        value={qualification}
                        setFunction={setQualification}
                        type='text'
                        name='qualification'
                    />
                    <LabelledInput
                        label='Email'
                        id='email'
                        value={email}
                        setFunction={setEmail}
                        type='text'
                        name='email'
                    />
                    <LabelledInput
                        label='Password'
                        id='password'
                        value={password}
                        setFunction={setPassword}
                        type='text'
                        name='password'
                    />
                    <SubmitButton
                        text='Register'
                        isLoading={isLoading}
                        variant='outline'
                        spinnerPlacement='start'
                        loadingText='Registering'
                    />
                </form>
            </SignupLayout>
        </>
    );
};

export default page;

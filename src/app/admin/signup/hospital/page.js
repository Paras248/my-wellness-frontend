"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import LabelledInput from "@/components/signup/LabelledInput";
import SubmitButton from "@/components/common/SubmitButton";
import SignupLayout from "@/components/layouts/SignupOrAddLayout";
import axios from "axios";
import NavButton from "@/components/header/NavButton";
import LogoutButton from "@/components/header/LogoutButton";
import { useDisclosure, useToast } from "@chakra-ui/react";
import IdModal from "@/components/admin/IdModal";

const page = () => {
    const [name, setName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [type, setType] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
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
            url: "https://mywellness-paras248.koyeb.app/api/auth/signup/hospital",
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
    };

    return (
        <>
            {isOpen && (
                <IdModal
                    id={response.hospitalId}
                    name={response.name}
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
                    <NavButton href='/admin/signup/doctor' text='Register Doctor' />
                    <NavButton active href='/admin/signup/hospital' text='Register Hospital' />
                    <NavButton href='/admin/signup/chemist' text='Register Chemist' />
                </div>
                <div>
                    <LogoutButton logoutFor='admin' />
                </div>
            </Header>
            <SignupLayout heading='Register Hospital'>
                <form onSubmit={onFormSubmitHandler}>
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

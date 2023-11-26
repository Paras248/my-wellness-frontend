"use client";
import SearchPatient from "@/components/common/SearchPatient";
import BlueButton from "@/components/header/BlueButton";
import Header from "@/components/header/Header";
import LogoutButton from "@/components/header/LogoutButton";
import React from "react";

const page = () => {
    return (
        <>
            <Header>
                <LogoutButton logoutFor='chemist' />
            </Header>
            <SearchPatient searchAs='chemist' />
        </>
    );
};

export default page;

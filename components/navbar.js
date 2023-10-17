'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import UserProfile from "./userprofile";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav ({ sess }) {
    const path = usePathname()
    console.log('sess : ', sess)
    return (
        <Navbar className='justify-around absolute' maxWidth='full'>
            <NavbarBrand as='div' className='text-2xl items-center w-auto'>
                Script
                <p className="font-bold text-inherit">Guardian</p>
            </NavbarBrand>
            <NavbarContent as="div" justify="end">
                <Button variant={ 'flat' } as={ Link } href='/dashboard/add-script' className={ path == '/dashboard/add-script' ? 'hidden' : '' }>Create</Button>
                <UserProfile />
            </NavbarContent>
        </Navbar>
    );
}

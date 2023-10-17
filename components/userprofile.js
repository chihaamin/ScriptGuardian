'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
const UserProfile = () => {
    const { data: session, status } = useSession();
    const route = useRouter()
    if (status == 'authenticated') () => route.push('/');
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger className="flex">
                <Avatar
                    as="button"
                    className="transition-transform"
                    name={ session.user.name }
                    src={ session.user.img }
                    size="md"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" color='secondary' variant="shadow" disabledKeys={ [ "settings", "analytics", "system", "membership" ] }>
                <DropdownItem key="membership" >Membership</DropdownItem>
                <DropdownItem key="settings">My Scripts</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={ signOut }>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default UserProfile
'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, User } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
const UserProfile = () => {
    const { data: session } = useSession();
    const route = useRouter()
    if (!session) () => route.push('/');
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <User
                    as="button"
                    className="transition-transform"
                    description={ session.user.title }
                    name={ session.user.name }
                > <Avatar
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        size="md"
                        src={ session.user.img }
                    /></User>

            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={ [ "settings", "analytics", "system", "membership" ] }>
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
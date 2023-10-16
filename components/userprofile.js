'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';

const UserProfile = () => {
    const { data: session } = useSession();
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={ session.user.name }
                    size="md"
                    src={ session.user.img }
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2 cursor-default">
                    <p className="font-semibold ">Signed in as : { session.user.name }</p>
                </DropdownItem>
                <DropdownItem key="team_settings">Membership</DropdownItem>
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
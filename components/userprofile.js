'use client'
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, User } from "@nextui-org/react";
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";
const UserProfile = () => {
    const { data: session } = useSession();
    const route = useRouter()
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={ {
                        isBordered: true,
                        src: `${session.user.img}`

                    } }
                    className="transition-transform"
                    description={ session.user.title }
                    name={ session.user.name }
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={ [ "settings", "analytics", "system", "membership" ] }>
                <DropdownItem isReadOnly key="profile" className="h-14 gap-2 cursor-default">
                    <p className="font-semibold ">Signed in as : { session.user.name }</p>
                </DropdownItem>
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